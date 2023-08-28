import HamburgerIcon from "@/assets/icons/hamburgerIcon.svg";
import Image from "next/image";

type IconHamburgerProps = {} & React.HTMLAttributes<HTMLDivElement>;

const IconHamburger = ({}: IconHamburgerProps) => {
  return (
    <div>
      <Image
        priority
        src={HamburgerIcon}
        height={48}
        width={48}
        alt="open infos"
        className=" hover:bg-tertiary/10 active:bg-tertiary/20 rounded-2xl"
      />
    </div>
  );
};

export default IconHamburger;
