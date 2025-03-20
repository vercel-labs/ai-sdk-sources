import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
import { perplexity } from "@ai-sdk/perplexity";

import {
  customProvider,
} from "ai";

// custom provider with different model settings:
export const model = customProvider({
  languageModels: {
    google: google("gemini-1.5-flash-latest", { useSearchGrounding: true }),
    openai: openai.responses("gpt-4o-mini"),
    perplexity: perplexity("sonar"),
  },
});

export type modelID = Parameters<(typeof model)["languageModel"]>["0"];
