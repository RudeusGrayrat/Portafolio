"use client"
import { useEffect, useRef } from "react";

const BinaryBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let lastTime = 0;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const columns = Math.floor(canvas.width / 20);
        const drops = Array.from({ length: columns }, () => ({
            position: Math.random() * canvas.height,
            direction: Math.random() > 0.5 ? 1 : -1,
        }));

        const draw = (time: number) => {
            if (time - lastTime < 100) {
                requestAnimationFrame(draw);
                return;
            }
            lastTime = time;

            ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0f0";
            ctx.font = "16px monospace";

            drops.forEach((drop, i) => {
                const text = Math.random() > 0.5 ? "0" : "1";
                const x = i * 20;
                ctx.fillText(text, x, drop.position);

                drop.position += drop.direction * 20;

                if (drop.position >= canvas.height || drop.position <= 0) {
                    drop.direction *= -1;
                }
            });

            requestAnimationFrame(draw);
        };

        requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-[-1]">
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
};

export default BinaryBackground;

