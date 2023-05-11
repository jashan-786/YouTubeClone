import React from "react";

import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const selectedCategory = "New";

export default function SdBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        padding: "2px",
      }}
    >
      {categories.map((item) => (
        <button
          style={{
            background: item.name === selectedCategory && "#FC1503",
            color: "White",
          }}
          className="category-btn"
          variant="fab"
          key={item.name}
          onClick={ ()=> setSelectedCategory(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {" "}
            {item.icon}
          </span>
          <span style={{ opacity: item.name === selectedCategory ? "1" : "0.8" }}>
            {" "}
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}
