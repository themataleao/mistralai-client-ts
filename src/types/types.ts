import { z } from "zod";

const ModelPermissionSchema = z.object({
  id: z.string(),
  object: z.string(),
  created: z.number(),
  allow_create_engine: z.boolean(),
  allow_sampling: z.boolean(),
  allow_logprobs: z.boolean(),
  allow_search_indices: z.boolean(),
  allow_view: z.boolean(),
  allow_fine_tuning: z.boolean(),
  organization: z.string(),
  group: z.string().nullable(),
  is_blocking: z.boolean(),
});

type ModelPermission = z.infer<typeof ModelPermissionSchema>;

const MistralListModelsSchema = z.object({
  id: z.string(),
  object: z.string(),
  created: z.number(),
  owned_by: z.string(),
  root: z.string(),
  parent: z.string(),
  permission: z.array(ModelPermissionSchema),
});

type MistralListModels = z.infer<typeof MistralListModelsSchema>;

export type MistralListModelsResponse = {
  object: "string";
  data: MistralListModels[];
};

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
