import Image from "next/image";

const listItems = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community"
];

export default function GrowthSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* BG: yellow-bg.png - top left (Growth) */}
      <div className="absolute left-0 top-0 w-[45%] h-[50%] z-0 pointer-events-none">
        <Image 
          src="/yellow-bg.png" 
          fill
          alt="" 
          className="object-cover" 
          priority 
        />
      </div>
      
      {/* BG: Ellipse 8 - right side spanning full height */}
      <div className="absolute top-[20%] right-[0%] w-[55%] h-full z-0 pointer-events-none">
        <Image src="/Ellipse 8.png" alt="" fill className="object-contain" />
      </div>
      {/* BG: Ellipse 12 - bottom left */}
      <div className="absolute bottom-[-10%] -left-[5%] w-[600px] h-[600px] z-0 pointer-events-none">
        <Image src="/Assets/Manage-section/Ellipse 12.png" alt="" fill className="object-contain" />
      </div>

      {/* ===== GROWTH PART ===== */}
      <div className="relative z-[2] w-full max-w-[1240px] px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 py-16 sm:py-24">
        
        {/* Left Content */}
        <div className="flex-1 max-w-[540px] z-10">
          <h2 className="font-[var(--font-poppins)] text-[36px] sm:text-[42px] md:text-[44px] font-bold text-[#1A1D27] leading-[1.2]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="font-satoshi mt-6 text-[15px] sm:text-[16px] text-[#7F879E] leading-relaxed pr-0 md:pr-10">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>
          
          <div className="flex items-center gap-10 sm:gap-14 mt-10">
            <div className="flex flex-col">
              <span className="font-[var(--font-poppins)] text-[32px] sm:text-[38px] font-bold text-[#0055FF]">12K</span>
              <span className="font-satoshi text-[14px] sm:text-[15px] text-[#7F879E] mt-1">Students</span>
            </div>
            <div className="flex flex-col">
              <span className="font-[var(--font-poppins)] text-[32px] sm:text-[38px] font-bold text-[#0055FF]">70+</span>
              <span className="font-satoshi text-[14px] sm:text-[15px] text-[#7F879E] mt-1">Courses</span>
            </div>
            <div className="flex flex-col">
              <span className="font-[var(--font-poppins)] text-[32px] sm:text-[38px] font-bold text-[#0055FF]">16</span>
              <span className="font-satoshi text-[14px] sm:text-[15px] text-[#7F879E] mt-1">Creators</span>
            </div>
          </div>
        </div>

        {/* Right Composition */}
        <div className="flex-1 relative w-full h-[500px] sm:h-[px] flex justify-center items-end md:items-center mt-12 md:mt-0">
          
          {/* Background Card (Learn Figma) */}
          <div className="absolute left-[0%] md:left-[5%] lg:-left-[5%] top-[10%] md:top-[1%] w-[260px] sm:w-[370px] bg-white border border-[#E8E8EA] rounded-[24px] p-3.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] z-0 hidden sm:block">
            <div className="relative w-[341px] h-[196] aspect-[1.45] rounded-[20px] overflow-hidden">
              <Image src="/Assets/Skills-section/Frame1.png" alt="Learn Figma" fill className="object-cover" />
            </div>
            <div className="mt-3.5 px-1 pb-1">
              <h3 className="font-[var(--font-poppins)] text-[16px] font-bold text-[#1A1D27] leading-tight truncate">Learn Figma from Basic</h3>
              <p className="font-satoshi text-[11px] text-[#7F879E] mt-1">by <span className="text-[#0055FF] font-medium">purepearl studio</span></p>
              
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-1.5 bg-[#F5F5F6] px-2.5 py-1 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4B4C53" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 20V14M12 20V10M18 20V4"/>
                  </svg>
                  <span className="text-[10px] font-satoshi font-medium text-[#4B4C53]">Beginner</span>
                </div>
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map(num => (
                    <div key={num} className="w-[35px] h-[35px] rounded-full border-[2.5px] border-white overflow-hidden relative bg-gray-200">
                      <Image src={`/Assets/Skills-section/people${num}.png`} alt="Student" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-baseline gap-1 mt-4">
                <span className="font-[var(--font-poppins)] text-[18px] font-bold text-[#0055FF]">$25</span>
                <span className="font-satoshi text-[10px] text-[#7F879E]">/lifetime</span>
              </div>
            </div>
          </div>

          {/* Main Student Image */}
          <Image 
            src="/Image.png" 
            alt="Student" 
            width={1200} 
            height={800} 
            className="absolute bottom-[-30%] right-[-12%] z-10 w-[670px] max-w-[800px] drop-shadow-2xl" 
          />

          {/* Floating Progress Card with Spiral */}
          <div className="absolute right-[-5%] sm:right-[0%] lg:-right-[-6%] top-[45%] sm:top-[40%] z-20 w-[150px] sm:w-[220px] hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
            <Image 
              src="/Assets/Hero-section/Auto Layout Vertical progress.png" 
              alt="Learning Progress" 
              width={220} 
              height={100} 
              className="relative z-10 w-full h-auto shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] rounded-[12px]"
            />
            {/* Spiral Image */}
            <div className="absolute -top-[100%] -right-[15%] w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] z-30 pointer-events-none">
              <Image 
                src="/frame.png" 
                alt="Green Spiral" 
                width={200} 
                height={200} 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ===== MANAGE PART ===== */}
      <div className="relative z-[2] w-full max-w-[1240px] px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Left Composition (Images) */}
        <div className="flex-1 relative w-full h-[500px] sm:h-[650px] flex justify-center items-center">
          
          {/* Main Image */}
          <div className="relative top-[10%] z-10 w-[90%] max-w-[900px]">
            <Image 
              src="/Assets/Manage-section/Image.png" 
              alt="Manager" 
              width={1200} 
              height={800} 
              className="w-full h-auto drop-shadow-2xl" 
            />
          </div>

          {/* Revenue Card (Top Left) */}
          <div className="absolute left-[10%] sm:-left-[5%] lg:left-[10%] top-[15%] z-0 w-[140px] sm:w-[190px] hover:-translate-y-2 transition-transform duration-300">
            <Image 
              src="/Assets/Manage-section/revenue.png" 
              alt="Total Revenue" 
              width={200} 
              height={100} 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>

          {/* Year to Date Card (Bottom Left) */}
          <div className="absolute left-[2%] sm:left-[0%] lg:-left-[5%] top-[45%] sm:top-[48%] z-0 w-[110px] sm:w-[140px] hover:-translate-y-2 transition-transform duration-300">
            <Image 
              src="/Assets/Manage-section/due.png" 
              alt="Year to Date" 
              width={160} 
              height={160} 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>

          {/* Spiral (Right side of manager) */}
          <div className="absolute right-[12%] sm:right-[15%] lg:right-[10%] top-[30%] sm:top-[22%] z-30 w-[90px] h-[90px] sm:w-[230px] sm:h-[230px]">
            <Image 
              src="/Assets/Manage-section/Frame.png" 
              alt="Green Spiral" 
              width={240} 
              height={240} 
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>

          {/* Happy Students Card (Bottom Right) */}
          <div className="absolute right-[-2%] sm:right-[5%] lg:right-[5%] bottom-[15%] sm:bottom-[18%] z-20 w-[180px] sm:w-[250px] hover:-translate-y-2 transition-transform duration-300">
            <Image 
              src="/Assets/Manage-section/Auto Layout Vertical.png" 
              alt="Happy Students" 
              width={280} 
              height={130} 
              className="w-full h-auto shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] rounded-[20px]"
            />
          </div>

        </div>

        {/* Right Content */}
        <div className="flex-1 max-w-[500px] z-10 pl-0 md:pl-4">
          <h2 className="font-[var(--font-poppins)] text-[38px] sm:text-[44px] md:text-[48px] font-bold text-[#1A1D27] leading-[1.2]">
            Create & Manage<br />Courses Easily.
          </h2>
          <p className="font-satoshi mt-6 sm:mt-8 text-[15px] sm:text-[16px] text-[#7F879E] leading-relaxed">
            <strong className="text-[#1A1D27] font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>
          
          <ul className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-center gap-3.5">
                <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[#0055FF] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12.5L9.5 17L19 7" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-satoshi text-[15px] sm:text-[16px] text-[#1A1D27] font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
