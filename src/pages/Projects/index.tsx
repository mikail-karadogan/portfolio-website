import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([{}, {}, {}, {}]);
  return (
    <Box sx={{ padding: "50px 0px" }}>
      {projects.length > 0 ? (
        <>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", letterSpacing: "15px" }}
          >
            Projects
          </Typography>
          <Container sx={{ marginTop: "30px" }}>
            <Grid container spacing={4}>
              {projects?.map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Card sx={{ width: "100%" }} key={index}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://www.proofhub.com/articles/wp-content/uploads/2017/09/project-management.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-evenly" }}>
                      <Button size="small">Source Code</Button>
                      <Button size="small">Visit Page</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      ) : (
        <Typography variant="h3" style={{ textAlign: "center" }}>
          Soon
        </Typography>
      )}
    </Box>
  );
};

export default Projects;
