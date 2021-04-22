import { FC } from "react";
import Image from "next/image";

const NoPostsFigure: FC = () => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div sx={{ mb: 2 }}>
        <Image
          src="/assets/figures/spaceman.svg"
          alt="No posts found"
          width={400}
          height={381}
        />
      </div>
      <div sx={{ fontFamily: "heading", fontSize: 5, textAlign: "center" }}>
        Oops... It looks like I haven't written anything yet.
      </div>
    </div>
  );
};

export default NoPostsFigure;
