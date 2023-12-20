import { z } from "zod";

const chatRequestSchema = z.object({
  model: z.string(),
  messages: z.array(
    z.object({
      role: z.string(),
      content: z.string(),
    })
  ),
  temperature: z.number().optional(),
  max_tokens: z.number().optional(),
  top_p: z.number().optional(),
  random_seed: z.number().optional(),
  stream: z.boolean().optional(),
  safe_prompt: z.boolean().optional(),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;

export const ChatResponseSchema = z.object({
  id: z.string(),
  object: z.string(),
  created: z.number(),
  model: z.enum(["mistral-tiny", "mistral-small", "mistral-medium"]),
  choices: z.array(
    z.object({
      index: z.number(),
      message: z.object({
        role: z.string(),
        content: z.string(),
      }),
      finish_reason: z.string(),
    })
  ),
});

export type ChatResponse = z.infer<typeof ChatResponseSchema>;

const ChatCompletionRequestSchema = z.object({
  model: z.string(),
  messages: z.array(
    z.object({
      role: z.string(),
      content: z.string(),
    })
  ),
  temperature: z.number().optional(),
  maxTokens: z.number().optional(),
  topP: z.number().optional(),
  randomSeed: z.number().optional(),
  stream: z.boolean().optional(),
  safeMode: z.boolean().optional(),
});

export type ChatCompletionRequest = z.infer<typeof ChatCompletionRequestSchema>;
