interface InputBoxProps {
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputBox({
  type,
  name,
  value,
  onChange,
}: InputBoxProps) {
  return (
    <div className="flex flex-col gap-1">
      <h3>{name}</h3>
      <input
        type={type}
        className="p-2 rounded focus:outline-none bg-gray-50"
        placeholder={
          name !== "Confirm Password" ? `Enter ${name}` : "Re-enter Password"
        }
        onChange={onChange}
        required
      />
    </div>
  );
}
