"use client";

import React, { useState, useEffect, useRef } from "react";
import { redirect, usePathname } from "next/navigation";
import styles from "./dashboard_layout.module.css";

import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [route, setRoute] = useState<string | null | undefined>(
    pathname?.split("/")[2]
  );

  useEffect(() => {
    setRoute(pathname?.split("/")[2]);
  }, [pathname]);
  return (
    <div className={styles.dashboard}>
      <div className={styles.nav}>
        <ul>
          <Link href={"/dashboard/accueil"}>
            <li className={route == undefined ? styles.selected : undefined}>
            <img src="assets/svg/accueil-black.svg" className={styles.svg}/>
            Accueil
            </li>
          </Link>
          <Link href="/dashboard/projet">
            <li className={route == "projet" ? styles.selected : undefined}>
              <img src="assets/svg/project-black.svg" className={styles.svg}/>
              Projets
            </li>
          </Link>
          <Link href={"/dashboard/technologie"}>
            <li className={route == "technologie" ? styles.selected : undefined}>
              <img src="assets/svg/technologie-black.svg" className={styles.svg}/>
              Technologies
            </li>
          </Link>
          <Link href={"/dashboard/detailProjet"}>
            <li className={route == "detailProjet" ? styles.selected : undefined}>
            <img src="assets/svg/detail-projet-black.svg" className={styles.svg}/>
              Details Projets
            </li>
          </Link>
          <Link href={"/dashboard/parcours"}>
            <li className={route == "parcours" ? styles.selected : undefined}>
            <img src="assets/svg/parcours-black.svg" className={styles.svg}/>
              Parcours
            </li>
          </Link>
          <Link href={"/dashboard/activite"}>
            <li className={route == "activite" ? styles.selected : undefined}>
            <img src="assets/svg/activite-black.svg" className={styles.svg}/>
              Activités
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
