import Image from "../../assets/images/empty.webp";
import { Paragraph } from "../";
import "./feedback_image.css";

type TEmptyProps = {
  size?: "small" | "medium" | "large";
  description?: string;
  customSize?: number;
  className?: string;
};
export const EmptyImage = ({
  size = "medium",
  className = "",
  customSize,
  description,
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
        {description || `Mmm... seems like there is no content here yet.`}
      </Paragraph>
    </div>
  );
};
