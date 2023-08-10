import { Box, Button, Container } from "@mui/material";
import centerPhoto from "../../static_images/master.png";
import { OverTitle, MainTitle, DescriptionHero, Address } from "./Hero.styled";
import IconButton from "@mui/material/IconButton";
import { LocationOn } from "@mui/icons-material";
// import { Container } from "../common/Container.styled";

export const Hero = () => {
  return (
    <Box component="section" sx={{ pt: 4, backgroundColor: "rgba(215,83,122,0.8)"  }}>
      <Container>
        <Box
          sx={{
            backgroundColor: "primary",
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ padding: 10 }}>
            <OverTitle>Майстер манікюру та педикюру</OverTitle>
            <MainTitle>Ольга Бусова</MainTitle>
            <DescriptionHero>
              Вітаю! Я скурпельозна запорізька майстриня. Зроблю для тебе файні
              та неймовірні нігтики. В мене все стерильно та охайно. Максимально
              в дружелюбній та приємній атмосфері зроблю красу твоїм руцям та
              ніжкам. Чекаю в Заводському районі за адресою:
            </DescriptionHero>
            <Box
              sx={{
                // display: { xs: "block", md: "flex" },
                // alignItems: "center",
                // justifyContent: 'space-between',
                textAlign: { xs: "center", md:'left'},
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md:'flex-start'},
                  mb: "12px",
                }}
              >
                <IconButton>
                  <LocationOn color="primary" />
                </IconButton>
                <Address>вул. Добровольчих батальонів, 54</Address>
              </Box>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 40, ml:{md:'14px'}, 
                }}
              >
                Записатися
              </Button>
            </Box>
          </div>
          <img src={centerPhoto} alt="Майстриня Ольга Бусова" width={360} />
        </Box>
      </Container>
    </Box>
  );
};
