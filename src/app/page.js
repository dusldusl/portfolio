'use client';

import { useRef } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Skill from './components/Skill/Skill';
import Port from './components/Port/Port';
import styles from './page.module.css';

export default function Home() {
  const introRef = useRef(null);
  const skillRef = useRef(null);
  const portRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTabChange = (tab) => {
    switch (tab) {
      case 'intro':
        scrollToSection(introRef);
        break;
      case 'skill':
        scrollToSection(skillRef);
        break;
      case 'port':
        scrollToSection(portRef);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header onTabChange={handleTabChange} />
      <main className={styles.main}>
        <section ref={introRef}>
          <Intro />
        </section>
        <section ref={skillRef}>
          <Skill />
        </section>
        <section ref={portRef}>
          <Port />
        </section>
      </main>
      <Footer />
    </div>
  );
}
