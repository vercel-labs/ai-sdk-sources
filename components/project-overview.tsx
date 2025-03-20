import NextLink from "next/link";
export const ProjectOverview = () => {
  return (
    <div className="flex flex-col items-center justify-end">
      <h1 className="text-3xl font-semibold mb-4">AI SDK Sources</h1>
      <p className="text-center">
        An Open-Source chatbot that uses web search across multiple AI models (<Link href="https://openai.com">OpenAI</Link>,{" "}
        <Link href="https://cloud.google.com/vertex-ai">Google</Link>, and{" "}
        <Link href="https://perplexity.ai">Perplexity</Link>) with the{" "}
        <Link href="https://sdk.vercel.ai/docs">AI SDK</Link>.
      </p>
    </div>
  );
};

const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <NextLink
      target="_blank"
      className="text-blue-500 hover:text-blue-600 transition-colors duration-75"
      href={href}
    >
      {children}
    </NextLink>
  );
};