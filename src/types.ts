export interface FormField {
    type: string;
    label: string;
    name: string;
    required: boolean;
    placeholder?: string;
    options?: string[];
    minLength?: number;
    maxLength?: number;
  }
  
  export interface FormSchema {
    fields: FormField[];
  }