import React from 'react';
import styles from './layout.module.scss';

interface ILayout {
  children?: React.ReactNode;
}

export function Layout({children}: ILayout) {
  return (
    <div className={'container'}>
      <div className={styles.layout}>
        {children}
      </div>
    </div>
  );
}
