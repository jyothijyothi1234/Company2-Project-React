import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Images() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        bgcolor: "#F5F5F5",
        display: "flex",
        justifyContent: "center",
        marginBottom: "50px",
      }}
    >
      <Grid item xs={5} sx={{ display: "flex", marginTop: "23px" }}>
        <Grid item xs={1}>
          <img
            src="https://images.pexels.com/photos/19736617/pexels-photo-19736617/free-photo-of-sunset.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="not found"
            style={{
              height: "200px",
              width: "50px",
              paddingRight: "10px",
              borderTopRightRadius: "20px",
            }}
          />

          <img
              src="https://thumbs.dreamstime.com/b/row-five-yellow-stars-glossy-plane-isolated-white-33363369.jpg"
              alt="not found"
              style={{
                height: "50px",
                paddingTop: "8px",
                width:"40px"
              }}
            />
        </Grid>

        <Grid item xs={11} sx={{ marginBottom: "50px" }}>
          <img
            src="https://kotart.in/cdn/shop/files/PaintingQS89_1_46.jpg?v=1716717802&width=713"
            alt="not found"
            style={{ height: "200px", borderRadius: "10px", width: "300px" }}
          />

          <Typography sx={{ marginTop: "10px" }}>
            Modern Wall Decor Framed Painting
          </Typography>
          <Grid item xs={5} sx={{ display: "flex" }}>
            <Typography sx={{ marginTop: "10px", paddingLeft: "60px",fontSize:"20px" }}>
              $199.99
            </Typography>

            <img
              src="https://thumbs.dreamstime.com/b/row-five-yellow-stars-glossy-plane-isolated-white-33363369.jpg"
              alt="not found"
              style={{
                height: "40px",
                paddingLeft: "60px",
                paddingTop: "8px",
              }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <img
            src="https://kotart.in/cdn/shop/files/PaintingQS86_3_24.jpg?v=1716717363&width=713"
            alt="not found"
            style={{ height: "200px", borderRadius: "12px", width: "320px" }}
          />


<Typography sx={{ marginTop: "10px" }}>
            Modern Wall Decor Framed Painting
          </Typography>
          <Grid item xs={5} sx={{ display: "flex" }}>
            <Typography sx={{ marginTop: "10px", paddingLeft: "60px",fontSize:"20px" }}>
              $199.99
            </Typography>

            <img
              src="https://thumbs.dreamstime.com/b/row-five-yellow-stars-glossy-plane-isolated-white-33363369.jpg"
              alt="not found"
              style={{
                height: "40px",
                paddingLeft: "60px",
                paddingTop: "8px",
              }}
            />
          </Grid>
        </Grid>

        <Grid item xs={2}>

          <img
            src="https://m.media-amazon.com/images/I/81H3QBQ60qL.jpg"
            alt="not found"
            style={{ height: "200px", borderRadius: "12px", width: "50px",marginLeft:"5px" }}
          />
         
<Typography sx={{ marginTop: "10px",fontSize:"15px" }}>
            Mode
          </Typography>
          <Grid item xs={5} sx={{ display: "flex" }}>
            <Typography sx={{ marginTop: "10px",marginLeft:"10px",fontSize:"20px"}}>
              $19
            </Typography>
            </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}
