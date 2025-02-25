import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { twMerge } from "tailwind-merge";

const AppImage = ({ src, alt, width = "100%", height = "100%", className }) => {
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src}
      width={width}
      effect="blur"
      className={`${twMerge(
        "w-full h-full object-cover object-top",
        className,
      )}`}
    />
  );
};
export default AppImage;
