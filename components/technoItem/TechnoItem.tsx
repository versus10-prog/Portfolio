import React from "react";
import styles from "./techno_item.module.css";
import { ProjetsType } from "../../types/projets/Projets";
import { Technologie } from "../../types/technologie/Technologie";

const TechnoItem = ({ techno }: { techno: Technologie }) => {
  return (
    <div className={styles.hexagon}>
      <svg
        className={styles.svg}
        viewBox="0 0 72 72"
        id="emoji"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        stroke="#000000"
        transform="rotate(90)"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="color"></g>{" "}
          <g id="line">
            {" "}
            <path
              fill="#D9D9D9"
              stroke="#D9D9D9"
              stroke-width="2"
              d="M7.577,37 C7.22,36.381 7.22,35.619 7.577,35 L20.923,11.885 C21.28,11.266 21.94,10.885 22.655,10.885 L49.345,10.885 C50.06,10.885 50.72,11.266 51.077,11.885 L64.423,35 C64.78,35.619 64.78,36.381 64.423,37 L51.077,60.115 C50.72,60.734 50.06,61.115 49.345,61.115 L22.655,61.115 C21.94,61.115 21.28,60.734 20.923,60.115 L7.577,37 z"
            ></path>{" "}
          </g>{" "}
        </g>
      </svg>
      <img
        className={styles.image}
        src={techno.imageLien}
        alt={`image ${techno.nom}`}
      />
      <p className={styles.nom}>{techno.nom}</p>
    </div>
  );
};

export default TechnoItem;
