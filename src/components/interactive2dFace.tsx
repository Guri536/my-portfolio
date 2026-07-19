import React, { useEffect, useRef } from "react";

const InteractiveFace2D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 600;
    canvas.height = 600;

    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = canvas.width;
    maskCanvas.height = canvas.height;
    const maskCtx = maskCanvas.getContext("2d");

    // Mouse tracking for subtle nudges
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 40, // Smaller radius for localized interactions
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const image = new Image();
    // Using the exact image file provided
    image.src = "/DSCF6146_final_transparent.png";
    // image.src = "/test1.png"; 

    image.onload = () => {
      // Draw image scaled to fit canvas
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      class Particle {
        x: number;
        y: number;
        baseX: number;
        baseY: number;
        distanceToMouse: number;

        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.baseX = x;
          this.baseY = y;
          this.distanceToMouse = 999;
        }

        draw() {
          if (!ctx) return;
          ctx.fillStyle = `rgb(150, 210, 255)`;

          ctx.beginPath();
          ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }

        update() {
          // Calculate a slow, continuous sine wave based on time and the particle's original position
          const time = Date.now() * 0.001;
          const driftX = Math.sin(time + this.baseX * 0.05) * 0.8;
          const driftY = Math.cos(time + this.baseY * 0.05) * 0.9;

          if (mouse.x != null && mouse.y != null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
              const forceDirectionX = dx / distance;
              const forceDirectionY = dy / distance;
              const force = (mouse.radius - distance) / mouse.radius;

              // Push particles away
              const directionX = forceDirectionX * force * 2;
              const directionY = forceDirectionY * force * 2;

              this.x -= directionX;
              this.y += directionY;
            } else {
              // Return to base position PLUS the idle drift
              if (this.x !== this.baseX) this.x -= (this.x - (this.baseX + driftX)) * 0.15;
              if (this.y !== this.baseY) this.y -= (this.y - (this.baseY + driftY)) * 0.15;
            }
          } else {
            // No mouse: smoothly glide back to base position PLUS the idle drift
            this.x -= (this.x - (this.baseX + driftX)) * 0.05;
            this.y -= (this.y - (this.baseY + driftY)) * 0.05;
          }
        }
      }

      let particlesArray: Particle[] = [];

      function downloadParticles() {
        // Strip out any complex class methods and just keep the raw coordinates
        const rawData = particlesArray.map(p => ({ x: p.x, y: p.y }));

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rawData));
        const downloadAnchorNode = document.createElement('a');

        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "particle-wireframe.json");
        document.body.appendChild(downloadAnchorNode);

        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      }

      async function initParticles() {
        try {
          // Load the precomputed coordinates
          const response = await fetch('/particle-wireframe.json');
          const coordinates = await response.json();

          // Rebuild your Particle objects
          particlesArray = coordinates.map(coord => new Particle(coord.x, coord.y));

          // Start your animation loop here
          animate();
        } catch (error) {
          console.error("Failed to load particle data:", error);
        }
      }

      initParticles()

      // const init = () => {
      //   particlesArray = [];
      //   const step = 5;
      //   for (let y = 0; y < canvas.height; y += step) {
      //     for (let x = 0; x < canvas.width; x += step) {
      //       const index = (y * canvas.width + x) * 4;
      //       const r = imageData.data[index];
      //       const g = imageData.data[index + 1];
      //       const b = imageData.data[index + 2];
      //       const alpha = imageData.data[index + 3];
      //       const brightness = (r + g + b) / 3;

      //       if (brightness <= 255 && alpha > 10) {

      //         let density = 0;
      //         for (let dy = -step; dy <= step; dy += step) {
      //           for (let dx = -step; dx <= step; dx += step) {
      //             if (dx === 0 && dy === 0) continue;

      //             const nx = x + dx;
      //             const ny = y + dy;

      //             if (nx >= 0 && nx < canvas.width && ny >= 0 && ny < canvas.height) {
      //               const neighborIndex = (ny * canvas.width + nx) * 4;

      //               if (imageData.data[neighborIndex + 3] > 10) {
      //                 density++;
      //               }
      //             }
      //           }
      //         }

      //         // 2. Apply jitter ONLY if surrounded by at least 5 other pixels (dense cluster)
      //         let jitterX = 0;
      //         let jitterY = 0;

      //         if (density >= 6) {
      //           if (Math.random() < 0.7) {
      //             continue;
      //           }

      //           jitterX = (Math.random() - 0.5) * 5;
      //           jitterY = (Math.random() - 0.5) * 5;
      //         }
      //         // Optional: You can also keep your original jitter for medium density
      //         else if (density >= 5) {
      //           jitterX = (Math.random() - 0.5) * 5;
      //           jitterY = (Math.random() - 0.5) * 5;
      //         }

      //         particlesArray.push(new Particle(x + jitterX, y + jitterY));
      //       }
      //     }
      //   }
      // };

      // Connects close nodes with lines to create the wireframe
      const connect = () => {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
          for (let b = a; b < particlesArray.length; b++) {
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Max line length. Should be slightly larger than the 'step' variable above
            if (distance < 10) {
              opacityValue = 1 - (distance / 15);
              ctx.strokeStyle = `rgba(210, 210, 240, ${opacityValue * 0.5})`; // Neon green wires
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (mouse.x != null && mouse.y != null) {
          // 1. Clear the off-screen canvas from the previous frame
          maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);

          // 2. Draw your image to the off-screen canvas with your desired alpha
          maskCtx.globalAlpha = 0.7;
          maskCtx.drawImage(image, 0, 0, maskCanvas.width, maskCanvas.height);

          // 3. Create a soft radial gradient (inner radius 0, outer radius 105)
          const gradient = maskCtx.createRadialGradient(
            mouse.x, mouse.y, 0,
            mouse.x, mouse.y, 155
          );
          // Fully visible at the center, fading to completely transparent at the edge
          gradient.addColorStop(0, "rgba(123, 120, 120, 1)");
          gradient.addColorStop(1, "rgba(230, 230, 230, 0)");

          // 4. Apply the gradient as an alpha mask using 'destination-in'
          maskCtx.globalCompositeOperation = "source-in";
          maskCtx.fillStyle = gradient;
          maskCtx.beginPath();
          maskCtx.arc(mouse.x, mouse.y, 155, 0, Math.PI * 2);
          maskCtx.fill();

          // Reset composite operation so the next frame draws the image normally first
          maskCtx.globalCompositeOperation = "overlay";

          // 5. Finally, draw the beautifully masked result onto your MAIN canvas
          ctx.drawImage(maskCanvas, 0, 0);
        }

        // Update physics and draw nodes over the top
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
        }

        // Draw the wireframe connections
        connect();

        requestAnimationFrame(animate);
      };
      animate();
    };

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      <canvas
        ref={canvasRef}
        className="cursor-crosshair w-full h-full object-contain"
        style={{
          maxWidth: "600px",
          maxHeight: "600px",
          // Adding a very faint drop shadow to the whole canvas to enhance the "glow"
          filter: "drop-shadow(0px 0px 8px rgba(16,185,129,0.15))"
        }}
      />
    </div>
  );
};

export default InteractiveFace2D;