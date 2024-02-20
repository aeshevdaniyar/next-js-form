"use client"
import { ClientDetailsForm } from "@/components/forms/client-details";
import { ClientDetailsSchema, ClientDetailsType } from "@/components/forms/client-details/schema";
import { JobTypeForm } from "@/components/forms/job-type";
import { JobType, JobTypeSchema } from "@/components/forms/job-type/schema";
import { Scheduled } from "@/components/forms/scheduled";
import { ScheduledSchema, ScheduledType } from "@/components/forms/scheduled/schema";
import { ServiceLocationForm } from "@/components/forms/service-location";
import { LocationFormType, LocationSchema } from "@/components/forms/service-location/schema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormContainer } from "@/components/ui/form-container";
import { nestedForm } from "@/lib/nested-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { object } from "yup";

type NewJobForm = {
    clientDetails: ClientDetailsType;
    jobType: JobType;
    scheduled: ScheduledType;
    serviceLocation: LocationFormType;
};

export const CreateJobForm = () => {
    const form = useForm<NewJobForm>({
        resolver: yupResolver(
            object({
                clientDetails: ClientDetailsSchema,
                jobType: JobTypeSchema,
                scheduled: ScheduledSchema,
                serviceLocation: LocationSchema,
            })
        ),
    });

    const { handleSubmit } = form;

    const onSubmit = (data: NewJobForm) => {
        console.log(data);
    };
    
    return <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        
        <Form {...form}>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                <FormContainer title="Client details">
                    <ClientDetailsForm form={nestedForm(form, "clientDetails")} />
                </FormContainer>
                <FormContainer title="Job details">
                    <JobTypeForm form={nestedForm(form, "jobType")} />
                </FormContainer>
                <FormContainer title="Service location">
                    <ServiceLocationForm form={nestedForm(form, "serviceLocation")} />
                </FormContainer>
                <FormContainer title="Scheduled">
                    <Scheduled form={nestedForm(form, "scheduled")} />
                </FormContainer>
            </div>
        </Form>
        <div className="flex flex-row gap-2 w-full justify-center mt-5">
            <Button type="submit">Create Job</Button>
            <Button variant="secondary">Save info</Button>
        </div>
    </form>
}