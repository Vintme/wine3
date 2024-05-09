import * as React from "react";

function Home() {
  return (
    <>
      <style jsx>{`
        .img {
          aspect-ratio: 2.38;
          object-fit: cover;
          width: 100%;
        }
      `}</style>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20e3aa5412d43c102ac2d24db2ba7c0587238dad7cb9bb882a1fa0df16fa926c?apiKey=3d6c53ba5d484a2cb38c48b0b1fe4ccc&"
        alt="Descriptive alternative text of the image"
        className="img"
        loading="lazy"
      />
    </>
  );
}

export default MyComponent;
