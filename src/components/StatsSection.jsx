import Image from "next/image";

export default function StatsSection() {
  const logos = [
    { src: "/Assets/Stats/Vector1.png", alt: "Logoipsum 1" },
    { src: "/Assets/Stats/Vector2.png", alt: "Logoipsum 2" },
    { src: "/Assets/Stats/Vector3.png", alt: "Logoipsum 3" },
    { src: "/Assets/Stats/Vector4.png", alt: "Logoipsum 4" },
    { src: "/Assets/Stats/Vector5.png", alt: "Logoipsum 5" },
  ];

  return (
    <section className="w-full bg-[#F5F5F6] py-8 sm:py-12 flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1240px] px-6 flex flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-4 md:gap-12 lg:gap-14 opacity-70 grayscale">
        
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              width={42} 
              height={42} 
              className="object-contain"
            />
            <span className="text-[#7F879E] font-bold text-2xl tracking-tight">Logoipsum</span>
          </div>
        ))}

      </div>
    </section>
  );
}
