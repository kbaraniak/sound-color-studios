import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Main />
      <Footer />
    </>
  );
}
