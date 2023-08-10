import { Box, Container} from "@mui/material";
import { SectionTitle } from "../common/common.styled";

export const HomeGifs  = () => {
  return (
    <Box component="section" sx={{ pt: 4 }}>
      <Container>
        <SectionTitle>
          Улюблені гіфки до/після
        </SectionTitle>
         
      </Container>
    </Box>
  );
};