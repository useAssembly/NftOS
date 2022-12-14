import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import CrossSvg from "./svg/Cross";
import LightningSvg from "./svg/Lightning";
import MintSvg from "./svg/Mint";
import TickSvg from "./svg/Tick";
import UpArrowSvg from "./svg/UpArrow";

interface Props extends ComponentPropsWithoutRef<"svg"> {
  size?: number | string; // width and height will both be set as the same value
  name?: string;
}

export const CustomIcon = (props: PropsWithChildren<Props>): JSX.Element => {
  const {
    children,
    width = 24,
    height = 24,
    size,
    viewBox = "0 0 24 24",
    name,
    ...rest
  } = props;

  return (
    <svg
      aria-labelledby={name}
      height={size || height}
      role="presentation"
      viewBox={viewBox}
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </svg>
  );
};

export const CrossIcon = ({ ...props }: Props) => (
  <CustomIcon height={24} viewBox="0 0 24 24" width={24} {...props}>
    <CrossSvg />
  </CustomIcon>
);

export const LightningIcon = ({ ...props }: Props) => (
  <CustomIcon
    fill="#D69E2E"
    height={24}
    viewBox="0 0 24 24"
    width={24}
    {...props}
  >
    <LightningSvg />
  </CustomIcon>
);

export const MintIcon = ({ ...props }: Props) => (
  <CustomIcon
    fill="#9F7AEA"
    height={18}
    viewBox="0 0 18 18"
    width={18}
    {...props}
  >
    <MintSvg />
  </CustomIcon>
);

export const TickIcon = ({ ...props }: Props) => (
  <CustomIcon
    fill="#9F7AEA"
    height={13}
    viewBox="0 0 18 13"
    width={18}
    {...props}
  >
    <TickSvg />
  </CustomIcon>
);
export const UpArrowIcon = ({ ...props }: Props) => (
  <CustomIcon
    fill="#38A169"
    height={24}
    viewBox="0 0 24 24"
    width={24}
    {...props}
  >
    <UpArrowSvg />
  </CustomIcon>
);
