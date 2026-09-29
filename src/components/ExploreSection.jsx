import Image from "next/image";

const categories = [
  { name: "Design", icon: "/Assets/Explore-section/Frame 1.png" },
  { name: "Development", icon: "/Assets/Explore-section/Frame 2.png" },
  { name: "IT & Software", icon: "/Assets/Explore-section/Frame 3.png" },
  { name: "Business", icon: "/Assets/Explore-section/Frame 4.png" },
  { name: "Marketing", icon: "/Assets/Explore-section/Frame 5.png" },
  { name: "Photography", icon: "/Assets/Explore-section/Frame 6.png" },
];

export default function ExploreSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1240px] px-6">
        
        {/* Heading Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-[var(--font-poppins)] text-[28px] sm:text-4xl md:text-[38px] font-bold text-[#1A1D27] leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-satoshi mt-4 sm:mt-6 text-[14px] sm:text-[15px] text-[#7F879E] leading-relaxed max-w-4xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#CED0D3] rounded-[24px] flex flex-col items-center justify-center py-8 px-4 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative w-[62px] h-[62px] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-[#D4FB20] rounded-full"></div>
                <Image 
                  src={category.icon} 
                  alt={category.name} 
                  width={55} 
                  height={55} 
                  className="object-contain relative z-10"
                />
              </div>
              <span className="font-satoshi font-medium text-[15px] sm:text-[16px] text-[#1A1D27] text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
