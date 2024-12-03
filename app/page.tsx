import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/app/home/page";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <div >
      <HomePage />
      <Footer />

    </div>
  );
}
