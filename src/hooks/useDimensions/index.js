import { useState, useCallback, useEffect } from "react";

function getDimensionObject(node) {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    top: "x" in rect ? rect.x : rect.top,
    left: "y" in rect ? rect.y : rect.left,
    x: "x" in rect ? rect.x : rect.left,
    y: "y" in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom
  };
};

function useDimensions({ liveMeasure = true } = {}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [node, setNode]             = useState(null);

  const ref = useCallback(node => {
    setNode(node);
  }, []);

  useEffect(() => {
    if (node) {
      const measure = () => {
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );
      };

      measure();

      if (liveMeasure) {
        window.addEventListener("resize", measure);
        window.addEventListener("scroll", measure);

        return () => {
          window.removeEventListener("resize", measure);
          window.removeEventListener("scroll", measure);
        };
      }
    }
  }, [node]);

  return [ref, dimensions, node];
}

export default useDimensions;