import { Box, Container, Button} from "@mui/material";
import collageFormHome from "../../static_images/collageFormHome.jpg";
import { FormSimple,FormImage, InputStyled, LabelStyled  } from "./FormHome.styled";

export const FormHome = () => {
  return (
      <Box
        component="section"
        sx={{ pt: 4, pb: 4, backgroundColor: "rgba(215,83,122,0.8)" }}
      >
        <Container>
          <Box sx={{ display: "flex", gap: 2, alignItems:'center' }}>
            <FormImage src={collageFormHome} alt="collage" />
            <div style={{width:'100%'}}>
              <FormSimple>
                <b>Є питання?</b>
                <p>Залишіть заявку та я зв'яжуся з Вами!</p>
                <LabelStyled  htmlFor="name">
                  Ваше ім'я:
                  <InputStyled type="text" id="name" name="name" placeholder="Ольга"/>
                </LabelStyled>
                <LabelStyled  htmlFor="tel">
                  Ваш телефон:
                  <InputStyled type="tel" id="tel" name="tel" placeholder="+380667722111"/>
                </LabelStyled>
                <Button variant="outlined"  sx={{ borderRadius: 40, color:'white', borderColor:'white'
              }}>
                Залишити заявку
              </Button>
              </FormSimple>
              {/*  Подзвони мені +380661292554 або напиши <button>Написати Олі</button> */}
            </div>
          </Box>
        </Container>
      </Box>
  );
};
