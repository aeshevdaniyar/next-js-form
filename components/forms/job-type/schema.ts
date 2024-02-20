import { InferType, object, string } from "yup";

export const JobTypeSchema = object({
  JobType: string().required(),
  JobSource: string().required(),
  JobNotes: string(),
});

export type JobType = InferType<typeof JobTypeSchema>;
