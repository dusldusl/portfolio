import React from "react";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Skill from "./components/Skill";
import Port from "./components/Port";




export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
       <Intro />
       <Skill />
       <Port />
      </main>
      <Footer />  
    </div>
  );
}
