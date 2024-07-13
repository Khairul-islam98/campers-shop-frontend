import React, { useEffect } from 'react';
import './ImageMagnifier.css'; 

interface ImageMagnifierProps {
  imageUrl: string;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({ imageUrl }) => {
  useEffect(() => {
    const magnify = (imgID: string, zoom: number) => {
      let img: HTMLImageElement | null = document.getElementById(imgID) as HTMLImageElement;
      let glass: HTMLElement | null = document.createElement("DIV");
      if (img && glass) {
        let w, h, bw;
        glass.setAttribute("class", "img-magnifier-glass");
        img.parentElement?.insertBefore(glass, img);

        glass.style.backgroundImage = `url('${img.src}')`;
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;
        glass.style.display = "none";

        const moveMagnifier = (e: MouseEvent | TouchEvent) => {
          e.preventDefault();
          let pos = getCursorPos(e);
          let x = pos.x;
          let y = pos.y;

          if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
          if (x < w / zoom) { x = w / zoom; }
          if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
          if (y < h / zoom) { y = h / zoom; }

          glass.style.left = `${x - w}px`;
          glass.style.top = `${y - h}px`;
          glass.style.backgroundPosition = `-${(x * zoom) - w + bw}px -${(y * zoom) - h + bw}px`;
        };

        const getCursorPos = (e: MouseEvent | TouchEvent) => {
          let a = img.getBoundingClientRect();
          let x = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
          let y = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY;
          x -= a.left;
          y -= a.top;
          x -= window.pageXOffset;
          y -= window.pageYOffset;
          return { x, y };
        };

        const showMagnifier = () => {
          glass.style.display = "block";
        };

        const hideMagnifier = () => {
          glass.style.display = "none";
        };

        img.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("touchmove", moveMagnifier);
        img.addEventListener("mouseenter", showMagnifier);
        img.addEventListener("mouseleave", hideMagnifier);

        glass.addEventListener("mousemove", moveMagnifier);
        glass.addEventListener("touchmove", moveMagnifier);
      }
    };

    magnify("productImage", 3);

    return () => {
     
    };
  }, [imageUrl]);

  return (
    <div className="relative">
      <img
        id="productImage"
        src={imageUrl}
        alt="Product"
        className="w-full object-cover rounded-lg"
        style={{ maxHeight: "400px" }}
      />
    </div>
  );
};

export default ImageMagnifier;
