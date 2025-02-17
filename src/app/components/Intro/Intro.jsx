import React, { useState } from 'react';
import styles from './style.module.css';
import { useSpring, animated } from '@react-spring/web';


const Intro = () => {
    const [visible, setVisible] = useState(false);

  const { x, opacity } = useSpring({
    from: { x: -100, opacity: 0 },
    to: visible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 },
    config: { tension: 200, friction: 15 },
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

      
    return(
        <div className={styles.intro}>
        <animated.p
        style={{
          transform: x.to((x) => `translateX(${x}px)`),
          opacity,
        }}
        className={styles.introText}
      >
        안녕하세요, 채연희입니다. 웹 개발에 대한 열정과 최신 기술을 결합하여 혁신적인 웹 애플리케이션을 만들어내는 것을 목표로 하고 있습니다.
        </animated.p>
        <animated.p
        style={{
          transform: x.to((x) => `translateX(${x}px)`),
          opacity,
        }}
        className={styles.introSubtext}
      >
          I create innovative and user-friendly web applications that bring ideas to life.
          </animated.p>
      </div>
    )
}

export default Intro;