import { InferType, number, object, string } from "yup";

export const LocationSchema = object({
  Address: string().required(),
  City: string().required(),
  State: string().required(),
  PostalCode: number().required(),
  ServiceArea: string().required(),
});

export type LocationFormType = InferType<typeof LocationSchema>;
