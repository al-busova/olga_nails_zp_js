import { GalleryItem } from "../GalleryItem/GalleryItem";
import { arrPhoto } from "../../utils/photos";
import { Box, Container, Grid } from "@mui/material";
// import InfoIcon from '@mui/icons-material/Info';
// import {  ImageList, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";

export const GalleryList = () => {
  const photos = arrPhoto();
  return (
    <Box component="section" sx={{ pt: 4, pb: 4 }}>
      <Container>
        {photos.length > 0 && (
          <Grid container spacing={2} sx={{justifyContent:'center' }}>
            {photos.map((item) => (
              <Grid item key={item.id} sx={{position:'relative' }}>
                <GalleryItem
                  photo={item.photo}
                  description={item.description}
                  technology={item.technology}
                  shape ={item.shape}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

  // {photos.length > 0 && (
  //         <Grid container spacing={2} sx={{ mr: "auto", ml: "auto" }}>
  //           {photos.map((item) => (
  //             <Grid item key={item.id}>
  //               <GalleryItem
  //                 photo={item.photo}
  //                 description={item.description}
  //               />
  //             </Grid>
  //           ))}
  //         </Grid>
  //       )}
/* {photos.length > 0 && (
          <ImageList >
            {photos.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.photo}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.description}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.description}
                  subtitle={item.technika}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.description}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        )} */