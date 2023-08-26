import { Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "calc(100vh - 70px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <Box
        sx={{
          maxWidth: {
            md: "50%",
            sm: "60%",
            xs: "100%",
          },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            mb: "10px",
            textAlign: "center",
            fontSize: {
              xs: "25px",
              sm: "40px",
              md: "50px",
            },
          }}
        >
          Mikail Karadoğan
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mb: "40px",
            position: "relative",
            fontSize: {
              xs: "15px",
              sm: "25px",
              md: "30px",
            },
            textAlign: {
              md: "center",
              sm: "center",
            },
            "&::before": {
              borderTop: "3px dashed #3f50b5",
              content: {
                md: '""',
                sm: '""',
                sx: "",
              },
              width: {
                md: "50px",
                sm: "30px",
                xs: "30px",
              },
              height: "3px",
              position: "absolute",
              left: 0,
              top: "50%",
            },
            "&::after": {
              borderTop: "3px dashed #3f50b5",
              content: {
                md: '""',
                sm: '""',
                sx: "",
              },
              width: {
                md: "50px",
                sm: "30px",
                xs: "30px",
              },
              height: "3px",
              position: "absolute",
              right: 0,
              top: "50%",
            },
          }}
        >
          Frontend Developer
        </Typography>
        <Typography variant="body1">
          I started working as a Frontend Developer about 4 years ago. I like to
          improve myself and I work harder for it
        </Typography>

        <Toolbar sx={{ justifyContent: "center", mt: "30px" }}>
          <Button
            variant="contained"
            sx={{ mr: 2 }}
            onClick={() => navigate("/projects")}
          >
            Projects
          </Button>
          <Button variant="outlined" onClick={() => navigate("/contact")}>
            Contact
          </Button>
        </Toolbar>
      </Box>
    </Box>
  );
};

export default Home;
