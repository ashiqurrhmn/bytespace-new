import Image from "next/image";

export default function CreatorSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden">

      {/* Decorative 3D Elements */}
      {/* White Spiral - top left */}
      <div className="absolute top-[5%] left-[10%] w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] z-[1] pointer-events-none">
        <Image src="/Assets/Hero-section/Frame white.png" alt="" width={140} height={140} className="w-full h-full object-contain drop-shadow-2xl" />
      </div>

      {/* Green Spiral - top left (smaller, below white) */}
      <div className="absolute -top-[10%] -left-[2%] w-[70px] h-[70px] sm:w-[250px] sm:h-[250px] z-[1] pointer-events-none">
        <Image src="/Assets/Hero-section/Frame.png" alt="" width={250} height={250} className="w-full h-full object-contain drop-shadow-2xl" />
      </div>

      {/* Cone Round (ring/donut) - bottom left */}
      <div className="absolute -bottom-[20%] left-[5%] w-[200px] h-[80px] sm:w-[450px] sm:h-[450px] z-[1] pointer-events-none">
        <Image src="/Assets/Hero-section/YellowConeRound.png" alt="" width={450} height={450} className="w-full h-full object-contain drop-shadow-2xl" />
      </div>

      {/* Yellow Cone/Triangle - right center */}
      <div className="absolute top-[10%] right-[18%] w-[50px] h-[50px] sm:w-[200px] sm:h-[200px] z-[1] pointer-events-none">
        <Image src="/Assets/Hero-section/YellowCone.png" alt="" width={200} height={200} className="w-full h-full object-contain drop-shadow-2xl" />
      </div>

      {/* White Cone - top right */}
      <div className="absolute top-[40%] right-[93%] w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] z-[1] pointer-events-none rotate-90">
        <Image src="/Assets/Hero-section/Cone.png" alt="" width={180} height={180} className="w-full h-full object-contain drop-shadow-2xl" />
      </div>

      {/* Green Spiral - bottom right */}
      <div className="absolute -bottom-[20%] right-[10%] w-[100px] h-[100px] sm:w-[350px] sm:h-[350px] z-[1] pointer-events-none rotate-[140deg]">
        <Image src="/Assets/Manage-section/Frame.png" alt="" width={350} height={350} className="w-full h-full object-contain drop-shadow-2xl" />
      </div>

      <div className="absolute bottom-[30%] -right-[4%] w-[100px] h-[100px] sm:w-[350px] sm:h-[350px] z-[1] pointer-events-none">
        <Image src="/Assets/Hero-section/Conewhite.png" alt="" width={350} height={350} className="w-full h-full object-contain drop-shadow-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[850px] mx-auto px-6 text-center">
        <h2 className="font-[var(--font-poppins)] text-[30px] sm:text-[38px] md:text-[44px] font-bold text-white leading-[1.2]">
          Unlock Your Potential as a <br/> Creator with ByteSpace
        </h2>
        <p className="font-satoshi mt-6 sm:mt-8 text-[14px] sm:text-[15px] text-white/80 leading-relaxed max-w-[800px] mx-auto">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button className="mt-8 sm:mt-10 bg-[#D4FB20] text-[#1A1D27] font-satoshi font-bold text-[15px] px-8 py-3.5 rounded-full hover:bg-[#c5ec15] transition-colors duration-300 cursor-pointer shadow-lg shadow-black/10">
          Join as Creator
        </button>
      </div>

    </section>
  );
}
