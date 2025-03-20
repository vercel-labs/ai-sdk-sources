<a href="https://ai-sdk-sources.vercel.app">
  <h1 align="center">AI SDK Sources</h1>
</a>

<p align="center">
  A Next.js chatbot powered by the AI SDK and real-world search results across providers like Google, Perplexity, and OpenAI.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- Uses ([OpenAI](https://openai.com), [Google](https://gemini.google.com), and [Perplexity](https://perplexity.ai)) with a unified interface powered by the [AI SDK by Vercel](https://sdk.vercel.ai/docs).
- Responses grounded in real-time web search results across all providers, showcasing sources support in the AI SDK.
- Consistent streaming text experience regardless of the underlying AI model being used.
- [shadcn/ui](https://ui.shadcn.com/) components for a modern, responsive UI powered by [Tailwind CSS](https://tailwindcss.com).
- Built with the latest [Next.js](https://nextjs.org) App Router.

## Deploy Your Own

You can deploy your own version to Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-sources&env=OPENAI_API_KEY,GROQ_API_KEY,FIREWORKS_API_KEY&project-name=ai-sdk-sources&demo-title=AI%20SDK%20Sources&demo-url=https%3A%2F%2Fai-sdk-sources.vercel.app)

## Running Locally

1. Clone the repository and install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. Install the [Vercel CLI](https://vercel.com/docs/cli):

   ```bash
   npm i -g vercel
   # or
   yarn global add vercel
   # or
   pnpm install -g vercel
   ```

   Once installed, link your local project to your Vercel project:

   ```bash
   vercel link
   ```

   After linking, pull your environment variables:

   ```bash
   vercel env pull
   ```

   This will create a `.env.local` file with all the necessary environment variables.

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view your new AI chatbot application.

## Authors

This repository is maintained by the [Vercel](https://vercel.com) team and community contributors.

Contributions are welcome! Feel free to open issues or submit pull requests to enhance functionality or fix bugs.
