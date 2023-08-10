import styled from "@emotion/styled";
import { Box } from "@mui/material";
import mapLocation from "../../static_images/map4.png";

export const FooterStyled = styled(Box)`
> div {
    height: 500px;
    position: relative;
    background-image:linear-gradient( rgba(215, 83, 122, 0.4), rgba(215, 83, 122, 0.4)
), url("${mapLocation}");
  background-repeat:  no-repeat;
  background-position: center center;
  background-size: cover ; 
}
 
`;
export const WrapperContentFooter = styled.div`
padding: 20px;
border-radius: 20px;
background-color: #d7537a;
width: 300px;
height: 80%;
position: absolute;
top:50px;
left: 20px;
`;

export const LinkGoogleMap = styled.a`
font-size: 20px;
color: red;
padding: 100px;
position: absolute;
top:260px;
right: 210px;
`;

