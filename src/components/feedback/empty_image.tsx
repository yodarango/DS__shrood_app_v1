import Image from "../../assets/images/empty.webp";
import { Paragraph } from "../../components";
import "./feedback_image.css";

type TEmptyProps = {
  size?: "small" | "medium" | "large";
  description?: string;
  className?: string;
};
export const EmptyImage = ({
  size = "medium",
  className = "",
  description,
}: TEmptyProps) => {
  return (
    <div className={`${className}`}>
      <div
        className={`${size} mb-2  d-flex align-items-center justify-content-center`}
      >
        <img src={Image} alt='a rooky with an empty box' />
      </div>
      <Paragraph className='text-center'>
        {description || `Mmm... seems like there is no content here yet.`}
      </Paragraph>
    </div>
  );
};
