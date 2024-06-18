import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

export default function CustomHeader() {
  return (
    <Box sx={{ bgcolor: "#F5F5F5", padding: "20px" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={2}>
          <Box
            sx={{
              border: "1px solid white",
              borderRadius: "12px",
              height: "70px",
              bgcolor: "white",
              display: "flex",
              paddingLeft: "40px",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "28px", textAlign: "start" }}
            >
              LOGO
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={5}>
          <Box
            sx={{
              border: "1px solid white",
              bgcolor: "white",
              height: "70px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SearchIcon sx={{ height: "19px", marginRight: "10px" }} />
              <Typography variant="h1" sx={{ fontSize: "13px" }}>
                search here...
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TuneIcon sx={{ height: "20px", marginRight: "10px" }} />
              <Typography variant="h1" sx={{ fontSize: "15px" }}>
                Filters
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={2}>
          <Box
            sx={{
              border: "1px solid black",
              height: "70px",
              borderRadius: "12px",
              bgcolor: "#88C2BB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <Typography variant="h1" sx={{ fontSize: "17px", color: "white" }}>
              Become a Seller
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
