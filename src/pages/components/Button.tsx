interface ButtonProps {
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  buttonType?: "submit" | "button" | "reset" | undefined;
  text: string;
}

export default function Button({ handleClick, buttonType, text }: ButtonProps) {
  return (
    <button
      className="self-center px-4 py-2 font-medium transition-all rounded bg-secondary-400 hover:scale-105 hover:bg-secondary-500 active:scale-100"
      onClick={handleClick}
      type={buttonType}
    >
      {text}
    </button>
  );
}
