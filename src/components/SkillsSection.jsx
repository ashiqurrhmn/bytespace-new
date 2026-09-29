import Image from "next/image";

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing",
  "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography",
  "Productivity", "Web Development", "Data Science", "Cooking", "+ More"
];

const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    price: 25,
    image: "/Assets/Skills-section/Frame1.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: "4.5",
    price: 25,
    image: "/Assets/Skills-section/Frame2.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: "4.5",
    price: 25,
    image: "/Assets/Skills-section/Frame3.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: "4.5",
    price: 25,
    image: "/Assets/Skills-section/Frame4.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: "4.5",
    price: 25,
    image: "/Assets/Skills-section/Frame5.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: "4.5",
    price: 25,
    image: "/Assets/Skills-section/Frame6.png",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59
  }
];

export default function SkillsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-24 flex flex-col items-center">
      <div className="w-full max-w-[1240px] px-6">
        
        {/* Heading Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-[var(--font-poppins)] text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1A1D27] leading-tight">
            Discover Your Passion,<br />
            Build Your Skills
          </h2>
          <p className="font-satoshi mt-4 sm:mt-6 text-sm sm:text-base text-[#7F879E] leading-relaxed max-w-3xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10 max-w-[1120px] mx-auto">
          {categories.map((category, index) => {
            const isFeatured = category === "Featured";
            const isMore = category === "+ More";
            return (
              <button
                key={index}
                className={`
                  px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-satoshi text-[13px] sm:text-[14px] font-medium transition-colors
                  ${isFeatured 
                    ? 'bg-[#D4FB20] text-[#4B4C53]' 
                    : isMore 
                      ? 'bg-transparent text-[#0055FF] font-semibold hover:bg-zinc-50' 
                      : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-zinc-200'
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Course Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white border border-[#E8E8EA] rounded-[28px] p-4 sm:p-4 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
              
              {/* Image Container */}
              <div className="relative w-[341px] h-[196] aspect-[1.45] rounded-[20px] overflow-hidden">
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  fill 
                  className="object-cover" 
                />
              </div>

              {/* Course Info */}
              <div className="mt-5 px-1 pb-1">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-[var(--font-poppins)] text-[20px] md:text-[20px] font-bold text-black leading-tight truncate">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5">
                    <span className="font-satoshi text-[#7F879E] text-[20px] font-medium">{course.rating}</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#D2D5DC" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
                
                <p className="font-satoshi text-[13px] sm:text-[12px] text-[#7F879E] mt-1.5">
                  by <span className="text-[#0055FF] font-medium">{course.author}</span>
                </p>

                {/* Badges and Avatars */}
                <div className="flex items-center gap-4 mt-5">
                  <div className="flex items-center gap-2 bg-[#F5F5F6] px-4 py-1.5 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B4C53" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 20V14M12 20V10M18 20V4"/>
                    </svg>
                    <span className="text-[13px] font-satoshi font-medium text-[#4B4C53]">Beginner</span>
                  </div>

                  <div className="flex items-center">
                    <div className="flex -space-x-2.5">
                      {[1, 2, 3, 4].map(num => (
                        <div key={num} className="w-[35px] h-[35px] rounded-full border-[2.5px] border-white overflow-hidden relative bg-gray-200">
                          <Image src={`/Assets/Skills-section/people${num}.png`} alt={`Student ${num}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="w-[35px] h-[35px] rounded-full bg-[#D4FB20] border-[2.5px] border-white flex items-center justify-center -ml-2.5 z-10">
                      <span className="text-[12px] font-bold text-black tracking-tight">26+</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mt-6">
                  <span className="font-[var(--font-poppins)] text-[24px] font-bold text-[#0055FF]">${course.price}</span>
                  <span className="font-satoshi text-[13px] text-[#7F879E]">/lifetime</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
