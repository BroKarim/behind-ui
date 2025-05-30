import React, { memo } from "react";
import { cn } from "@/lib/utils";

type IconSize = "sm" | "md" | "lg" | "xl" | "xxl";

interface BaseIconButtonProps {
  size?: IconSize;
  className?: string;
  iconClassName?: string;
  disabledClassName?: string;
  title?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

type IconButtonWithoutChildrenProps = {
  icon: string;
  children?: undefined;
} & BaseIconButtonProps;

type IconButtonWithChildrenProps = {
  icon?: undefined;
  children: string | JSX.Element | JSX.Element[];
} & BaseIconButtonProps;

type IconButtonProps =
  | IconButtonWithoutChildrenProps
  | IconButtonWithChildrenProps;

const IconButton = memo(
  ({
    icon,
    size = "xl",
    className,
    iconClassName,
    disabledClassName,
    disabled = false,
    title,
    onClick,
    children,
  }: IconButtonProps) => {
    return (
      <button
        className={cn(
          "text-bolt-elements-item-contentDefault enabled:hover:text-bolt-elements-item-contentActive enabled:hover:bg-bolt-elements-item-backgroundActive flex items-center rounded-md bg-transparent p-1 disabled:cursor-not-allowed",
          { [cn("opacity-30", disabledClassName)]: disabled },
          className,
        )}
        title={title}
        disabled={disabled}
        onClick={(event) => {
          if (disabled) {
            return;
          }
          onClick?.(event);
        }}
      >
        {children ? (
          children
        ) : (
          <div className={cn(icon, getIconSize(size), iconClassName)}></div>
        )}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;

function getIconSize(size: IconSize) {
  if (size === "sm") {
    return "text-sm";
  } else if (size === "md") {
    return "text-md";
  } else if (size === "lg") {
    return "text-lg";
  } else if (size === "xl") {
    return "text-xl";
  } else {
    return "text-2xl";
  }
}
