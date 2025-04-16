import { NavLink } from "react-router-dom";

import { useThemeToken } from "@/theme/hooks";

import { Iconify } from "../icon";

import logo from "@/assets/images/logo.png";

interface Props {
  size?: number | string;
}
function Logo({ size = 50 }: Props) {
  const { colorPrimary } = useThemeToken();

  return (
    <NavLink to="/">
      <img
        src={logo}
        alt="Logo"
        style={{
          width: size,
          height: size,
        }}
      />
    </NavLink>
  );
}

export default Logo;
