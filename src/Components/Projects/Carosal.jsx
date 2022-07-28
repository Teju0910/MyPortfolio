import { Carousel } from "react-carousel-minimal";

export function Carosal({ image, image1, image2 }) {
  return (
    <div>
      <Carousel
        data={[
          {
            image: `${image}`,
          },
          {
            image: `${image1}`,
          },
          {
            image: `${image2}`,
          },
        ]}
        time={3000}
        width={{ base: "800px", md: "500px" }}
        height="360px"
        // captionStyle={captionStyle}
        radius="10px"
        // slideNumber={true}
        captionPosition="bottom"
        automatic={true}
        // dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        // thumbnails={true}
        // thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "10px auto",
        }}
      />
    </div>
  );
}
