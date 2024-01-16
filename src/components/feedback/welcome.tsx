import Image from "../../assets/images/welcome.webp";
import { Paragraph } from "../";
import "./feedback_image.css";

type TEmptyProps = {
  size?: "small" | "medium" | "large";
  customSize?: number;
  description?: string;
  className?: string;
};
export const Welcome = ({
  size = "medium",
  className = "",
  description,
  customSize,
}: TEmptyProps) => {
  const hasCustomSize = customSize
    ? { height: `${customSize * 0.1}rem`, width: `${customSize * 0.1}rem` }
    : {};
  return (
    <div className={`${className} `}>
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
        {description || "Sorry, we did any resources!"}
      </Paragraph>
    </div>
  );
};
