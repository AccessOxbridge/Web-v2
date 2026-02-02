"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only run on desktop (simple check).
        // Can also use media query match.
        if (window.matchMedia("(max-width: 1024px)").matches) return;

        const cursor = cursorRef.current;
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = "1";
        };

        const handleMouseLeave = () => {
            cursor.style.opacity = "0";
        };

        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;

            cursor.style.left = `${cursorX - 10}px`;
            cursor.style.top = `${cursorY - 10}px`;

            requestAnimationFrame(animateCursor);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        // Add hover effects
        const addHover = () => {
            cursor.style.transform = "scale(2)";
        };
        const removeHover = () => {
            cursor.style.transform = "scale(1)";
        };

        const interactiveElements = document.querySelectorAll("a, button, .service-card");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        const animationId = requestAnimationFrame(animateCursor);

        // Observer to attach listeners to dynamic elements (optional, simplified here)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationId);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="custom-cursor"
            style={{
                position: "fixed",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "rgba(201, 169, 97, 0.3)",
                pointerEvents: "none",
                zIndex: 9999,
                mixBlendMode: "difference",
                transition: "transform 0.15s ease, opacity 0.15s ease",
                opacity: 0,
                left: 0,
                top: 0,
            }}
        />
    );
}
