import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./formation_item.module.css";
import { FormationItemProps } from "@/app/formations/page";

const FormationItem = ({ image, name, type, year }: FormationItemProps) => {
  const item = React.useRef(null);

  const scrollYProgress: any = useScroll({
    target: item,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const y = useTransform(scrollYProgress, [0, 0.5], [300, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  return (
    <motion.div
      className={styles.formation_item}
      ref={item}
      style={{
        y,
        scale,
        opacity,
      }}
    >
      <img src={image} alt={`${name} image`} />
      <div className={styles.right}>
        <div>
          <p>name: </p>
          <p>{name}</p>
        </div>
        <div>
          <p>Type: </p>
          <p>{type}</p>
        </div>
        <div>
          <p>Year:</p>
          <p>{year}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FormationItem;
