"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";

interface ScrollyCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames?: number;
}

export default function ScrollyCanvas({
    scrollYProgress,
    totalFrames = 75,
}: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // Calculate current frame index (0 to totalFrames - 1)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

    useEffect(() => {
        // Preload all images
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            const x = i.toString().padStart(2, "0");
            img.src = `/sequence/frame_${x}_delay-0.066s.webp`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    // Draw first frame immediately when all are loaded
                    drawFrame(loadedImages[0]);
                }
            };
            // fallback if image fails to load
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === totalFrames) drawFrame(loadedImages[0]);
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [totalFrames]);

    const drawFrame = (image: HTMLImageElement) => {
        const canvas = canvasRef.current;
        if (!canvas || !image || !image.width) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        // Mimic object-fit: cover
        const scale = Math.max(
            canvas.width / image.width,
            canvas.height / image.height
        );
        const x = canvas.width / 2 - (image.width / 2) * scale;
        const y = canvas.height / 2 - (image.height / 2) * scale;

        ctx.fillStyle = "#0a0a0f";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (images.length === totalFrames) {
            const index = Math.min(Math.max(Math.floor(latest), 0), totalFrames - 1);
            drawFrame(images[index]);
        }
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                // High DPI support
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;

                // CSS dimensions
                canvasRef.current.style.width = `${window.innerWidth}px`;
                canvasRef.current.style.height = `${window.innerHeight}px`;

                if (images.length === totalFrames) {
                    const idx = Math.min(Math.max(Math.floor(frameIndex.get()), 0), totalFrames - 1);
                    drawFrame(images[idx]);
                }
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [images, frameIndex, totalFrames]);

    return (
        <>
            <canvas ref={canvasRef} className="absolute inset-0 block" />
            <div className="absolute inset-0 bg-background/50 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        </>
    );
}
