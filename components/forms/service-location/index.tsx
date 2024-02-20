"use client"
import { NestedForm } from "@/lib/nested-form";
import { FC } from "react";
import { LocationFormType } from "./schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
type ServiceLocationForm = {
  form: NestedForm<LocationFormType>;
};
export const ServiceLocationForm: FC<ServiceLocationForm> = ({ form }) => {
  const { control, path } = form;

  return (
    <div className="w-full">
      <FormField
        control={control}
        name={path("Address")}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Address</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Address" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={path("City")}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input {...field} placeholder="City" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={path("State")}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>State</FormLabel>
            <FormControl>
              <Input {...field} placeholder="State" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="flex flex-row gap-2">
        <FormField
          control={control}
          name={path("PostalCode")}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Zip Code</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Zip Code" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={path("ServiceArea")}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Area</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Area" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
