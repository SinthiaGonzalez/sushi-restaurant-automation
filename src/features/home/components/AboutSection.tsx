import Image from "next/image";

const SPONSORS = [
  { name: "Sushiko", src: "/images/sushiko-logo-removebg-preview.png" },
  { name: "Globenexus", src: "/images/globenexus-logo-removebg-preview.png" },
  { name: "Sushisymetry", src: "/images/sushisymetry-logo-removebg-preview.png" },
  { name: "Sushiroll", src: "/images/sushiroll-logo-removebg-preview.png" },
  { name: "Sushihome", src: "/images/sushihome-logo-removebg-preview.png" },
];

export function AboutSection() {
  return (
    <section className="relative z-10 w-full bg-white text-neutral-900 py-16 md:py-24 px-4 md:px-8 lg:px-[150px] overflow-hidden md:-mt-60 shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-20 md:gap-28">

        {/* --- PART 1: SPONSORS (Top horizontal bar) --- */}
        <div className="w-full mt-[70px]">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">

            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="relative w-[150px] h-[60px] cursor-pointer select-none transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={sponsor.src}
                  alt={`${sponsor.name} Logo`}
                  fill
                  className="object-contain filter grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  sizes="150px"
                />
              </div>
            ))}

          </div>
        </div>

        {/* --- PART 2: ABOUT STORY (2-column layout) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Premium Image */}
          <div className="relative w-full aspect-[4/3] z-10 drop-shadow-[0_30px_50px_rgba(0,0,0,0.60)]">
            <Image
              src="/images/sushiplato2.png"
              alt="Artisanal sushi preparation"
              fill
              className="object-contain transition-transform duration-700 hover:scale-105"
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
