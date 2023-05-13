import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { SdBar } from "./";
 
import {Videos} from "./"
import { fetchFromAPI } from "../utils/fetchFromApi";

export default function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('New');

  const [videos, setVideos]= useState([]);
  
  useEffect(() => {
  //  setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) =>
      {
        console.log(data.items)
      setVideos(data.items)
      console.log(videos)
      }
      )
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },

          borderRight: "1px solid #3d3d3d ",
          px: { sx: 0, md: 2 },
        }}
      >
        <SdBar 
         selectedCategory={selectedCategory}
         setSelectedCategory={setSelectedCategory}/>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          {" "}
          Copyright 2023 JP
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "White",
          }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

      <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  );
}
