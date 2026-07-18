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
            fpsLimit: 60,
            particles: {
                color: {
                    value: ["#10b981", "#22d3ee"],
                },
                links: {
                    color: "#10b981",
                    distance: 100,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: "bottom" as const,
                    enable: true,
                    outModes: { default: "out" as const },
                    random: true,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: { enable: true },
                    value: 120,
                },
                opacity: {
                    value: { min: 0.7, max: 1 },
                    animation: {
                        enable: true,
                        speed: 0.1,
                        sync: true,
                    },
                },
                // shape: "circle",
                // size: { value: { min: 0.2, max: 4 } },
                shape: {
                    type: "text" as const,
                    options: {
                        text: {
                            value: ["Kotlin",
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
                        radius: 200,
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