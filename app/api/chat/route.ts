import { model, modelID } from "@/ai/providers";
import { openai } from "@ai-sdk/openai";
import { smoothStream, streamText, UIMessage } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    selectedModel,
  }: { messages: UIMessage[]; selectedModel: modelID } = await req.json();

  const result = streamText({
    model: model.languageModel(selectedModel),
    system: `You are a helpful assistant. Keep your responses short (< 100 words) unless you are asked for more details. The AI SDK always refers to the AI SDK by Vercel (sdk.vercel.ai).${selectedModel === "perplexity" ? " Do not include sources inline." : ""}${selectedModel === "openai" ? " ALWAYS USE SEARCH." : ""}`,
    messages,
    tools: {
      ...(selectedModel === "openai"
        ? { webSearch: openai.tools.webSearchPreview() }
        : {}),
    },
    experimental_transform: smoothStream(),
    experimental_telemetry: {
      isEnabled: true,
    },
  });

  return result.toDataStreamResponse({
    sendReasoning: true,
    sendSources: true,
    getErrorMessage: (error) => {
      if (error instanceof Error) {
        return error.message;
      }
      console.error(error);
      return "An unknown error occurred.";
    },
  });
}
