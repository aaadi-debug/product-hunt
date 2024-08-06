import Image from "next/image";
import Herosection from "./components/Herosection";
import Breadcrumbs from "./components/Breadcrumbs";

export default function Home() {
  return (
    <main className="">
      <Breadcrumbs />
      <Herosection />
    </main>
  );
}
