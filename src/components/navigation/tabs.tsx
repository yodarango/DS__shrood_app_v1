import { Tabs as MTabs, Tab as MTab } from "@mui/material";
import { useEffect, useState } from "react";
import "./tabs.css";

interface TTabs {
  tabBorderClassName?: string;
  secondary?: boolean;
  defaultTab: number;
  primary?: boolean;
  tabs: any;
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

  const [value, setValue] = useState<string | number>(defaultTab);

  const handleChange = (_: any, newValue: string | number) => {
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
        {tabs?.map((tab: any) => {
          const { iconPosition, className, value, label, icon, ...rest } = tab;

          return (
            <MTab
              iconPosition={iconPosition}
              className={className || ""}
              value={value}
              label={label}
              icon={icon}
              key={value}
              {...rest}
            />
          );
        })}
      </MTabs>
      <div
        className={`w-100 d-inline-block dr-tabs-border ${tabBorderClassName}`}
      ></div>
    </div>
  );
};
