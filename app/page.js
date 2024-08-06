import Image from "next/image";
import Herosection from "./components/Herosection";
import Breadcrumbs from "./components/Breadcrumbs";
import Navbar from "./components/Navbavr";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Breadcrumbs />
      <Herosection />
    </main>
  );
}
