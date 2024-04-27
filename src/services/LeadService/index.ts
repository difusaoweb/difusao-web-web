"use server";
import { axiosAPI } from "@/services/axios";

import type {
  StoreLeadPropsTypes,
  StoreLeadReturnTypes,
  StoreLeadAPIReturnSuccessTypes,
  StoreLeadAPIReturnFailureTypes,
} from "@/services/LeadService/types";

export async function store({
  name,
  email,
  phoneNumber,
}: StoreLeadPropsTypes): StoreLeadReturnTypes {
  try {
    const { data }: { data: StoreLeadAPIReturnSuccessTypes } =
      await axiosAPI.post("/leads", {
        name,
        email,
        phoneNumber,
      });

    return { success: data, failure: null };
  } catch (err: any) {
    if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
      console.error(new Date(), "src/services/LeadService/index.ts store");
      console.error(err);
    }

    const failure: StoreLeadAPIReturnFailureTypes = { code: "UNKNOWN" };
    if (err?.response?.data?.code !== undefined) {
      failure.code = err.response.data.code;
    }

    switch (failure.code) {
      case "E_VALIDATION_ERROR":
        failure.errors = err.response.data.errors;
        break;
      case "INVALID_PARAMETERS":
        break;
      default:
        console.error(new Date(), "src/services/LeadService/index.ts store");
        console.error(err);
        break;
    }

    return { success: null, failure };
  }
}
