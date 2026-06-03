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
    <section className="w-full bg-[#F7F5F0] text-neutral-900 py-20 md:py-28 px-4 md:px-8 lg:px-[150px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="text-[#DD5903] uppercase tracking-widest font-sans font-semibold text-sm mb-3 flex items-center gap-2">
            {/* Sushi Roll SVG Icon */}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#DD5903]">
              <ellipse cx="12" cy="12" rx="10" ry="7" />
              <ellipse cx="12" cy="12" rx="7" ry="4.5" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
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
              <div className="px-6 pt-2 flex flex-col items-start flex-1">
                <span className="text-[#DD5903] uppercase tracking-wider font-sans font-semibold text-[13px] mb-2">
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
