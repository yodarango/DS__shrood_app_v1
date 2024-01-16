import Image from "../../assets/images/error.webp";
import "./feedback_image.css";
import { Paragraph } from "..";

type TEmptyProps = {
  size?: "small" | "medium" | "large";
  customSize?: number;
  description?: string;
  className?: string;
};
export const ErrorImage = ({
  size = "medium",
  description,
  customSize,
  className,
}: TEmptyProps) => {
  const hasCustomSize = customSize
    ? { height: `${customSize * 0.1}rem`, width: `${customSize * 0.1}rem` }
    : {};
  return (
    <div className={`${className}`}>
      <div
        className={`${size} mb-2  d-flex align-items-center justify-content-center`}
      >
        <img
          src={Image}
          alt='a rooky with an empty box'
          style={{ ...hasCustomSize }}
        />
      </div>
      <Paragraph className='text-center'>
        {description || "Sorry something went wrong, I'm working on it."}
      </Paragraph>
    </div>
  );
};
