interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button
      className="text-gray-100 px-4 py-2 rounded-sm hover:scale-110 transition ease-in-out"
      style={{ backgroundColor: "#8c704f" }}
    >
      {text}
    </button>
  );
};
