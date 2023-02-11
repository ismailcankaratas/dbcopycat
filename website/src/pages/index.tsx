import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Documentation
          </Link>
          <Link
            to="https://www.producthunt.com/products/dbcopycat/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-dbcopycat" target="_blank">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=521146&theme=light"
              alt="Dbcopycat - Dynamicizing&#0032;static&#0032;json&#0032;files&#0032;with&#0032;Node&#0032;Js&#0046;&#0032;Fast&#0032;json&#0032;data&#0046; | Product Hunt"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Dynamic json files`}
      description="Dbcopycat, A JSON Database that saves your Json data in a file and makes it easy for you to perform CRUD operations.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
