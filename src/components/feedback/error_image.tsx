import Image from "../../assets/images/error.webp";
import "./feedback_image.css";
import { Paragraph } from "..";

type TEmptyProps = {
  size?: "small" | "medium" | "large";
  description?: string;
  className?: string;
};
export const ErrorImage = ({
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
        {description || "Sorry something went wrong, I'm working on it."}
      </Paragraph>
    </div>
  );
};
