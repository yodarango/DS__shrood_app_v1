import { Icon, IconButton, IIConButton } from "..";
import { useState } from "react";
import { Paragraph } from "..";

import styles from "./radio.module.css";

type TRadioProps = {
  label: string | JSX.Element | React.ReactNode | number;
  onChange?: (value: string | number | boolean) => void;
  labelPlacement?: "start" | "end" | "top" | "bottom";
  value: string | number | boolean;
  props?: IIConButton;
  icon: string;
};

type TRadioGroupProps = {
  label: string | JSX.Element | React.ReactNode | number;
  children: JSX.Element[];
  className?: string;
};

export const RadioGroup = ({ children, label }: TRadioGroupProps) => {
  return (
    <div className={`${styles.radio56sm} `}>
      {label && (
        <div className='mb-2'>
          {typeof label === "string" && <Paragraph>{label}</Paragraph>}
          {typeof label !== "string" && label}
        </div>
      )}
      {children}
    </div>
  );
};

export const Radio = ({
  labelPlacement,
  onChange,
  label,
  icon,
  value,
  props,
}: TRadioProps) => {
  let labelPlacementClass = "";
  let labelClass = "";

  switch (labelPlacement) {
    case "end":
      labelPlacementClass = "d-flex justify-content-start align-items-center";
      labelClass = "ms-2";
      break;
    case "start":
      labelPlacementClass =
        "d-flex flex-row-reverse justify-content-end align-items-center";
      labelClass = "me-2";
      break;
    case "bottom":
      labelPlacementClass =
        "d-flex flex-column justify-content-start align-items-start";
      labelClass = "mt-2";
      break;
    case "top":
      labelPlacementClass =
        "d-flex flex-column-reverse justify-content-end align-items-start";
      labelClass = "mb-2";
      break;
    default:
      labelPlacementClass = "d-flex justify-content-start align-items-center";
      labelClass = "ms-2";
      break;
      break;
  }

  return (
    <div className={`${labelPlacementClass}`}>
      <IconButton {...props} onClick={() => (onChange ? onChange(value) : {})}>
        <Icon name={icon} />
      </IconButton>
      <div className={`${labelClass}`}>
        {typeof label === "string" && <Paragraph>{label}</Paragraph>}
        {typeof label !== "string" && label}
      </div>
    </div>
  );
};
