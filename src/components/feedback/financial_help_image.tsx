import Image from "../../assets/images/financial_help.webp";
import { Paragraph } from "../../components";
import "./feedback_image.css";

type TEmptyProps = {
  size?: "small" | "medium" | "large";
  description?: string;
  className?: string;
};

export const FinancialHelpImage = ({
  size = "medium",
  description,
  className,
}: TEmptyProps) => {
  return (
    <div className={`${className}`}>
      <div
        className={`${size} mb-2  d-flex align-items-center justify-content-center`}
      >
        <img src={Image} alt='a rooky with an empty box' />
      </div>
      <Paragraph className='text-center'>
        {description ||
          `Shrood is an autonomous application developed and managed by a single person. 
            Which is not cheap nor easy. If you have enjoyed this app, consider helping financially and in exchange get access to premium features. `}
      </Paragraph>
    </div>
  );
};
