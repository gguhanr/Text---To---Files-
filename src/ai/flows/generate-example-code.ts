'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating example code snippets based on a text prompt and language.
 *
 * The flow takes a text prompt and a target programming language as input and returns an example code snippet.
 *
 * @example
 * // Example usage:
 * const result = await generateExampleCode({
 *   prompt: 'Create a simple HTTP server',
 *   language: 'python',
 * });
 *
 * console.log(result.code);
 *
 * @interface GenerateExampleCodeInput - Represents the input schema for the generateExampleCode function.
 * @interface GenerateExampleCodeOutput - Represents the output schema for the generateExampleCode function.
 * @function generateExampleCode - The main function to generate example code.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExampleCodeInputSchema = z.object({
  prompt: z.string().describe('The text prompt describing the desired code functionality.'),
  language: z.string().describe('The target programming language for the code snippet.'),
});

export type GenerateExampleCodeInput = z.infer<typeof GenerateExampleCodeInputSchema>;

const GenerateExampleCodeOutputSchema = z.object({
  code: z.string().describe('The generated example code snippet.'),
});

export type GenerateExampleCodeOutput = z.infer<typeof GenerateExampleCodeOutputSchema>;

const generateExampleCodePrompt = ai.definePrompt({
  name: 'generateExampleCodePrompt',
  input: {schema: GenerateExampleCodeInputSchema},
  output: {schema: GenerateExampleCodeOutputSchema},
  prompt: `You are an expert software developer who can generate code examples in various programming languages.

  Based on the user's prompt and desired language, create a concise and functional code snippet that demonstrates the requested functionality.

  Language: {{{language}}}
  Prompt: {{{prompt}}}

  Ensure the generated code is well-formatted, readable, and includes comments where necessary to explain key concepts.
  `,
});

const generateExampleCodeFlow = ai.defineFlow(
  {
    name: 'generateExampleCodeFlow',
    inputSchema: GenerateExampleCodeInputSchema,
    outputSchema: GenerateExampleCodeOutputSchema,
  },
  async input => {
    const {output} = await generateExampleCodePrompt(input);
    return output!;
  }
);

export async function generateExampleCode(input: GenerateExampleCodeInput): Promise<GenerateExampleCodeOutput> {
  return generateExampleCodeFlow(input);
}
