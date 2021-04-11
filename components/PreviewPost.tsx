import React, { FC, ReactNode } from "react";
import { Paragraph, Text } from "theme-ui";
import ArrowRight from "./icons/ArrowRight";
import { colors } from "../theme";
import Link from "next/link";

// test

interface Props {
  title: string | ReactNode;
  summary: string | ReactNode;
}

const PreviewPost: FC<Props> = ({ title, summary }) => {
  return (
    <article
      sx={{
        marginBottom: 4,
        paddingBottom: 4,
        borderBottomColor: "muted",
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
      }}
    >
      <h3
        sx={{
          fontSize: 6,
          display: "block",
          marginBottom: 3,
          marginTop: 0,
          fontFamily: "heading",
          lineHeight: 1,
          maxWidth: "600px",
          color: "primary",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>

      <div sx={{ variant: "text.muted", fontSize: 0, marginBottom: 3 }}>
        03.29.21 :: programming, rust
      </div>

      <div sx={{ marginBottom: 3, fontSize: 2 }}>{summary}</div>

      <div sx={{ fontSize: 1 }}>
        <Link href="/" passHref>
          <a sx={{ color: "accent", textDecoration: "none" }}>
            Read More
            <ArrowRight
              sx={{
                fontSize: "12px",
                width: ".75em",
                height: ".75em",
                marginLeft: 2,
              }}
            />
          </a>
        </Link>
      </div>
    </article>
  );
};

export default PreviewPost;
