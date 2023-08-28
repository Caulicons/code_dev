import Button from "@/components/Actions/Button/Button";
import IconHamburger from "@/components/NavBar/Hamburger/Hamburger";
import MenuItem from "@/components/NavBar/MenuItem/MenuItem";
import Image from "next/image";

export default function Home() {
  const test = true;

  return (
    <>
      {test && (
        <main className="grid place-content-center min-h-screen">
          < MenuItem  />
        </main>
      )}
    </>
  );
}

{
  /* ;
   */
}
