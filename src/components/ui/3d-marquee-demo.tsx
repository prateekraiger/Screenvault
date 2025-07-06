"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemo() {
  const images = [
    "https://wallpapercave.com/wp/wp11390637.jpg",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://wallpapercave.com/wp/wp9944877.png",
    "https://wallpapercave.com/wp/wp4937652.jpg",
    "https://wallpapercave.com/wp/wp2156334.jpg",
    "https://wallpapercave.com/wp/wp15188366.webp",
    "https://wallpapercave.com/wp/wp4292452.jpg",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://wallpapercave.com/wp/wp6416150.jpg",
    "https://wallpapercave.com/wp/wp6416150.jpg",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "",
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
