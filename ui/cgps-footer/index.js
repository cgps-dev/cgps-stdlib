/** biome-ignore-all lint/performance/noImgElement: We are using the img element for a logo, which is acceptable */

import React from 'react';
import {
  bdiLogo,
  cgpsLogo,
  psiLogo,
} from './images.js';

import styles from './styles.module.css';

export default function Footer(props) {
  const {
    creditLinkText = "Centre for Genomic Pathogen Surveillance",
    links = [],
    creditLink = "https://www.pathogensurveillance.net",
    brand = "This site",
  } = props;
  const creditText = (
    <React.Fragment>
      <strong>{brand}</strong> is developed and maintained by</React.Fragment>
  );
  return (
    <footer className={styles["site-footer"]}>
      <div className={styles["footer-wrap"]}>
        <span className={styles["footer-credit"]}>
          {creditText}{" "}
        </span>

        <nav className={styles["footer-links"]} aria-label="Footer">
          {
            links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.target}
                className={styles["link"]}
              >
                {link.text}
              </a>
            ))
          }
        </nav>

        <div className={styles["footer-brand-row"]}>
          <a
            className={styles["cgps-logo"]}
            href="https://www.pathogensurveillance.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={cgpsLogo}
              alt="Centre for Genomic Pathogen Surveillance"
            />
          </a>

          <div className={styles["footer-partners"]}>
            <div className={styles["footer-logo-row"]}>
              {/* <span>Developed at</span> */}
              <img
                src={bdiLogo}
                alt="Big Data Institute"
                className={styles["bdi-logo"]}
              />
              <img
                src={psiLogo}
                alt="Pandemic Sciences Institute"
                className={styles["psi-logo"]}
              />
            </div>
          </div>

        </div>

        <div className={styles["notes"]}>
          { props.notes }
        </div>
      </div>
    </footer>
  );
}
