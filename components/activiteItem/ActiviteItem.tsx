import React, { useState } from "react";
import styles from "./activite_item.module.css";
import { Activite } from "../../types/activite/Activite";

const ActiviteItem = ({ activite, premier }: { activite: Activite, premier: boolean }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className={styles.hexagon} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={activite.imageLien} className={`${styles.svg} ${!premier ? styles.dernier : ""}`} />
      <svg className={`${styles.overlaySvg} ${hovered ? styles.show : ""}`} viewBox="0 0 348 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M174 0L347.205 100V300L174 400L0.794922 300V100L174 0Z" fill="black" fillOpacity="0.5" />
        <text x="50%" y="35%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="24px" fontWeight="bold" textLength="250">
          {activite.titre}
        </text>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18px" textLength="250">
          {activite.description}
        </text>
      </svg>
    </div>
  );
};

export default ActiviteItem;
