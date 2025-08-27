interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password" | "number";
  value?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  require?: boolean;
  error?: string;
}

export default function Input({
  type = "text",
  value,
  label,
  placeholder,
  className,
  require,
  error,
  ...rest
}: InputProps) {
  const baseClasses =
    "mt-1 flex h-10 w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ";

  const errorClasses = error ? "border-red-500 focus-visible:ring-red-500" : "";

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
          {require && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        placeholder={placeholder}
        className={`${baseClasses} ${errorClasses} ${className || ""}`}
        type={type}
        value={value}
        name="name"
        {...rest}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
