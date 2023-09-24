"use client";

import Button from "@/components/Actions/Button/Button";
import Input from "@/components/Actions/Input/Input";
import Selected from "@/components/Actions/Selected/Selected";
import IconHamburger from "@/components/NavBar/Hamburger/Hamburger";
import MenuItem from "@/components/NavBar/MenuItem/MenuItem";
import Image from "next/image";
import { mainModule } from "process";

export default function Home() {
  const test = true;
  /* Selected Test */

  const options = ["Batata", "Chocolate", "Banana"];

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <>
      <main className="grid place-content-center h-screen">
        {test && <Selected options={options} onChange={handleChange} />}
      </main>
    </>
  );
}
