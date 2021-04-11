import { FC } from "react";
import { pallete } from "../../theme";
import Portal from "@reach/portal";
import Particles from "./Particles";

const Header: FC = () => {
  console.log();
  return (
    <div
      sx={{ position: "relative", paddingTop: "150px", paddingBottom: "150px" }}
    >
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
            }}
          />
        </div>
      </Portal>
      <div
        sx={{
          fontSize: 100,
          lineHeight: 0.9,
          // `3px 0px 0px #E26D3C, 0px -3px 0 #C7AD48, 0px 3px 0px #5498D5`,
          fontFamily: "Special3",
          textTransform: "uppercase",
          //fontVariationSettings: '"wght" 900, "wdth" 104',
        }}
      >
        Kyle
        <br />
        McCarthy
      </div>
      <Particles />
    </div>
  );
};

export default Header;
