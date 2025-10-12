import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

// const FeatureList = [
//   {
//     title: "Easy to Use",
//     Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
//     description: (
//       <>Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.</>
//     ),
//   },
//   {
//     title: "Focus on What Matters",
//     Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the <code>docs</code>{" "}
//         directory.
//       </>
//     ),
//   },
//   {
//     title: "Powered by React",
//     Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
//     description: (
//       <>Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.</>
//     ),
//   },
// ];

// function Feature({ Svg, title, description }) {
//   return (
//     <div className={clsx("col col--4")}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <h1 className={styles.heading}>Welcome to my notes</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/espressif/Intro">
              Espressif notes
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/linux/folder_structure">
              Linux notes
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/mikrotik/dhcp-server/">
              MikroTik notes
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/docker/docker_basics">
              Docker notes
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/nvidia/kernel">
              Nvidia notes
            </Link>
          </div>
        </div>

      </div>
    </section >
  );
}
