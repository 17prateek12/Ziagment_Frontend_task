import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FormSchema } from "../types";

const JsonEditor: React.FC<{ onChange: (json: FormSchema | null) => void }> = ({ onChange }) => {
  const [jsonValue, setJsonValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonValue(value);

    try {
      const parsed = JSON.parse(value);
      setError("");
      onChange(parsed);
    } catch (err) {
      setError("Invalid JSON");
      onChange(null);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <textarea
        value={jsonValue}
        onChange={handleChange}
        className="flex-grow p-4 text-sm font-mono border border-gray-300 rounded-lg resize-none"
        placeholder="Enter JSON Schema"
        rows={10}
      />
      <div className="mt-4">
        {error && <div className="text-red-500">{error}</div>}
        <SyntaxHighlighter language="json" style={prism}>
          {jsonValue}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default JsonEditor;