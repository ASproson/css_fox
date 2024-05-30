interface TitleTextProps {
  text: string;
}

export const TitleText = ({ text }: TitleTextProps) => {
  return (
    <h1 className="font-serif" style={{ color: "#916f4a" }}>
      {text}
    </h1>
  );
};
