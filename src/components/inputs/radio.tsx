import { Icon, IconButton, IIConButton } from "..";
import React, { useEffect, useState } from "react";
import { SxProps } from "@mui/material";
import { Paragraph } from "..";

import styles from "./radio.module.css";

type TRadioGroup = {
  label?: string | JSX.Element | React.ReactNode | number;
  children: React.ReactNode | readonly React.ReactNode[];
  onChange?: (value: string | number | boolean) => void;
  layout?: "vertical" | "horizontal";
  className?: string;
};

export const RadioGroup = ({
  layout = "vertical",
  className,
  children,
  label,
  onChange,
}: TRadioGroup) => {
  const [selectedOption, setSelectedOption] = useState<
    string | number | boolean | null
  >(null);

  const handleChange = (value: string | number | boolean) => {
    setSelectedOption(value);
    if (onChange) onChange(value);
  };

  const childrenWithProps = React.Children.map(
    children,
    (child: React.ReactNode) => {
      if (React.isValidElement<TRadio>(child)) {
        return React.cloneElement(child, {
          isSelected: selectedOption === child.props.value,
          onChange: handleChange,
        });
      }
      return child;
    }
  );

  let layoutClass = layout === "vertical" ? styles.vertical : styles.horizontal;

  return (
    <div className={`${styles.radioGroup56sm} ${className} ${layoutClass}`}>
      {label && (
        <div className='mb-2'>
          {typeof label === "string" && <Paragraph>{label}</Paragraph>}
          {typeof label !== "string" && label}
        </div>
      )}
      {childrenWithProps}
    </div>
  );
};

type TRadio = {
  label?: string | JSX.Element | React.ReactNode | number;
  onChange?: (value: string | number | boolean) => void;
  labelPlacement?: "start" | "end" | "top" | "bottom";
  value: string | number | boolean;
  isSelected?: boolean;
  buttonProps?: IIConButton;
  icon: string;
};

export const Radio: React.FC<TRadio> = (props: any) => {
  let {
    labelPlacement,
    buttonProps,
    isSelected,
    onChange,
    label,
    icon,
    value,
  } = props;

  const [iconSize, setIconSize] = useState<undefined | SxProps>(
    buttonProps?.sx
  );

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
        "d-flex flex-column justify-content-start align-items-center";
      labelClass = "mt-1";
      break;
    case "top":
      labelPlacementClass =
        "d-flex flex-column-reverse justify-content-end align-items-center";
      labelClass = "mb-1";
      break;
    default:
      labelPlacementClass = "d-flex justify-content-start align-items-center";
      labelClass = "ms-2";
      break;
  }

  if (!buttonProps?.primary && !buttonProps?.secondary && !buttonProps?.danger)
    buttonProps = { ...buttonProps, primary: true };

  useEffect(() => {
    if (isSelected) setIconSize({ width: 35, height: 35 });
    else setIconSize(buttonProps?.sx);
  }, [isSelected]);

  return (
    <div className={`${labelPlacementClass}`}>
      <div
        className={`${styles.selectedBorder} ${
          isSelected ? styles.selected + " p-1 border border-quaternary" : ""
        }`}
      >
        <IconButton
          sx={iconSize}
          {...buttonProps}
          onClick={() => (onChange ? onChange(value) : {})}
        >
          <Icon name={icon} />
        </IconButton>
      </div>
      <div className={`${labelClass}`}>
        {typeof label === "string" && <Paragraph>{label}</Paragraph>}
        {typeof label !== "string" && label}
      </div>
    </div>
  );
};
