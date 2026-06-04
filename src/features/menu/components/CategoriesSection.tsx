import Image from "next/image";

const CATEGORIES = [
  {
    tag: "quality starter",
    title: "soup & ramen",
    src: "/images/soup-ramen.png",
  },
  {
    tag: "mid-quarter",
    title: "sushi & sashimi",
    src: "/images/sushi-sashimi.png",
  },
  {
    tag: "heavy dish",
    title: "Meat &dishes",
    src: "/images/meet-dishes.png",
  },
];

export function CategoriesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-neutral-900 pt-20 pb-32 md:pt-28 md:pb-44 px-4 md:px-8 lg:px-[150px] overflow-hidden relative">
      {/* Decorative Background Sushi Rolls (Gray, centered cluster layered behind) */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-end justify-center -space-x-8 md:-space-x-12 z-0 pointer-events-none select-none opacity-[0.06] grayscale w-full max-w-xl h-48 overflow-visible">
        <div className="relative w-28 h-28 md:w-36 md:h-36 rotate-[15deg] transform translate-y-4">
          <Image
            src="/images/arroz-roll-sushi.png"
            alt=""
            fill
            className="object-contain"
            sizes="(max-w-md) 112px, 144px"
          />
        </div>
        <div className="relative w-36 h-36 md:w-44 md:h-44 -rotate-[20deg] z-10">
          <Image
            src="/images/roll-huevos-alga-sushi.png"
            alt=""
            fill
            className="object-contain"
            sizes="(max-w-md) 144px, 176px"
          />
        </div>
        <div className="relative w-24 h-24 md:w-32 md:h-32 rotate-[45deg] transform translate-y-6">
          <Image
            src="/images/roll-icono-sushi.png"
            alt=""
            fill
            className="object-contain"
            sizes="(max-w-md) 96px, 128px"
          />
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="text-[#DD5903] uppercase tracking-widest font-sans font-semibold text-sm mb-3 flex items-center gap-2">
            {/* Custom Sushi Icon from user */}
            <div className="relative w-[18px] h-[18px] shrink-0">
              <Image
                src="/images/icon-sushi.png"
                alt=""
                fill
                className="object-contain select-none"
                style={{
                  filter: "brightness(0) saturate(100%) invert(38%) sepia(82%) saturate(3474%) hue-rotate(10deg) brightness(92%) contrast(100%)"
                }}
                sizes="18px"
              />
            </div>
            popular category
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-normal leading-tight font-serif text-neutral-950">
            Immerse yourself in an<br />asian experience.
          </h2>
        </div>

        {/* --- CARDS CONTAINER (Flexbox Responsive Layout with Cropped Plates) --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 justify-between items-stretch w-full mt-20">
          
          {CATEGORIES.map((category) => (
            <div 
              key={category.title}
              className="group cursor-pointer bg-white overflow-hidden pb-8 shadow-sm border border-neutral-200/40 hover:shadow-md hover:scale-[1.01] transition-all duration-300 w-full lg:w-[calc(33.333%-1.7rem)] flex flex-col pt-24 relative"
            >
              {/* Floating Image (With drop-shadow, cut in half by card's overflow-hidden) */}
              <div className="absolute -top-[80px] left-1/2 -translate-x-1/2 w-[160px] h-[160px] z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]">
                <Image
                  src={category.src}
                  alt={category.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  sizes="160px"
                />
              </div>

              {/* Bottom Content */}
              <div className="px-6 pt-2 flex flex-col items-center flex-1">
                <span className="text-[#DD5903] uppercase tracking-wider font-sans font-semibold text-[10px] mb-2">
                  {category.tag}
                </span>
                
                <h3 className="text-neutral-900 font-serif font-semibold text-xl sm:text-2xl mb-6">
                  {category.title}
                </h3>
                
                {/* Underline and font weight increase on group hover */}
                <span className="mt-auto text-neutral-800 font-sans font-semibold text-sm uppercase tracking-wider transition-all duration-300 group-hover:underline group-hover:font-black group-hover:text-neutral-950">
                  our menu
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
