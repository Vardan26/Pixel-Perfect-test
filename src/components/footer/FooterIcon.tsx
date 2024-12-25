import React from "react";

type IconProps = {
  isActive: boolean;
  size?: number;
};

type Props = {
  Icon: React.ComponentType<IconProps>;
  isActive: boolean;
  size?: number;
};

export const FooterIcon = ({ Icon, isActive, size }: Props) => {
  return <Icon size={size || 26} isActive={isActive} />;
};
