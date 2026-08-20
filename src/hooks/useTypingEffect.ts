"use client";

import { useEffect, useRef, useState } from "react";

interface UseTypingEffectOptions {
  phrases: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypingEffect({
  phrases,
  typingSpeed = 45,
  deletingSpeed = 25,
  pauseDuration = 1800,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState("");
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const pausedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (phrases.length === 0) return;
    const p = phrases as string[];

    function scheduleNext(delay: number) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(tick, delay);
    }

    function tick() {
      if (p.length === 0) return;
      const phrase = p[indexRef.current];

      if (pausedRef.current) {
        pausedRef.current = false;
        deletingRef.current = true;
        scheduleNext(deletingSpeed);
        return;
      }

      if (!deletingRef.current) {
        // Typing
        charRef.current++;
        setDisplayText(phrase.slice(0, charRef.current));

        if (charRef.current >= phrase.length) {
          // Finished typing — pause before deleting
          pausedRef.current = true;
          scheduleNext(pauseDuration);
        } else {
          scheduleNext(typingSpeed);
        }
      } else {
        // Deleting
        charRef.current--;
        setDisplayText(phrase.slice(0, charRef.current));

        if (charRef.current <= 0) {
          // Finished deleting — move to next phrase
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % p.length;
          scheduleNext(typingSpeed);
        } else {
          scheduleNext(deletingSpeed);
        }
      }
    }

    timerRef.current = setTimeout(tick, 800);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}
