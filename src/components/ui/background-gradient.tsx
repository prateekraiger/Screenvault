import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div
        className={cn(
        "relative p-[4px] group transition-all duration-300",
        containerClassName
        )}
    >
      {/* Vibrant animated gradient background */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-80 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops)),radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      {/* Subtle dark overlay for contrast */}
      <div className="absolute inset-0 rounded-3xl z-[2] bg-black/40 group-hover:bg-black/30 transition duration-300 pointer-events-none" />
      {/* Glowing border on hover */}
      <div className="absolute inset-0 rounded-3xl z-[3] border-2 border-transparent group-hover:border-cyan-400 group-hover:shadow-[0_0_24px_4px_rgba(34,211,238,0.25)] transition-all duration-300 pointer-events-none" />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
