"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Typewriter } from "react-simple-typewriter";
import PageTransition from "../../components/pageTransition/PageTransition";
import axios from "axios";


export default function Home() {

  const data = {}

  return (
    // <PageTransition>
    //   <main className={styles.main}>
    //     <section className={styles.presentation}>
    //       <div className={styles.left}>
    //         <p>
    //           <Typewriter
    //             words={["ClaquetteuuuH", "Thomas Biabiany"]}
    //             loop={true}
    //             cursor
    //             typeSpeed={70}
    //             deleteSpeed={50}
    //             delaySpeed={1000}
    //           />
    //         </p>
    //         <p>full stack developer</p>
    //         <p>
    //           I&apos;m a French web developer who&apos;s been passionate about
    //           IT for over 5 years. Currently studying, I mainly use Typescript
    //           to create web applications.
    //         </p>
    //         <a className={styles.cv} href={"/cv_english.pdf"} download={"thomas_biabiany_cv"} target="_blank" rel="noreferrer">
    //           Download CV{" "}
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="ionicon"
    //             viewBox="0 0 512 512"
    //           >
    //             <path
    //               d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="32"
    //             />
    //           </svg>
    //         </a>
    //       </div>
    //       <div className={styles.right}>
    //         <div className={styles.design}></div>
    //         <img src="/assets/images/me.jpg" className={styles.img} />
    //       </div>
    //     </section>
    //     <section className={styles.techno}>
    //       <h2>Technical Skills</h2>
    //       {data ? (
    //         data.map((categorie) => {
    //           return (
    //             <div
    //               key={categorie.categorie_name}
    //               className={styles.skills_container}
    //             >
    //               <h3>{categorie.categorie_name}</h3>
    //               <div className={styles.cat_container}>
    //                 {categorie.techno
    //                   ? categorie.techno.map((techno) => {
    //                       return (
    //                         <div className={styles.cat_item} key={techno.name}>
    //                           <img
    //                             src={`${process.env.public_domaine_bucket_url}${techno.techno_img}`}
    //                             alt={`logo ${techno.name}`}
    //                           />
    //                           <p>{`${techno.name}`}</p>
    //                         </div>
    //                       );
    //                     })
    //                   : false}
    //               </div>
    //             </div>
    //           );
    //         })
    //       ) : (
    //         <div className={styles.skills_container}>
    //           <div className={styles.cat_container}>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //             <div className={styles.cat_item}>
    //               <div className={styles.skelet}></div>
    //               <div className={styles.skeletp}></div>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </section>
    //     <section className={styles.container}>
    //       <div className={`${styles.about} ${styles.ab_me_hobbie}`}>
    //         <h3>
    //           About <span>Me</span>
    //         </h3>
    //         <p>
    //           I am passionate about computer science and equally enthusiastic
    //           about sports and other fields.
    //         </p>
    //       </div>
    //       <div className={`${styles.img1} ${styles.ab_me_img}`}></div>
    //       <div className={`${styles.hobbie2} ${styles.ab_me_hobbie}`}>
    //         <h3>
    //           <span>Martial</span> arts
    //         </h3>
    //         <p>
    //           For over a year I&apos;ve been developing a passion for martial
    //           arts, Brazilian jui jitsu, kick boxing and mma. These sports have
    //           given me many values such as perseverance, courage and humility.
    //         </p>
    //       </div>
    //       <div className={`${styles.hobbie1} ${styles.ab_me_hobbie}`}>
    //         <h3>
    //           <span>Computer</span> Science
    //         </h3>
    //         <p>
    //           I&apos;ve been passionate about computers since I was very young,
    //           I got interested through video games and then developed a passion
    //           for hardware, security and programming.
    //         </p>
    //       </div>
    //       <div className={`${styles.img2} ${styles.ab_me_img}`}></div>
    //       <div className={`${styles.img3} ${styles.ab_me_img}`}></div>
    //       <div className={`${styles.img4} ${styles.ab_me_img}`}></div>
    //     </section>
    //   </main>
    // </PageTransition>
    <p>test</p>
  );
}
