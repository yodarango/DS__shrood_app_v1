import styles from "./content_feedback.module.css";

type TContentFeedback = {
  className?: string;
  height?: number;
  width?: number | string;
  style?: React.CSSProperties;
  children: any;
};
export const ContentFeedback = ({
  className,
  children,
  height,
  width,
  style,
}: TContentFeedback) => {
  const headerChildren: JSX.Element[] = children.filter(
    (child: JSX.Element) =>
      child.type.name === "CardOptions" || child.type.name === "AvatarWithLabel"
  );

  const contentChild: JSX.Element = children.find(
    (child: JSX.Element) => child.type.name === "CardContent"
  );
  return (
    <div
      className={`${styles.drContentFeedback24ck} p-2 ${className}`}
      style={{ height, width, ...style }}
    >
      <div
        className={`${
          styles.drContentFeedback24ckHeader
        } pb-2 d-flex align-items-center ${
          headerChildren.length > 1
            ? "justify-content-between"
            : "justify-content-start"
        }`}
      >
        {children.find(
          (child: JSX.Element) => child.type.name === "AvatarWithLabel"
        )}
        <div className='d-flex align-items-center justify-content-end gap-2'>
          {children.find(
            (child: JSX.Element) => child.type.name === "CardContentMeta"
          )}
          {children.find(
            (child: JSX.Element) => child.type.name === "CardOptions"
          )}
        </div>
      </div>

      {contentChild && (
        <div className='my-2'>
          {children.find(
            (child: JSX.Element) => child.type.name === "CardContent"
          )}
        </div>
      )}
    </div>
  );
};
