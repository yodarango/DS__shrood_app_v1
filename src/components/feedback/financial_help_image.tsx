import Image from "../../assets/images/financial_help.webp";
import { Paragraph } from "../";
import "./feedback_image.css";

type TEmptyProps = {
  size?: "small" | "medium" | "large";
  description?: string;
  customSize?: number;
  className?: string;
};

export const FinancialHelpImage = ({
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
        {description ||
          `Shrood is an autonomous application developed and managed by a single person. 
            Which is not cheap nor easy. If you have enjoyed this app, consider helping financially and in exchange get access to premium features. `}
      </Paragraph>
    </div>
  );
};
