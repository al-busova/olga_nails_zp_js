import { Box, Container, Typography } from "@mui/material";

export const Promotions = () => {
  return (
    <Box component="section" sx={{ pt: 4, pb: 4 }}>
      <Container>
        <Typography variant="h4" component="h4">
          Акції
        </Typography>
        <p>Посилання на частину сторінки з деталями акцій</p>
        <ul>
          <li>promotion №1</li>
          <li>promotion №2</li>
          <li>promotion №3</li>
        </ul>
      </Container>
    </Box>
  );
};
