"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemo() {
  const images = [
    // Row 1
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 1
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 2
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 3
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 4
    "https://wallpapercave.com/wp/wp9944877.png",

    // Row 2 (custom images)
    "https://wallpapercave.com/wp/wp4937652.jpg", // col 1
    "https://wallpapercave.com/wp/wp2156334.jpg", // col 2
    "https://wallpapercave.com/wp/wp15188366.webp", // col 3
    "https://wallpapercave.com/wp/wp4292452.jpg", // col 4
    "https://wallpapercave.com/wp/wp4937652.jpg", // col 1 (repeat for animation)
    "https://wallpapercave.com/wp/wp9944877.png",
    // Row 3
    // col 2
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 3
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 4
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 1
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 2

    // Row 4
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 3
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 4
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 1
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 2
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 3

    // Row 5
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 4
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 1
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 2
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 3
    "https://wallpapercave.com/wp/wp6416150.jpg", // col 4
  ];
  return (
    <div
      className="w-full h-full px-2 sm:px-4 md:px-8 py-4 sm:py-6 rounded-2xl shadow-xl flex justify-center items-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(30,41,59,0.85) 60%, rgba(17,24,39,0.85) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <ThreeDMarquee images={images} />
    </div>
  );
}
