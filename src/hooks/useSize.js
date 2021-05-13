import { useRef, useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

const useSize = (ref) => {
  const [dimensions, setdDimensions] = useState({ widthLength: 0 });
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width } = entry.contentRect;
        setdDimensions({ widthLength: width });
      });
    });
    if (ref.current) resizeObserverRef.current.observe(ref.current);
    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
  }, [ref]);
  return dimensions;
};

export default useSize;
