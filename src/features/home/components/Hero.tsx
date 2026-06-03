import Image from "next/image";
import { ChefHat, Leaf, UtensilsCrossed } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto min-h-screen flex flex-col justify-between items-center px-4 md:px-8 lg:px-[150px] pt-32 pb-16">
      
      {/* --- BACKGROUND DECORATION (Realistic bottom-left corner leaf decoration) --- */}
      <div className="absolute left-0 top-100 w-[280px] h-[420px] opacity-35 pointer-events-none z-0 select-none">
        <Image 
          src="/images/img1.png" 
          alt="Bamboo Leaves Left" 
          fill 
          className="object-contain object-bottom-left scale-x-[-1]" 
        />
      </div>

      {/* --- BACKGROUND DECORATION (Realistic top-right corner leaf decoration) --- */}
      <div className="absolute right-0 top-36 w-[240px] h-[360px] opacity-30 pointer-events-none z-0 select-none">
        <Image 
          src="/images/img1.png" 
          alt="Bamboo Leaves Right" 
          fill 
          className="object-contain object-top-right rotate-[360deg]" 
        />
      </div>

      {/* --- MAIN CENTERED CONTENT (Text, Button, and Image stacked vertically) --- */}
      <div className="relative z-30 w-full flex flex-col items-center text-center ">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal lg:leading-[80px] font-serif text-white max-w-[800px]">
          Delicious food &<br />
          wonderful eating<br />
          experience
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
        <div className="relative w-full max-w-[550px] aspect-[4/5] sm:aspect-square md:aspect-[4/3] mt-12 rounded-lg overflow-hidden shadow-2xl border border-white/10 z-20">
          <Image 
            src="/images/ramen-bowl.png" 
            alt="Delicious Ramen Bowl" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
      </div>

      {/* --- BOTTOM BADGES BAR (Flows naturally below the content/image) --- */}
      <div className="relative z-30 mt-16 w-full flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24">
        
        {/* Badge 1 */}
        <div className="flex items-center gap-4">
          <div className="text-[#DD5903]">
            <Leaf size={32} strokeWidth={1.5} />
          </div>
          <span className="text-white text-xl lg:text-2xl font-serif">Fresh food/meal</span>
        </div>

        {/* Badge 2 */}
        <div className="flex items-center gap-4">
          <div className="text-[#DD5903]">
            <UtensilsCrossed size={32} strokeWidth={1.5} />
          </div>
          <span className="text-white text-xl lg:text-2xl font-serif">True recipes</span>
        </div>

        {/* Badge 3 */}
        <div className="flex items-center gap-4">
          <div className="text-[#DD5903]">
            <ChefHat size={32} strokeWidth={1.5} />
          </div>
          <span className="text-white text-xl lg:text-2xl font-serif">Top class chef's</span>
        </div>

      </div>
    </section>
  );
}
