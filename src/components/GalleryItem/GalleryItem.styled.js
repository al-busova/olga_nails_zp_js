import styled from '@emotion/styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from "@mui/icons-material/Share";

export const ImageItem = styled.img`
width: 260px;
height: 320px;
object-fit: cover;
`;

export const Overlay = styled.div`
opacity: 0;
position: absolute;
padding-bottom: 10px;
top:16px;
left: 16px;
width: 260px;
height: 320px;
display: flex;
align-items: flex-end;
background-color: rgba(0,0,0,0.3);
 transition: opacity 250ms linear;
  &:hover,
  &:focus {
    opacity: 1;
    cursor: pointer;
  }
`;

export const WrapperDiscription = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const Heart = styled(FavoriteBorderIcon)`
position: absolute;
top:10px;
right: 10px;
 &:hover,
  &:focus {
    color: #d7537a;
  }
`;
export const Share = styled(ShareIcon)`
 &:hover,
  &:focus {
    color: #d7537a;
  }
`;