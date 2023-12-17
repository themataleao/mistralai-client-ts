import { z } from "zod";

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

export type ChatCompletionRequestType = z.infer<
  typeof ChatCompletionRequestSchema
>;
