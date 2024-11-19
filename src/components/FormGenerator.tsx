import React, { useState } from "react";
import { FormSchema, FormField } from "../types";

const FormGenerator: React.FC<{ schema: FormSchema | null }> = ({ schema }) => {
  const [formData, setFormData] = useState<any>({});

  if (!schema) {
    return <div className="text-gray-500">Invalid schema</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {schema.fields.map((field: FormField) => (
        <div key={field.name} className="flex flex-col w-[500px] justify-center">
          <label htmlFor={field.name} className="text-sm font-semibold">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          <input
            type={field.type === "number" ? "number" : "text"}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            required={field.required}
            minLength={field.minLength}
            maxLength={field.maxLength}
            className="border border-gray-300 p-2 rounded-lg"
            onChange={(e) => handleInputChange(e, field.name)}
          />
        </div>
      ))}
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;