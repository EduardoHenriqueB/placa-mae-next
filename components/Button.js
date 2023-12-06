// components/Button.js
import React, { useState } from "react";
import styles from "../styles/Button.module.css";

export default function Button() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.button} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagem X */}
      <img
        src="./denuncie.png"  // Substitua pelo caminho real da sua imagem
        alt="X"
        className={styles.image}
      />
    </div>
  );
}
