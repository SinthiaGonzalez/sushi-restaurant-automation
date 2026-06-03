import Image from "next/image";
import { ChefHat, Leaf, UtensilsCrossed } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto min-h-screen flex flex-col justify-between items-center px-4 md:px-8 lg:px-[150px] pt-15 pb-16">

      {/* --- BACKGROUND DECORATION (Realistic bottom-left corner leaf decoration) --- */}
      <div className="absolute left-0 top-100 w-[280px] h-[420px] opacity-35 pointer-events-none z-0 select-none">
        <Image
          src="/images/plantas-decorativas.png"
          alt="Bamboo Leaves Left"
          fill
          className="object-contain object-bottom-left scale-x-[-1]"
        />
      </div>

      {/* --- BACKGROUND DECORATION (Realistic top-right corner leaf decoration) --- */}
      <div className="absolute right-0 top-36 w-[240px] h-[360px] opacity-30 pointer-events-none z-0 select-none">
        <Image
          src="/images/plantas-decorativas.png"
          alt="Bamboo Leaves Right"
          fill
          className="object-contain object-top-right rotate-[360deg]"
        />
      </div>

      {/* --- MAIN CENTERED CONTENT (Text, Button, and Image stacked vertically) --- */}
      <div className="relative z-30 w-full flex flex-col items-center text-center ">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal lg:leading-[80px] font-serif text-white max-w-[2000px]">
          Delicious food &<br />
          wonderful eating experience
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg lg:text-[20px] text-white/60 max-w-[500px] leading-[28px] font-sans">
          We serve food, harmony, & laughter since 1998
        </p>

        {/* CTA Button */}
        <button className="mt-8 bg-[#DD5903] hover:bg-[#DD5903]/90 text-white px-[36px] py-[18px] text-[16px] font-semibold uppercase transition-colors font-sans tracking-wider">
          Book a table
        </button>

        {/* Featured Image - Stacks vertically underneath the button */}
        <div className="relative w-full max-w-[750px] aspect-[4/5] sm:aspect-square md:aspect-[4/3] -mt-12 z-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <Image
            src="/images/sushi-home.png" 
            alt="Delicious Ramen Bowl"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
