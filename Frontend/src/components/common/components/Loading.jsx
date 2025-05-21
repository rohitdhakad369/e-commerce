import { CircularProgress } from "@mui/material";
function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <CircularProgress color="secondary" size={64} />
    </div>
  );
}
export default Loading;
