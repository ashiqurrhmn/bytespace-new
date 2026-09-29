import Image from "next/image";

export default function DiscoverSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      title: "Enthusiastic Learner",
      image: "/Assets/Discover-section/people.png",
      text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
    },
    {
      name: "James L.",
      title: "Lifelong Learner",
      image: "/Assets/Discover-section/people 2.png",
      text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
    },
    {
      name: "Alex B.",
      title: "Inspired Creator",
      image: "/Assets/Discover-section/People 3.png",
      text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
    }
  ];

  return (
    <section className="relative w-full py-20 sm:py-32 border-b border-[#CED0D3] overflow-hidden bg-white">
      {/* Background Ellipses */}
      
      {/* Top Center Background */}
      <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] z-0 pointer-events-none">
        <Image src="/Assets/Discover-section/Ellipse 12.png" alt="" fill className="object-cover" />
      </div>

      {/* Right Center Background */}
      <div className="absolute top-[0%] right-[-1%] w-[600px] h-[600px] z-0 pointer-events-none">
        <Image src="/Assets/Discover-section/Ellipse 11.png" alt="" fill className="object-cover" />
      </div>

      {/* Left Bottom Background */}
      <div className="absolute bottom-[0%] left-[0%] w-[600px] h-[600px] z-0 pointer-events-none">
        <Image src="/Assets/Discover-section/Ellipse 8.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] px-6 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 mb-16 sm:mb-20">
          <div className="flex-1">
            <h2 className="font-[var(--font-poppins)] text-[38px] sm:text-[44px] md:text-[50px] font-bold text-[#1A1D27] leading-[1.15]">
              Discover What Our<br />Community Is Saying
            </h2>
          </div>
          <div className="flex-1">
            <p className="font-satoshi text-[15px] sm:text-[16px] text-[#7F879E] leading-relaxed md:pt-4 max-w-[550px]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 sm:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full z-10 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden mb-6 relative">
                <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
              </div>
              <h3 className="font-[var(--font-poppins)] text-[20px] font-bold text-[#1A1D27] mb-1">
                {testimonial.name}
              </h3>
              <p className="font-satoshi text-[15px] font-medium text-[#0055FF] mb-8">
                {testimonial.title}
              </p>
              <p className="font-satoshi text-[15px] text-[#7F879E] leading-relaxed flex-grow">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
