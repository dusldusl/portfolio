import React from 'react';
import styles from './style.module.css';



function Header({ onTabChange }) {
  const [activeTab, setActiveTab] = React.useState('intro');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  
  return (
    <div className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <button
              className={`${activeTab === 'intro' ? styles.active : ''}`}
              onClick={() => handleTabChange('intro')}
            >
              Intro
            </button>
          </li>
          <li>
            <button
              className={`${activeTab === 'skill' ? styles.active : ''}`}
              onClick={() => handleTabChange('skill')}
            >
              Skill
            </button>
          </li>
          <li>
            <button
              className={`${activeTab === 'port' ? styles.active : ''}`}
              onClick={() => handleTabChange('port')}
            >
              Port
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
