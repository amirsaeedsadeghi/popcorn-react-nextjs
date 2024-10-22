'use client'

import { useEffect, useRef } from "react";

export default function Loader({ onNextPage }) {
  const loader = useRef(null);
  useEffect(
    function () {
      const loaderCurrent = loader.current;
      // All Docs is from MDN web docs
      // The Intersection Observer API provides a way to asynchronously
      // observe changes in the intersection of a target element
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) onNextPage();
        },
        {
          rootMargin: "0px",
          // A threshold of 1.0 means that when 100% of the target is visible within
          // the element specified by the root option, the callback is invoked.
          threshold: 1.0,
        }
      );
      if (loaderCurrent) observer.observe(loaderCurrent);

      // Cleanup Function
      return () => {
        if (loaderCurrent) observer.unobserve(loaderCurrent);
      };
    },
    [loader, onNextPage]
  );
  return (
    <div className="loader-container" ref={loader}>
      <div className="loader"></div>
    </div>
  );
}
