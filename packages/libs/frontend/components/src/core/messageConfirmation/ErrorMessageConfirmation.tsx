type Props = {
  hasError: boolean;
  message?: string;
  color?: string;
};
export default function ErrorMessageConfirmation({ message = "", hasError, color = "red" }: Props) {
  return (
    <div
      style={{
        minHeight: "24px",
        height: "24px",
        fontSize: "14px",
        color,
        display: "flex",
        alignItems: "center",
      }}
    >
      {hasError && <p>{message}</p>}
    </div>
  );
}
