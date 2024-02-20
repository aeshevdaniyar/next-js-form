"use client"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { NestedForm } from "@/lib/nested-form";
  import { FC } from "react";
  import { JobType as JobFormType } from "./schema";
  import { Textarea } from "@/components/ui/textarea";
  
  type JobTypeProps = {
    form: NestedForm<JobFormType>;
  };
  export const JobTypeForm: FC<JobTypeProps> = (props) => {
    const {
      form: { control, path },
    } = props;
  
    return (
      <div className="w-full">
        <div className="flex flex-row gap-2">
          <FormField
            control={control}
            name={path("JobType")}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Job Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Job types</SelectLabel>
                        <SelectItem value="Lock Repair">Lock Repair</SelectItem>
                        <SelectItem value="Recall job">Recall job</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={control}
            name={path("JobSource")}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Job Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select job source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Job sources</SelectLabel>
                        <SelectItem value="Google">Google</SelectItem>
                        <SelectItem value="Starlink">Starlink</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
  
        <FormField
          control={control}
          name={path("JobSource")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Job description (optional)"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };
  