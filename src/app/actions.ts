"use server";

import { generateExampleCode } from "@/ai/flows/generate-example-code";

export async function generateCodeAction(prompt: string, language: string): Promise<{
  success: boolean;
  code?: string;
  error?: string;
}> {
  try {
    if (!prompt) {
      return { success: false, error: "Prompt cannot be empty." };
    }
    if (!language) {
      return { success: false, error: "Language must be selected." };
    }

    const result = await generateExampleCode({ prompt, language });
    
    if (!result.code) {
        return { success: false, error: "AI failed to generate code." };
    }

    return { success: true, code: result.code };
  } catch (error) {
    console.error("Error generating code:", error);
    return {
      success: false,
      error: "An unexpected error occurred while generating code.",
    };
  }
}
