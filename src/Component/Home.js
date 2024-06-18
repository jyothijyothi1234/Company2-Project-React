import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Grid, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import WalletIcon from "@mui/icons-material/Wallet";
import StarsIcon from "@mui/icons-material/Stars";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function Home() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{ bgcolor: "#F5F5F5", display: "flex", justifyContent: "center" }}
    >
      <Grid
        item
        xs={2}
        sx={{
          border: "1px solid black",
          height: "700px",
          borderRadius: "12px",
          bgcolor: "white",
          marginRight: "10px",
          marginTop: "20px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "40px 10px 1px 20px" }}
        >
          <HomeIcon />

          <Typography sx={{ paddingLeft: "10px", color: "#101010" }}>
            Home
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <NotificationsIcon sx={{ color: "#8D8D8D" }} />

          <Typography sx={{ paddingLeft: "10px", color: "#8D8D8D" }}>
            Notifications
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <FavoriteBorderIcon sx={{ color: "#8D8D8D" }} />

          <Typography sx={{ paddingLeft: "10px", color: "#8D8D8D" }}>
            Shop
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <DomainVerificationIcon sx={{ color: "#8D8D8D" }} />

          <Typography sx={{ paddingLeft: "10px", color: "#8D8D8D" }}>
            Conversation
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <WalletIcon sx={{ color: "#8D8D8D" }} />

          <Typography sx={{ paddingLeft: "10px", color: "#8D8D8D" }}>
            Wallet
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <StarsIcon sx={{ color: "#8D8D8D" }} />

          <Typography sx={{ paddingLeft: "10px", color: "#8D8D8D" }}>
            Subscription
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <PersonOutlineIcon sx={{ color: "#8D8D8D" }} />

          <Typography sx={{ paddingLeft: "10px", color: "#8D8D8D" }}>
            My Profile
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <SettingsIcon sx={{ color: "#8D8D8D" }} />

          <Typography sx={{ paddingLeft: "10px", color: "#8D8D8D" }}>
            Settings
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "170px 10px 1px 20px" }}
        >
          <LogoutIcon sx={{ color: "green" }} />

          <Typography sx={{ paddingLeft: "10px", color: "green" }}>
            Log out
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={5}
        sx={{
          border: "1px solid black",
          height: "650px",
          borderRadius: "12px",
          bgcolor: "white",
          marginRight: "10px",
          marginTop: "20px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "40px 10px 1px 20px" }}
        >
          <Grid item xs={1}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVzLs3LF_kPfMta7q5ODY5f7xvbB8-Th8hw&s"
              alt="not found"
              style={{ height: "50px", width: "50px", borderRadius: "10px" }}
            />
          </Grid>

          <Grid item xs={2}>
            <Typography sx={{ paddingLeft: "10px", color: "#101010" }}>
              Lara Leones
            </Typography>
            <Typography sx={{ color: "#8D8D8D" }}>@thewallart</Typography>
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
            src="https://images.pexels.com/photos/2045248/pexels-photo-2045248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

        {/* <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <WalletIcon />

          <Typography sx={{ paddingLeft: "10px" }}>Wallet</Typography>
        </Grid> */}

        {/* <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <StarsIcon />

          <Typography sx={{ paddingLeft: "10px" }}>Subscription</Typography>
        </Grid> */}

        {/* <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <PersonOutlineIcon />

          <Typography sx={{ paddingLeft: "10px" }}>My Profile</Typography>
        </Grid> */}

        {/* <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "30px 10px 1px 20px" }}
        >
          <SettingsIcon />

          <Typography sx={{ paddingLeft: "10px" }}>Settings</Typography>
        </Grid> */}
      </Grid>

      <Grid
        item
        xs={2}
        sx={{
          border: "1px solid black",
          height: "700px",
          borderRadius: "12px",
          bgcolor: "white",
          marginTop: "20px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            padding: "10px 10px 1px 25px",
            marginBottom: "8px",
          }}
        >
          <Typography>Artists</Typography>

          <Typography sx={{ paddingLeft: "15px", color: "#8D8D8D" }}>
            Photographers
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid item xs={12} sx={{ display: "flex", position: "absolute" }}>
            <Grid item xs={3}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxwPLhCQv8XGFTr_MqfexWxI840A0G67Elg&s"
                alt="not found"
                style={{
                  height: "50px",
                  width: "50px",
                  paddingLeft: "30px",
                  paddingRight: "50px",
                  paddingTop: "55px",
                }}
              />
            </Grid>

            <Grid item xs={9} sx={{ paddingTop: "65px" }}>
              <Typography sx={{ fontSize: "15px", color: "white" }}>
                Thomas Edward
              </Typography>
              <Typography sx={{ fontSize: "10px", color: "white" }}>
                @thewildwithyou
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4IMjaP-rrekoAZCqCGjBsO3lNvfXAKiafQ&s"
              alt="not found"
              style={{
                width: "270px",
                borderRadius: "12px",
                height: "120px",
                marginBottom: "15px",
              }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid item xs={12} sx={{ display: "flex", position: "absolute" }}>
            <Grid item xs={3}>
              <img
                src="https://images.pexels.com/photos/3757946/pexels-photo-3757946.jpeg?cs=srgb&dl=pexels-olly-3757946.jpg&fm=jpg"
                alt="not found"
                style={{
                  height: "50px",
                  width: "50px",
                  paddingLeft: "30px",
                  paddingRight: "50px",
                  paddingTop: "55px",
                }}
              />
            </Grid>

            <Grid item xs={9} sx={{ paddingTop: "65px" }}>
              <Typography sx={{ fontSize: "15px", color: "white" }}>
                Chris Doe
              </Typography>
              <Typography sx={{ fontSize: "10px", color: "white" }}>
                @thewildwithyou
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <img
              src="https://blog.moffat.com.au/wp-content/uploads/2022/06/3-ways-to-improve-your-baking_Feature-Image-2b.jpg"
              alt="not found"
              style={{
                width: "270px",
                borderRadius: "12px",
                height: "120px",
                marginBottom: "15px",
              }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid item xs={12} sx={{ display: "flex", position: "absolute" }}>
            <Grid item xs={3}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZupxn6V7LSj4wM88y_hnCE6jXtNwGWYjLw&s"
                alt="not found"
                style={{
                  height: "50px",
                  width: "50px",
                  paddingLeft: "30px",
                  paddingRight: "50px",
                  paddingTop: "55px",
                }}
              />
            </Grid>

            <Grid item xs={9} sx={{ paddingTop: "65px" }}>
              <Typography sx={{ fontSize: "15px", color: "white" }}>
                Emilie Jones
              </Typography>
              <Typography sx={{ fontSize: "10px", color: "white" }}>
                @thewildwithyou
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <img
              src="https://images.pexels.com/photos/19789102/pexels-photo-19789102/free-photo-of-riga-latvia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="not found"
              style={{
                width: "270px",
                borderRadius: "12px",
                height: "120px",
                marginBottom: "15px",
              }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid item xs={12} sx={{ display: "flex", position: "absolute" }}>
            <Grid item xs={3}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC2AIE2E0g0aoeq4dC5dneMD8WktFoA7cC5Q&s"
                alt="not found"
                style={{
                  height: "50px",
                  width: "50px",
                  paddingLeft: "30px",
                  paddingRight: "50px",
                  paddingTop: "55px",
                }}
              />
            </Grid>

            <Grid item xs={9} sx={{ paddingTop: "65px" }}>
              <Typography sx={{ fontSize: "15px", color: "white" }}>
                Jessica Williams
              </Typography>
              <Typography sx={{ fontSize: "10px", color: "white" }}>
                @thewildwithyou
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <img
              src="https://img.freepik.com/free-vector/watercolor-oil-painting-background_23-2150133494.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user"
              alt="not found"
              style={{
                width: "270px",
                borderRadius: "12px",
                height: "120px",
                marginBottom: "15px",
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "12px 10px 1px 20px" }}
        >
          <img
            src="https://i.ytimg.com/vi/orxXlAltFQg/maxresdefault.jpg"
            alt="not found"
            style={{ width: "600px", borderRadius: "9px", height: "30px" }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", padding: "10px 10px 1px 20px" }}
        >
          <Typography sx={{ paddingLeft: "20px", fontSize: "10px" }}>
            Privacy
          </Typography>
          <Typography sx={{ paddingLeft: "15px", fontSize: "10px" }}>
            Terms of Service
          </Typography>
          <Typography sx={{ paddingLeft: "15px", fontSize: "10px" }}>
            Cookie Notice
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
