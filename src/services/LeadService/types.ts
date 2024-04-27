export interface StoreLeadPropsTypes {
  name: string;
  email: string;
  phoneNumber: string;
}
export interface StoreLeadAPIReturnSuccessTypes {
  id: number;
}
export interface StoreLeadAPIReturnFailureTypes {
  code: string;
  errors?: {
    rule: string;
    field: string;
    message: string;
    args: {};
  };
}
export type StoreLeadReturnTypes = Promise<
  | {
      success: StoreLeadAPIReturnSuccessTypes;
      failure: null;
    }
  | {
      success: null;
      failure: StoreLeadAPIReturnFailureTypes;
    }
>;
