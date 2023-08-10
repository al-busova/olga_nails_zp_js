import { Box, Container} from "@mui/material";
import { SectionTitle } from "../common/common.styled";

export const HomeSliderUseful = () => {
  return (
    <Box component="section" sx={{ pt: 4 }}>
      <Container>
        <SectionTitle>
          Слайдер з картками-посиланнями на корисне
        </SectionTitle>
      </Container>
    </Box>
  );
};
