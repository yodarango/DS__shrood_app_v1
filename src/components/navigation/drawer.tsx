import {
  Box,
  Drawer as MDrawer,
  ListItemButton as MListItemButton,
} from "@mui/material";
import React, { useState } from "react";

import "./drawer.css";
import { TIcons } from "../inputs/icon";
import {
  COLOR_QUATERNARY,
  COLOR_TERTIARY,
  COLOR_SENARY,
} from "../../assets/tokens";

interface IDrawer {
  trigger: React.ReactNode | readonly React.ReactNode[];
  children: React.ReactNode | readonly React.ReactNode[];
  anchor?: "right" | "left"; // overrides anchor
  width?: string | number;
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
}

export const Drawer: React.FC<
  Omit<React.ComponentProps<typeof MDrawer>, "anchor"> & IDrawer
> = (props: any) => {
  let {
    anchor = "left",
    width = "30rem",
    className = "",
    secondary,
    children,
    primary,
    trigger,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  let variantClass = "";
  if (primary) variantClass = "primary";
  if (secondary) variantClass = "secondary";

  if (!primary && !secondary) variantClass = "primary";

  return (
    <div>
      <MDrawer
        className={`dr-drawer-${variantClass}`}
        onClose={() => setIsOpen(false)}
        anchor={anchor}
        open={isOpen}
      >
        <Box
          className={`${className || ""}`}
          onClick={() => setIsOpen(false)}
          sx={{ width: width }}
          role='presentation'
          {...rest}
        >
          {React.Children.map(children, (child: React.ReactElement) => {
            return React.cloneElement(child, {
              secondary,
              primary,
              ...child.props,
            });
          })}
        </Box>
      </MDrawer>

      {React.cloneElement(trigger as React.ReactElement, {
        onClick: () => setIsOpen(!isOpen),
      })}
    </div>
  );
};

interface IDrawerItem {
  children: React.ReactNode | readonly React.ReactNode[] | string;
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
}

export const ListItem: React.FC<
  Omit<React.ComponentProps<typeof MListItemButton>, "color"> & IDrawerItem
> = (props: any) => {
  const { className, primary, secondary, danger, children, ...rest } = props;

  let variantClass = "";
  let iconColor: string | undefined = undefined;
  if (secondary) {
    variantClass = "secondary";
    iconColor = COLOR_TERTIARY;
  }
  if (primary) {
    variantClass = "primary";
    iconColor = COLOR_QUATERNARY;
  }
  if (danger) {
    variantClass = "danger";
    iconColor = COLOR_SENARY;
  }

  return (
    <MListItemButton
      className={`p-3 mb-2 drawer-list-item drawer-list-item-${variantClass} ${
        className || ""
      } `}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<TIcons>(child)) {
          return React.cloneElement(child, { color: iconColor });
        }

        return child;
      })}
    </MListItemButton>
  );
};
