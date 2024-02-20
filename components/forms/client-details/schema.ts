import { InferType, object, string } from "yup";

export const ClientDetailsSchema = object({
  FirstName: string().required(),
  LastName: string().required(),
  Phone: string().required(),
  Email: string().email().required(),
});

export type ClientDetailsType = InferType<typeof ClientDetailsSchema>;
