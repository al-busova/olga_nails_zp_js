import { Link } from "react-router-dom";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { Call } from "../Call/Call";
import { Container } from "@mui/material";
import { FooterStyled, WrapperContentFooter, LinkGoogleMap } from "./Footer.styled";

export const Footer= () => {
  return (
    <FooterStyled component="footer">
      <Container>
        <WrapperContentFooter>
          <ul>
            <li>
              <Link to="/services">Прайс</Link>{" "}
            </li>
            <li>
              <Link to="/useful">Корисні статті</Link>
            </li>
            <li>
              <Link to="/gallery">Галерея</Link>
            </li>
          </ul>
          <Call />
          <SocialLinks />
            <p> &#169; busova_olga_nails_zp </p>
        </WrapperContentFooter>
        <LinkGoogleMap href="https://goo.gl/maps/Ka4wHVFhxX2Y5RFz9" target="_blank" rel="noreferrer">Оля тут</LinkGoogleMap>
      </Container>
    </FooterStyled>
  );
};
