"use client";

import { useState } from "react";
import styles from "./vibrant.module.css";

const GREETINGS = [
  "Hello, wonderful soul! ✨",
  "Radiate positivity today! 🌟",
  "You are capable of amazing things! 🚀",
  "Keep shining like a diamond! 💎",
  "Your smile lights up the room! 😊",
  "Believe in the magic within you! 🪄",
  "Today is a beautiful day for a fresh start! 🌿",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const nextGreeting = () => {
    setIndex((prev) => (prev + 1) % GREETINGS.length);
  };

  return (
    <div className={styles.container}>
      <main className={styles.card}>
        <h1 className={styles.title}>Welcome!</h1>
        <div className={styles.greeting}>
          <p key={index} className={styles.greetingText}>
            {GREETINGS[index]}
          </p>
        </div>
        <button 
          onClick={nextGreeting} 
          className={styles.button}
          aria-label="Change greeting"
        >
          Spread the Joy
        </button>
      </main>
    </div>
  );
}
