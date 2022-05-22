import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description=""
    >
      <div
        style={{
          'textAlign': 'center',
          'fontSize': '3rem',
          'color': '#333',
          'marginTop': '2rem',
        }}
      >
      Under Construction
      </div>

    </Layout>
  );
}
