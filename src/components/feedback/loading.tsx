import { IfElse } from "../utilities";
import { Icon, Paragraph } from "..";
import "./loading.css";

type TSmallLoader = {
  secondary?: boolean;
  colors?: string[];
  duration?: number;
  primary?: boolean;
  inline?: boolean;
  danger?: boolean;
};

const SmallLoader = ({
  duration = 0.6,
  secondary,
  primary,
  danger,
  inline,
  colors,
}: TSmallLoader) => {
  let getColors: string[] = [];

  if (colors) {
    getColors = colors;
  } else if (primary) {
    getColors = ["#f1eaff", "#ff89a9", "#f1eaff"];
  } else if (secondary) {
    getColors = ["#7350ec", "#b293fe", "#7350ec"];
  } else if (danger) {
    getColors = ["#ff4d62", "#ff89a9", "#ff4d62"];
  } else {
    getColors = ["#f1eaff", "#ff89a9", "#f1eaff"];
  }

  return (
    <div className={`mainWrapper ${inline ? "inline" : ""}`}>
      <div className={"loader"}>
        <svg
          version='1.1'
          id='Layer_1'
          x='0px'
          y='0px'
          width='24px'
          height='30px'
          viewBox='0 0 24 30'
          className={"svg"}
        >
          <rect x='0' y='0' width='4' height='10' fill={getColors[0]}>
            <animateTransform
              attributeType='xml'
              attributeName='transform'
              type='translate'
              values='0 0; 0 20; 0 0'
              begin='0'
              dur={`${duration}s`}
              repeatCount='indefinite'
            />
          </rect>
          <rect x='10' y='0' width='4' height='10' fill={getColors[1]}>
            <animateTransform
              attributeType='xml'
              attributeName='transform'
              type='translate'
              values='0 0; 0 20; 0 0'
              begin='0.2s'
              dur={`${duration}s`}
              repeatCount='indefinite'
            />
          </rect>
          <rect x='20' y='0' width='4' height='10' fill={getColors[2]}>
            <animateTransform
              attributeType='xml'
              attributeName='transform'
              type='translate'
              values='0 0; 0 20; 0 0'
              begin='0.4s'
              dur={`${duration}s`}
              repeatCount='indefinite'
            />
          </rect>
        </svg>
      </div>
    </div>
  );
};

type TRoundLoader = {
  children?: React.ReactNode | string | JSX.Element;
  size: number;
};

const RoundLoader = ({ size, children }: TRoundLoader) => {
  return (
    <div>
      <div
        style={{ height: `${size * 0.1}rem`, width: `${size * 0.1}rem` }}
        className='loader--round__container'
      >
        <div className={"loader--round"}></div>
      </div>
      <IfElse condition={typeof children === "string"}>
        <Paragraph className='mt-2 text-center loader--label'>
          {children}
        </Paragraph>
        <div className='mt-2'>{children}</div>
      </IfElse>
    </div>
  );
};

type TSparklesLoader = {
  children?: React.ReactNode | string | JSX.Element;
  size: number;
};

const SparklesLoader = ({ size, children }: TSparklesLoader) => {
  return (
    <div className='loading-23nxo--sparkles d-flex align-items-center justify-content-center w-100'>
      <div className='d-flex align-items-center justify-content-start flex-column'>
        <Icon name='sparkles' size={size} />
        <IfElse condition={typeof children === "string"}>
          <Paragraph className='mt-2 text-center loader--label'>
            {children}
          </Paragraph>
          <div className='mt-2'>{children}</div>
        </IfElse>
      </div>
    </div>
  );
};

export type TLoading = {
  children?: React.ReactNode | string | JSX.Element;
  type?: "small" | "round" | "sparkles";
  className?: string;
  size?: number;
} & TSmallLoader &
  Omit<TRoundLoader, "size">;

export const Loading = ({
  duration = 0.6,
  size = 60,
  className,
  children,
  secondary,
  primary,
  danger,
  inline,
  colors,
  type = "small",
}: TLoading) => {
  if (type === "round")
    return (
      <div className={className}>
        <RoundLoader size={size}>{children || ""}</RoundLoader>
      </div>
    );

  if (type === "sparkles")
    return (
      <div className={`${className} `}>
        <SparklesLoader children={children} size={size} />
      </div>
    );
  return (
    <div className={className}>
      <SmallLoader
        duration={duration}
        secondary={secondary}
        primary={primary}
        danger={danger}
        inline={inline}
        colors={colors}
      />
    </div>
  );
};
