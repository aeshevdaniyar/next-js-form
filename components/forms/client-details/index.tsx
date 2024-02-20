"use client"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { NestedForm } from "@/lib/nested-form";
  import { FC } from "react";
  import { ClientDetailsType } from "./schema";
  
  type ClientDetailsFormProps = {
    form: NestedForm<ClientDetailsType>;
  };
  
  export const ClientDetailsForm: FC<ClientDetailsFormProps> = ({ form }) => {
    const { path, control } = form;
  
    return (
      <div className="w-full">
        <div className="flex flex-row gap-2">
          <FormField
            control={control}
            name={path("FirstName")}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={control}
            name={path("LastName")}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
  
        <FormField
          control={control}
          name={path("Phone")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="Phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  
        <FormField
          control={control}
          name={path("Email")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };
  