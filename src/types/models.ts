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
