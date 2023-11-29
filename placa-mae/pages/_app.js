// components/ActionButton.js
import React, { useState } from "react";
import styles from "../styles/ActionButton.module.css";

export default function ActionButton() {
  const [isHovered, setHovered] = useState(false);

  return (
    <button
      className={`${styles.actionButton} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ícone ou conteúdo do botão */}
    </button>
  );
}
