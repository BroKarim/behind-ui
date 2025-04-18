// animations.js

"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Fungsi untuk mengekspor semua animasi hooks
function useCardIdentityAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return {
    ref,
    variants: {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: [0, 0.2, 0.8, 1],
        x: 0,
        transition: { duration: 0.5, delay: 0.1 },
      },
    },
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
  };
}

function useVerticalCardAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return {
    ref,
    variants: {
      hidden: { opacity: 0, y: -100 },
      visible: {
        opacity: [0, 0.2, 0.8, 1],
        y: 0,
        transition: { duration: 0.5, delay: 0.2 },
      },
    },
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
  };
}

function useQuoteCardAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return {
    ref,
    variants: {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: [0, 0.2, 0.8, 1],
        x: 0,
        transition: { duration: 0.5, delay: 0.3 },
      },
    },
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
  };
}

function useCardSloganAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return {
    ref,
    variants: {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: [0, 0.2, 0.8, 1],
        x: 0,
        transition: { duration: 0.5, delay: 0.5 },
      },
    },
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
  };
}

function useCardProductAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return {
    ref,
    variants: {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: [0, 0.2, 0.8, 1],
        x: 0,
        transition: { duration: 0.5, delay: 0.5 },
      },
    },
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
  };
}

export const useMobileAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return {
    ref,
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.5, delay: 0.2 },
      },
    },
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
  };
};

export const useAnimations = () => ({
  cardIdentity: useCardIdentityAnimation(),
  cardSlogan: useCardSloganAnimation(),
  cardProduct: useCardProductAnimation(),
  verticalCard: useVerticalCardAnimation(),
  quoteCard: useQuoteCardAnimation(),
});
