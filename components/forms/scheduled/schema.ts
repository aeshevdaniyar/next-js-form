import { InferType, date, object, string } from "yup";

export const ScheduledSchema = object({
  StartDate: date().required(),
  StartTime: string().required(),
  EndTime: string().required(),
});

export type ScheduledType = InferType<typeof ScheduledSchema>;
