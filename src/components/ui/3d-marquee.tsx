"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Ensure exactly 6 images per column for consistent layout
  const imagesPerColumn = 6;
  const totalColumns = 4;
  const totalImagesNeeded = imagesPerColumn * totalColumns;

  // Create extended images array by cycling through original images
  const extendedImages: string[] = [];
  for (let i = 0; i < totalImagesNeeded; i++) {
    extendedImages.push(images[i % images.length]);
  }

  // Split into exactly 4 columns with exactly 6 images each
  const chunks = Array.from({ length: totalColumns }, (_, colIndex) => {
    const start = colIndex * imagesPerColumn;
    return extendedImages.slice(start, start + imagesPerColumn);
  });

  return (
    <motion.div
      className={cn(
        "w-full max-w-[1800px] mx-auto h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[1000px] rounded-3xl shadow-2xl overflow-hidden",
        className
      )}
      animate={{
        y: [0, -5, 0],
        scale: [1, 1.01, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex w-full h-full items-center justify-center">
        <motion.div 
          className="w-full h-full flex items-stretch justify-center"
          animate={{
            rotateY: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="grid w-full h-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{
                  y: colIndex % 2 === 0 ? [0, -80, 0] : [0, 80, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: colIndex * 0.5,
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-stretch gap-3 sm:gap-4 h-full justify-start"
                style={{
                  paddingTop: `${colIndex * 15}px`,
                }}
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative group" key={imageIndex + image}>
                    <GridLineHorizontal className="-top-4" offset="20px" />

                    <motion.div
                      className="relative"
                      animate={{
                        rotateY: [0, 2, 0, -2, 0],
                        rotateX: [0, 1, 0, -1, 0],
                      }}
                      transition={{
                        duration: 6 + imageIndex * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (colIndex * 0.5) + (imageIndex * 0.2),
                      }}
                      whileHover={{
                        y: -15,
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: -2,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Enhanced shadow */}
                      <div className="absolute inset-0 bg-black/30 rounded-lg blur-md translate-y-2 scale-95" />

                      {/* Main image with better effects */}
                      <motion.img
                        key={imageIndex + image}
                        src={image}
                        alt={`Image ${imageIndex + 1}`}
                        className="w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] rounded-lg object-cover ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 relative z-10"
                        style={{
                          boxShadow:
                            "0 10px 30px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.3)",
                        }}
                        animate={{
                          filter: [
                            "brightness(1) contrast(1) saturate(1)",
                            "brightness(1.08) contrast(1.08) saturate(1.08)",
                            "brightness(1) contrast(1) saturate(1)",
                          ],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: (colIndex * 0.8) + (imageIndex * 0.15),
                        }}
                      />

                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                      {/* Subtle glow effect */}
                      <div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"
                        style={{
                          background:
                            "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 30%, rgba(255,255,255,0.1) 100%)",
                          filter: "blur(1px)",
                        }}
                      />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};
