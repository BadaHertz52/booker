import React from 'react';

import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        ⓒ 2025{' '}
        <a className={styles.link} href="https://github.com/BadaHertz52">
          badahertz52
        </a>{' '}
        All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
