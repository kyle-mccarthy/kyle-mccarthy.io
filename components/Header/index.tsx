import { FC } from "react";
import Particles from "./Particles";

const Header: FC = () => {
  return (
    <div
      sx={{
        position: "relative",
        paddingTop: ["50px", "100px", "150px"],
        paddingBottom: ["50px", "100px", "150px"],
        transition: "all 0.5s ease",
      }}
    >
      <div
        sx={{
          fontSize: [75, 85, 100],
          lineHeight: 0.9,
          fontFamily: "heading",
          textTransform: "uppercase",
          transition: "all 0.5s ease",
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
