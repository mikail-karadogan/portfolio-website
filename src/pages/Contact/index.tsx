import { Box, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <Box sx={{ padding: "50px 0px" }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: "10px" }}>
        Contact
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <IconButton
          target="_blank"
          href="https://www.linkedin.com/in/mikail-karado%C4%9Fan-7985651b2/"
        >
          <LinkedInIcon sx={{ color: "#0072b1", fontSize: "50px" }} />
        </IconButton>
        <IconButton href="mailto:mikail.karadogann@gmail.com">
          <MailOutlineIcon sx={{ color: "#EA4335", fontSize: "50px" }} />
        </IconButton>
        <IconButton
          target="_blank"
          href="https://www.instagram.com/mikail_karadogann/"
        >
          <InstagramIcon
            sx={{
              borderRadius: "25%",
              color: "#FFFFFF",
              background:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              fontSize: "40px",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;
