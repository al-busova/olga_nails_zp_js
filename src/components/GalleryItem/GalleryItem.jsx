import React from "react";
import { ImageItem, Overlay, Heart, WrapperDiscription, Share } from "./GalleryItem.styled";

export const GalleryItem= ({
  photo,
  description,
  technology,
  shape,
}) => {
  return (
    <>
      <ImageItem src={photo} alt={description} />
      <Overlay>
        <Heart />
        <WrapperDiscription>
          <p>
          Опис: {technology} {shape}
        </p>
        <Share />
        </WrapperDiscription>
      </Overlay>
    </>
  );
};
