import { FC } from "react";

const VerticalSeparator: FC = () => (
  <div
    sx={{
      alignItems: "center",
      flexDirection: "column",
      flexBasis: "55px",
      flexShrink: 0,
      display: [null, "none", "flex"],
    }}
  >
    <div
      sx={{
        maxWidth: 1,
        backgroundColor: "muted",
        width: 1,
        flexGrow: 1,
      }}
    />
  </div>
);

export default VerticalSeparator;
