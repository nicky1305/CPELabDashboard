import { Progress } from "antd";

import { Iconify } from "@/components/icon";
import { useThemeToken } from "@/theme/hooks";

export function Total() {
  const { colorPrimaryActive, colorPrimaryBorder } = useThemeToken();
  return (
    <Basic
      title="4,501,000"
      subtitle="Total CPEs"
      iconify="tabler:user-filled"
      bg={colorPrimaryActive}
      strokeColor={colorPrimaryBorder}
    />
  );
}
export function Models() {
  const { colorInfoActive, colorInfoBorder } = useThemeToken();
  return (
    <Basic
      title="25"
      subtitle="Models"
      iconify="ic:round-email"
      bg={colorInfoActive}
      strokeColor={colorInfoBorder}
    />
  );
}
export function Online_7_Days() {
  const { colorInfoActive, colorInfoBorder } = useThemeToken();
  return (
    <Basic
      title="45,566"
      subtitle="Online 7 Days"
      iconify="ic:round-email"
      bg={colorInfoActive}
      strokeColor={colorInfoBorder}
    />
  );
}

type Props = {
  title: string;
  subtitle: string;
  iconify: string;
  bg?: string;
  strokeColor?: string;
};
function Basic({title, subtitle, iconify, bg, strokeColor }: Props) {
  const { colorBgBase } = useThemeToken();
  const format = (val?: number) => (
    <span style={{ color: colorBgBase }}>{val}%</span>
  );
  return (
    <div
      className="relative flex items-center rounded-2xl p-6"
      style={{ background: bg, color: colorBgBase }}
    >
      <div className="ml-2 flex flex-col">
        <span className="text-2xl font-bold">{title}</span>
        <span className="opacity-60">{subtitle}</span>
      </div>
      <div className="absolute right-0">
        <Iconify icon={iconify} style={{ opacity: 0.5 }} size={100} />
      </div>
    </div>
  );
}
