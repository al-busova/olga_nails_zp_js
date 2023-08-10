import { Box, Container, Grid } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import reviews from "../../utils/reviews.json";
import { nanoid } from "nanoid";
import { NameUser, TextReview } from './Reviews.styled';

export const Reviews = () => {
  return (
    <Box component="section" sx={{ pt: 4 }}>
      <Container>
        {reviews.length > 0 && (
          <Grid container spacing={6} sx={{ mr: "auto", ml: "auto" }}>
            {reviews.map((item) => (
              <Grid
                item
                key={nanoid()}
                md={4}
                // sx={{ outline: "1px solid pink" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap:'10px'
                  }}
                >
                  <FaceIcon />
                  <NameUser >{item.user}</NameUser>
                </Box>
                <TextReview>{item.review}</TextReview>
              </Grid>
            ))}
          </Grid>
        )}
        <ul></ul>
      </Container>
    </Box>
  );
};
