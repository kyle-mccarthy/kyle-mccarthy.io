import { FC } from "react";
import Portal from "@reach/portal";

const Background: FC = () => {
  return (
    <Portal>
      <div
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          filter: "blur(300px)",
          zIndex: -1,
          overflow: "hidden",
          maxWidth: "100%",
          mixBlendMode: "color",
          opacity: 0.85,

          "@-moz-document url-prefix()": {
            opacity: 0.25,
          },
        }}
      >
        <div
          sx={{
            width: "964px",
            height: "526px",
            top: "-117px",
            left: `calc(50% - 571px)`,
            position: "absolute",
            background: `radial-gradient(50% 50% at 50% 50%, #0038FF 0%, #1025E9 0.01%, #0B0B2F 100%)`,
            mixBlendMode: "color",
            ["@media (max-width: 900px)"]: {
              left: 0,
              mixBlendMode: "normal",
            },
          }}
        />
        <div
          sx={{
            position: "absolute",
            width: "482px",
            height: "408px",
            left: `calc(50% - ${482 / 2}px + 430px)`,
            top: "-25px",
            background:
              "radial-gradient(50% 50% at 50% 50%, #DD11B0 0%, #8D0077 100%)",
            mixBlendMode: "color",
            maxWidth: "100%",
            ["@media (max-width: 900px)"]: {
              right: 0,
              left: "auto",
              mixBlendMode: "normal",
            },
          }}
        />
      </div>
    </Portal>
  );
};

export default Background;
