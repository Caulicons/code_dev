import Image from "next/image";
import MenuItemDefault from "@/assets/icons/menuItem.svg";

type menuItemProps = {
  svgPath?: string;
  name?: string;
  onClick?: () => void;
};

const MenuItem = ({ svgPath, onClick }: menuItemProps) => {
  return (
    <div
      onClick={onClick}
      className="flex gap-4 opacity-30 hover:opacity-70 active:opacity-100 rounded-2xl items-center h-auto cursor-pointer"
    >
      <div className="p-3 bg-tertiary rounded-2xl">
        <Image
          priority
          src={svgPath ?? MenuItemDefault}
          height={24}
          width={24}
          alt="open infos"
        />
      </div>
      <span className="text-white">Menu</span>
    </div>
  );
};

export default MenuItem;
