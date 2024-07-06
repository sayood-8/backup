"use client";
import { useState } from 'react';
import styles from "./counter.module.css" ;

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
    <button id ="button-2" className ={styles.button} onClick={() => setCount(count =>count - 1)}>
        Decrement
      </button>
      <p className ={styles.p}>{count}</p>
      <button id ="button-1" className ={styles.button} onClick={() => setCount(count => count + 1)}>
        Increment
      </button>

    </>
  );
}