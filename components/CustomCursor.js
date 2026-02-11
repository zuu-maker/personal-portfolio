import { useRef, useEffect } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const isPointer = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "0.5";
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      isPointer.current =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a, button, [role='button']");
    };

    const handleMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    // rAF + lerp: zero React re-renders, direct DOM writes only
    function animate() {
      const { x: mx, y: my } = mouse.current;

      // Dot: tight follow
      dotPos.current.x += (mx - dotPos.current.x) * 0.35;
      dotPos.current.y += (my - dotPos.current.y) * 0.35;

      // Ring: loose follow
      ringPos.current.x += (mx - ringPos.current.x) * 0.15;
      ringPos.current.y += (my - ringPos.current.y) * 0.15;

      const dotScale = isPointer.current ? 2.5 : 1;
      const ringScale = isPointer.current ? 1.5 : 1;

      dot.style.transform = `translate3d(${dotPos.current.x - 8}px, ${dotPos.current.y - 8}px, 0) scale(${dotScale})`;
      ring.style.transform = `translate3d(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px, 0) scale(${ringScale})`;

      rafId.current = requestAnimationFrame(animate);
    }

    rafId.current = requestAnimationFrame(animate);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          opacity: 0,
          willChange: "transform",
          transition: "opacity 0.15s ease, transform 0.1s ease",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-cyan-400/50 rounded-full pointer-events-none z-[9998] hidden lg:block"
        style={{
          opacity: 0,
          willChange: "transform",
          transition: "opacity 0.15s ease",
        }}
      />
    </>
  );
}

export default CustomCursor;
