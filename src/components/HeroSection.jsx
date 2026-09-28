import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      {/* ── Text Content ── */}
      <div className="flex flex-col items-center text-center px-4 max-w-4xl pt-4 sm:pt-8 md:pt-8">
        <h1 className="font-[var(--font-poppins)] text-[28px] sm:text-4xl md:text-5xl lg:text-[72px] font-bold text-white leading-[1.15] tracking-tight">
          Get Access to Hundreds <br className="hidden sm:block" />
          Courses Available
        </h1>
        <p className="font-satoshi mt-4 sm:mt-6 md:mt-8 text-[13px] sm:text-base md:text-lg text-white/80 font-normal leading-relaxed px-2">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mt-5 sm:mt-8 md:mt-10 flex items-center gap-3 sm:gap-4 w-full max-w-[580px]">
          <div className="flex-1 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-5 py-3 sm:py-3.5 shadow-lg">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 sm:w-5 sm:h-5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="flex-1 bg-transparent outline-none text-zinc-800 font-satoshi text-sm sm:text-[15px] placeholder:text-zinc-400 ml-3 min-w-0"
            />
          </div>
          <button className="bg-[#D4FB20] text-zinc-900 font-satoshi font-semibold text-sm sm:text-[15px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-[#c8ec1a] transition-colors whitespace-nowrap shadow-lg">
            Search
          </button>
        </div>
      </div>

      {/* ── Hero Composition ── */}
      <div
        className="relative w-full mx-auto mt-6 sm:mt-10 md:mt-14 flex justify-center -mb-4 sm:-mb-8 md:-mb-20 lg:-mb-56"
        style={{ height: "clamp(320px, 60vw, 700px)" }}
      >
        {/* Lime green shape behind student */}
        <Image
          src="/Assets/Hero-section/Ellipse 7.png"
          alt="Green shape"
          width={1200}
          height={950}
          className="absolute left-1/2 -translate-x-1/2 top-[2%] w-[95vw] max-w-[500px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] z-[1]"
        />

        {/* Student image */}
        <Image
          src="/Assets/Hero-section/Image.png"
          alt="Student with laptop"
          width={800}
          height={800}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 sm:bottom-4 md:bottom-16 lg:bottom-56 z-[10] w-[300px] sm:w-[380px] md:w-[480px] lg:w-[780px] object-contain"
          priority
        />

        {/* ── 3D Shapes ── */}

        {/* Green spiral – top left */}
        <Image
          src="/Assets/Hero-section/Frame.png"
          alt="Green spiral"
          width={260}
          height={260}
          className="hidden sm:block absolute -left-[1%] -top-[40%] z-[0] sm:w-[120px] md:w-[180px] lg:w-[260px]"
        />

        {/* White zigzag line – left */}
        <Image
          src="/Assets/Hero-section/Frame white.png"
          alt="White zigzag"
          width={100}
          height={100}
          className="hidden md:block absolute left-[20%] top-[-10%] z-[0] md:w-[80px] lg:w-[200px]"
        />

        {/* White O ring – bottom left */}
        <Image
          src="/Assets/Hero-section/Cone round.png"
          alt="White ring"
          width={400}
          height={400}
          className="absolute left-[2%] sm:left-[5%] md:left-[8%] lg:left-[13%] bottom-[10%] sm:bottom-[20%] md:bottom-[25%] lg:bottom-[35%] z-[5] w-[50px] sm:w-[80px] md:w-[120px] lg:w-[300px]"
        />

        {/* Half-cylinder – top right */}
        <Image
          src="/Assets/Hero-section/Cone1.png"
          alt="Half cylinder"
          width={200}
          height={280}
          className="hidden sm:block absolute -right-[1%] -top-[50%] z-[0] sm:w-[100px] md:w-[140px] lg:w-[200px]"
        />

        {/* White triangle – right */}
        <Image
          src="/Assets/Hero-section/Cone.png"
          alt="Triangle"
          width={300}
          height={300}
          className="hidden md:block absolute right-[20%] md:right-[18%] lg:right-[15%] top-[-15%] z-[2] md:w-[40px] lg:w-[220px]"
        />

        {/* White squiggle – bottom right */}
        <Image
          src="/Assets/Hero-section/Frame1.png"
          alt="White squiggle"
          width={350}
          height={140}
          className="absolute right-[2%] sm:right-[5%] md:right-[8%] lg:right-[11.6%] bottom-[10%] sm:bottom-[20%] md:bottom-[28%] lg:bottom-[38%] z-[0] w-[50px] sm:w-[70px] md:w-[100px] lg:w-[300px]"
        />

        {/* ── Floating Info Cards ── */}

        {/* UI/UX Design card */}
        <Image
          src="/Assets/Hero-section/Auto Layout Vertical (1).png"
          alt="UI/UX Design – 200 Courses · 1000+ Students"
          width={200}
          height={70}
          className="absolute left-[3%] sm:left-[10%] md:left-[15%] lg:left-[30%] top-[20%] sm:top-[15%] md:top-[18%] lg:top-[12%] z-[20] w-[100px] sm:w-[130px] md:w-[160px] lg:w-[200px] drop-shadow-xl hover:-translate-y-1 transition-transform duration-300"
        />

        {/* Learning Progress 55% card */}
        <Image
          src="/Assets/Hero-section/Auto Layout Vertical progress.png"
          alt="Learning Progress 55%"
          width={300}
          height={110}
          className="absolute right-[3%] sm:right-[8%] md:right-[12%] lg:right-[32%] top-[12%] sm:top-[10%] md:top-[15%] lg:top-[10%] z-[20] w-[100px] sm:w-[130px] md:w-[160px] lg:w-[250px] drop-shadow-xl hover:-translate-y-1 transition-transform duration-300"
        />

        {/* Happy Students card */}
        <Image
          src="/Assets/Hero-section/Auto Layout Vertical.png"
          alt="Happy Students – 4.5 (240) ⭐ – 2K+"
          width={250}
          height={90}
          className="absolute left-[3%] sm:left-[8%] md:left-[12%] lg:left-[29%] bottom-[15%] sm:bottom-[25%] md:bottom-[30%] lg:bottom-[48%] z-[20] w-[110px] sm:w-[140px] md:w-[170px] lg:w-[220px] drop-shadow-xl hover:-translate-y-1 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
