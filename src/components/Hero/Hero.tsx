"use client";
import Image from "next/image";
import { useState } from "react";
import me from "../../assets/me.png";
import styles from "./Hero.module.css";
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.x + rect.width / 2;
    const y = e.clientY - rect.y + rect.height / 2;
    console.log("tag", x, y);

    setMousePosition({ x, y });
  };
  return (
    <>
      <div onMouseMove={handleMouseMove}>
        <div
          className={`h-screen w-full  relative flex items-center justify-center ${styles.bgGrid}`}
        />
        <div className={styles.light} />

        {/* <div className={styles.techCircle} /> */}

        {/* {<ParticlesBg />} */}
      </div>
      <div className={styles.me}>
        <Image className={styles.image} alt="" src={me} />
      </div>
    </>
  );
}
