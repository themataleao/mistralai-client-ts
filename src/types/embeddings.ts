import { z } from "zod";

// Request schema
const embeddingsRequestSchema = z.object({
  model: z.string(),
  input: z.array(z.string()),
  stream: z.boolean().optional(),
});

export type EmbeddingsRequest = z.infer<typeof embeddingsRequestSchema>;

// Response schema
const embeddingsResponseSchema = z.object({
  id: z.string(),
  object: z.string(),
  data: z.array(
    z.object({
      object: z.string(),
      embedding: z.array(z.number()),
      index: z.number(),
    })
  ),
  usage: z.object({
    prompt_tokens: z.number(),
    total_tokens: z.number(),
    completion_tokens: z.number(),
  }),
});

export type EmbeddingsResponse = z.infer<typeof embeddingsResponseSchema>;
