import { Tabs as MTabs, Tab as MTab } from "@mui/material";
import React, { JSXElementConstructor, ReactElement, useState } from "react";
import "./tabs.css";

type TTab = {
  icon?:
    | string
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
  label?: string | number | JSX.Element | React.ReactNode;
  iconPosition?: "start" | "end" | "top" | "bottom";
  value: string | number;
  className?: string;
};

interface TTabs {
  tabBorderClassName?: string;
  secondary?: boolean;
  defaultTab?: number;
  primary?: boolean;
  tabs: TTab[];
}
export const Tabs: React.FC<React.ComponentProps<typeof MTabs> & TTabs> = (
  props: any
) => {
  const {
    tabBorderClassName = "",
    defaultTab,
    secondary,
    primary,
    tabs,
    ...rest
  } = props;

  let whichDefaultTab = defaultTab ? defaultTab : tabs[0].value;
  const [value, setValue] = useState(whichDefaultTab);

  const handleChange = (_: any, newValue: string) => {
    if (props?.onChange) props.onChange(newValue);
    setValue(newValue);
  };

  return (
    <div className='position-relative'>
      <MTabs
        value={value}
        onChange={handleChange}
        textColor={primary ? "primary" : "secondary"}
        indicatorColor={primary ? "primary" : "secondary"}
        {...rest}
      >
        {tabs?.map((tab: TTab) => (
          <MTab
            iconPosition={tab.iconPosition}
            className={tab.className || ""}
            value={tab.value}
            label={tab.label}
            icon={tab.icon}
            key={tab.value}
          />
        ))}
      </MTabs>
      <div
        className={`w-100 d-inline-block dr-tabs-border ${tabBorderClassName}`}
      ></div>
    </div>
  );
};
