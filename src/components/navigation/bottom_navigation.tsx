import {
  BottomNavigation as MBottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { useState } from "react";
import "./bottom_navigation.css";

interface TBottomNavigation {
  defaultTab?: string | number;
  tabs: any;
}

export const BottomNavigation: React.FC<
  React.ComponentProps<typeof MBottomNavigation> & TBottomNavigation
> = (props: any) => {
  const { tabs, defaultTab, ...rest } = props;

  const [value, setValue] = useState<string | number>(defaultTab);

  const handleChange = (_: any, newValue: string | number) => {
    if (props?.onChange) props.onChange(newValue);
    setValue(newValue);
  };

  return (
    <MBottomNavigation
      onChange={handleChange}
      showLabels
      value={value}
      {...rest}
    >
      {tabs?.map((tab: any) => {
        const { icon, value, label, ...rest } = tab;
        return (
          <BottomNavigationAction
            value={value}
            label={label}
            key={value}
            icon={icon}
            {...rest}
          />
        );
      })}
    </MBottomNavigation>
  );
};
