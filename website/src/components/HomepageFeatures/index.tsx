import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    img: "img/one.png",
    description: (
      <>
        Dbcopycat is used to make static json file dynamic quickly easily.
      </>
    ),
  },
  {
    title: 'Focus on the Speed of Data',
    img: "img/two.png",
    description: (
      <>
        Dbcopycat allows us to perform CRUD operations on the json file, and we access our data as fast as it is static.
        Go ahead and see the <code>speed</code> difference
      </>
    ),
  },
  {
    title: 'Powered by Nodejs',
    img: "img/three.png",
    description: (
      <>
        Extend or customize your backend's layout by reusing NodeJs.
      </>
    ),
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
