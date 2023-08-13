interface ButtonProps {
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  type?: "submit" | "button" | "reset" | undefined;
  text: string;
}

export default function Button({ handleClick, type, text }: ButtonProps) {
  return (
    <button
      className="self-center px-4 py-2 font-medium transition-all rounded bg-secondary-400 hover:scale-105 hover:bg-secondary-500 active:scale-100 noSelect"
      onClick={handleClick}
      type={type}
    >
      {text}
    </button>
  );
}
