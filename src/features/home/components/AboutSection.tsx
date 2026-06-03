import Image from "next/image";
import { Award, Flame, GlassWater, Globe, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section className="w-full bg-white text-neutral-900 py-16 md:py-24 px-4 md:px-8 lg:px-[150px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-20 md:gap-28">
        
        {/* --- PART 1: SPONSORS (Top horizontal bar) --- */}
        <div className="w-full border-b border-neutral-100 pb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
            
            {/* Sponsor 1 */}
            <div className="flex items-center gap-2 text-neutral-400 hover:text-neutral-950 transition-colors duration-300 cursor-pointer select-none">
              <Flame size={24} className="stroke-[1.5]" />
              <span className="font-sans text-sm md:text-base font-bold uppercase tracking-widest">SushiZen</span>
            </div>

            {/* Sponsor 2 */}
            <div className="flex items-center gap-2 text-neutral-400 hover:text-neutral-950 transition-colors duration-300 cursor-pointer select-none">
              <Globe size={24} className="stroke-[1.5]" />
              <span className="font-sans text-sm md:text-base font-bold uppercase tracking-widest">Tokyo Foods</span>
            </div>

            {/* Sponsor 3 */}
            <div className="flex items-center gap-2 text-neutral-400 hover:text-neutral-950 transition-colors duration-300 cursor-pointer select-none">
              <GlassWater size={24} className="stroke-[1.5]" />
              <span className="font-sans text-sm md:text-base font-bold uppercase tracking-widest">Kyoto Sake</span>
            </div>

            {/* Sponsor 4 */}
            <div className="flex items-center gap-2 text-neutral-400 hover:text-neutral-950 transition-colors duration-300 cursor-pointer select-none">
              <Sparkles size={24} className="stroke-[1.5]" />
              <span className="font-sans text-sm md:text-base font-bold uppercase tracking-widest">RiceMaster</span>
            </div>

            {/* Sponsor 5 */}
            <div className="flex items-center gap-2 text-neutral-400 hover:text-neutral-950 transition-colors duration-300 cursor-pointer select-none">
              <Award size={24} className="stroke-[1.5]" />
              <span className="font-sans text-sm md:text-base font-bold uppercase tracking-widest">Washoku Club</span>
            </div>

          </div>
        </div>

        {/* --- PART 2: ABOUT STORY (2-column layout) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Premium Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 z-10">
            <Image
              src="/images/img3.png"
              alt="Artisanal sushi preparation"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Column: Story & Information */}
          <div className="flex flex-col items-start text-left max-w-xl">
            <span className="text-[#DD5903] uppercase tracking-widest font-sans font-semibold text-sm mb-3">
              Our Story
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight font-serif text-neutral-950 mb-6">
              Crafting exceptional sushi experiences since 1998
            </h2>
            
            <p className="text-neutral-600 font-sans text-base md:text-lg leading-relaxed mb-6">
              At our core, we believe that dining is an art form. Every slice of fresh fish, every seasoned grain of rice, and every delicate roll we create is a testament to Japanese culinary traditions combined with modern innovation.
            </p>

            <p className="text-neutral-500 font-sans text-sm md:text-base leading-relaxed mb-8">
              We carefully source our ingredients daily from local fish markets and trusted suppliers. Under the guidance of our top-class chefs, each dish is made to order to bring you true recipes in a harmonious, vibrant atmosphere.
            </p>

            <button className="border border-[#DD5903] text-[#DD5903] hover:bg-[#DD5903] hover:text-white px-8 py-4 text-sm font-semibold uppercase transition-all duration-300 font-sans tracking-wider hover:shadow-lg">
              Explore Our Menu
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
