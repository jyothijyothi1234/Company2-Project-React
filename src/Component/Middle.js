import React from "react";
import { Grid, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MiddleData() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{ bgcolor: "#F5F5F5", display: "flex", justifyContent: "center" }}
    >
      <Grid
        item
        xs={5}
        sx={{
          border: "1px solid black",
          height: "650px",
          borderRadius: "12px",
          bgcolor: "white",
          marginRight: "10px",
          width: "500px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "40px 10px 1px 20px" }}
        >
          <Grid item xs={1}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5gPYtQBJB3H6uDdmYDy_bbSrgcUzzG7q9g&s"
              alt="not found"
              style={{ height: "50px", width: "50px", borderRadius: "10px" }}
            />
          </Grid>

          <Grid item xs={2}>
            <Typography
              sx={{ paddingLeft: "10px", color: "#101010", fontSize: "20px" }}
            >
              Thomas J.
            </Typography>
            <Typography sx={{ color: "#8D8D8D", fontSize: "10px" }}>
              @thecustomcreater
            </Typography>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <MoreVertIcon />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            paddingTop: "30px",
            paddingRight: "80px",
          }}
        >
          <Grid item xs={12}>
            <Typography sx={{ paddingLeft: "10px", fontSize: "17px" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of
            </Typography>
          </Grid>

          <Grid item xs={7}>
            <Typography
              sx={{
                paddingLeft: "10px",
                fontSize: "17px",
                paddingRight: "13px",
              }}
            >
              a page when looking at its layout.
              <span style={{ color: "red" }}>Read More</span>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <img
            src="https://images.pexels.com/photos/2236382/pexels-photo-2236382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="not found"
            style={{ height: "350px", width: "730px", borderRadius: "12px" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <Grid item xs={1} sx={{ display: "flex", paddingLeft: "10px" }}>
            <FavoriteBorderIcon />

            <Typography sx={{ paddingLeft: "10px" }}>9.8k</Typography>
          </Grid>

          <Grid item xs={1} sx={{ display: "flex", paddingLeft: "20px" }}>
            <img
              src="https://i.fbcd.co/products/resized/resized-750-500/7a386f67cb46400bfe7944ad893502aabea25bc36450a34225bb11e7808d2090.jpg"
              alt="not found"
              style={{ height: "20px", color: "black" }}
            />
            <Typography sx={{ paddingLeft: "10px" }}>8.6k</Typography>
          </Grid>

          <Grid item xs={1} sx={{ display: "flex", paddingLeft: "40px" }}>
            <img
              src="          https://www.freepnglogos.com/uploads/share-png/arrow-invite-join-share-sharing-icon-15.png
"
              alt="not found"
              style={{ height: "22px" }}
            />
            <Typography sx={{ paddingLeft: "10px" }}>7.2k</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
