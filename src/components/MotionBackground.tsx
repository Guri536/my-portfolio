// src/components/MotionBackground.tsx
import { useEffect, useState, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const MotionBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        setInit(true);
    }, []);

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: false,
                zIndex: 0,
            },
            background: {
                color: { value: "transparent" },
            },
            // 1. Bump FPS limit for smoother rendering
            fpsLimit: 144,
            particles: {
                color: {
                    value: ["#10b981", "#22d3ee"],
                },
                links: {
                    color: "#10b981",
                    distance: 200,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    // 2. "none" makes them flow in completely random directions
                    direction: "none" as const,
                    enable: true,
                    outModes: { default: "out" as const },
                    // 3. Set random to FALSE to stop the erratic micro-stutters
                    random: false,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: { enable: true },
                    // 4. Reduce this! 120 text nodes + links will kill browser performance
                    value: 45,
                },
                opacity: {
                    value: { min: 0.7, max: 1 },
                    animation: {
                        enable: true,
                        speed: 0.1,
                        sync: true,
                    },
                },
                shape: {
                    type: "text" as const,
                    options: {
                        text: {
                            value: [
                                "Kotlin",
                                "FastAPI",
                                "Django",
                                "Laravel",
                                "Jetpack Compose",
                                "React",
                                "PyTorch",
                                "IoT",
                                "Docker",
                                "PlantVita",
                                "Peri-Lily",
                                "Guri536"
                            ],
                            font: "Coral Pixels",
                            color: "f00",
                            style: "normal",
                            weight: "200"
                        }
                    }
                },
                size: {
                    value: { min: 44, max: 54 }
                },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: ["connect"] // or "grab", "bubble", "connect", "attract"
                    },
                    onDiv: {
                        selectors: [".social"],
                        enable: true,
                        mode: "attract"
                    },
                    onClick: {
                        enable: true,
                        mode: ["repulse"], // adds particles
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 300,
                        duration: 0.4,
                    },
                    grab: {
                        distance: 180,
                        links: {
                            opacity: 0.5,
                        },
                    },
                    bubble: {
                        distance: 150,
                        size: 10,
                        duration: 1,
                        opacity: 0.4,
                    },
                    push: {
                        quantity: 5,
                    },
                    connect: {
                        distance: 1000,
                        radius: 250,
                        links: {
                            opacity: 0.4,
                        },
                    }
                },
            },

            detectRetina: true,
        }),
        []
    );

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0 h-screen w-full z-0"
        />
    );
};

export default MotionBackground;