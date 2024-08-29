export interface FormField {
    name: string;
    type: 'text' | 'email' | 'select' | 'checkbox';
    required?: boolean;
  }
  
  export interface FormConfig {
    title: string;
    description?: string;
    fields: FormField[];
  }

  export interface Form {
    id: number;
    title: string;
    createdDate: string;
  }