"use client";

import { useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  options,
  placeholder,
  help,
  autoComplete,
  inputMode,
  enterKeyHint,
  autoCapitalize,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options?: { value: string; label: string }[];
  placeholder?: string;
  help?: string;
  autoComplete?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  enterKeyHint?: InputHTMLAttributes<HTMLInputElement>["enterKeyHint"];
  autoCapitalize?: string;
  error?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const id = name;
  const classes =
    "mt-1.5 w-full rounded-2xl border border-[#e2eaf4] bg-white px-3.5 py-3 text-base text-[#10213A] outline-none transition focus:border-[#1769FF] min-h-12";
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[#10213A]">
        {label}
        {required ? <span className="text-[#b42318]"> *</span> : null}
      </label>
      {type === "select" && options ? (
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(classes, "cursor-pointer")}
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={classes}
        />
      ) : (
        <div className="relative">
          <input
            id={id}
            name={name}
            type={inputType}
            required={required}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
            inputMode={inputMode}
            enterKeyHint={enterKeyHint}
            autoCapitalize={autoCapitalize}
            onChange={(e) => onChange(e.target.value)}
            className={cn(classes, type === "password" && "pr-12")}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : help ? `${id}-help` : undefined}
          />
          {type === "password" ? (
            <button
              type="button"
              onClick={() => setShowPassword((open) => !open)}
              className="absolute right-1.5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-[#5b6b82] hover:text-[#071B36]"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
            </button>
          ) : null}
        </div>
      )}
      {help ? (
        <p id={`${id}-help`} className="mt-1 text-xs text-[#5b6b82]">
          {help}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-[#b42318]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
