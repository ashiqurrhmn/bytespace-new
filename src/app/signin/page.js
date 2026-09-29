import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#003BE2] font-satoshi relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.08]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />
      
      {/* Container to restrict max width if needed, or just let the columns take the space */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between min-h-screen">
        
      {/* Left Side - Visuals & Text */}
      <div className="flex-1 w-full flex flex-col px-6 sm:px-16 lg:px-24 xl:px-32 relative z-10 pt-20 lg:pt-10 pb-12 h-full lg:justify-center">
        
        {/* Logo */}
        <Link href="/" className="mb-12 lg:mb-10">
          <Image src="/Assets/SignIn/Vector.png" alt="ByteSpace" width={40} height={40} className="w-auto h-10" />
        </Link>

        {/* Text Content */}
        <div className="max-w-[450px]">
          <h1 className="font-[var(--font-poppins)] text-[28px] sm:text-[32px] font-bold text-white mb-4 leading-[1.2]">
            Sign in with ease
          </h1>
          <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        {/* Visual Composition */}
        <div className="relative w-full max-w-[550px] h-[550px] mt-auto hidden lg:block">
          
          {/* Card 1 (Back) */}
          <div className="absolute top-[10%] left-20 w-[75%] z-[1] shadow-2xl rounded-2xl overflow-hidden">
             <Image src="/Assets/SignIn/Course_Card_2.png" alt="Course" width={400} height={300} className="w-full h-auto" />
          </div>
          
          {/* Card 2 (Front) */}
          <div className="absolute top-[-6%] left-[35%] w-[75%] z-[2] shadow-2xl rounded-2xl overflow-hidden">
             <Image src="/Assets/SignIn/Course_Card_1.png" alt="Course" width={400} height={300} className="w-full h-auto" />
          </div>

          {/* Happy Students Badge */}
          <div className="absolute bottom-[10%] left-[60%] w-[220px] z-[3] shadow-2xl rounded-[16px] overflow-hidden">
             <Image src="/Assets/SignIn/Auto Layout Vertical.png" alt="Happy Students" width={300} height={100} className="w-full h-auto" />
          </div>

          {/* 3D Elements */}
          <div className="absolute top-[70%] left-[10%] w-[150px] h-[150px] z-[4]">
            <Image src="/Assets/SignIn/Cone (1).png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute bottom-[75%] left-[15%] w-[150px] h-[150px] z-[4]">
            <Image src="/Assets/SignIn/Cone.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute bottom-[15%] right-[-12%] w-[200px] h-[200px] z-[4]">
            <Image src="/Assets/SignIn/Frame.png" alt="" fill className="object-contain" />
          </div>
        </div>

      </div>

      {/* Right Side - Form Card */}
      <div className="flex-1 w-full flex items-center justify-center lg:justify-end px-6 sm:px-16 lg:pr-24 xl:pr-32 relative z-10 py-12">
        <div className="w-full max-w-[500px] bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl">
          
          <span className="block text-[14px] font-medium text-[#0055FF] mb-2">Sign In</span>
          <h2 className="font-[var(--font-poppins)] text-[32px] sm:text-[38px] font-bold text-[#1A1D27] mb-10">
            Welcome Back
          </h2>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[#4B4C53]">Email</label>
              <input 
                type="email" 
                placeholder="designer@example.com" 
                className="w-full h-[52px] px-5 rounded-[12px] border border-[#E8E8EA] text-[#1A1D27] placeholder:text-[#A0A4AB] text-[15px] focus:outline-none focus:border-[#0055FF] transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-[#4B4C53]">Password</label>
              <input 
                type="password" 
                placeholder="********" 
                className="w-full h-[52px] px-5 rounded-[12px] border border-[#E8E8EA] text-[#1A1D27] placeholder:text-[#A0A4AB] text-[15px] focus:outline-none focus:border-[#0055FF] transition-all"
                required
              />
            </div>

            <div className="flex justify-end mt-2">
              <button 
                type="submit" 
                className="h-[48px] px-8 bg-[#D4FB20] text-[#1A1D27] font-semibold text-[15px] rounded-full hover:bg-[#c5ec15] transition-colors"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-[1px] bg-[#E8E8EA]"></div>
            <span className="text-[13px] text-[#A0A4AB]">or</span>
            <div className="flex-1 h-[1px] bg-[#E8E8EA]"></div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="w-[52px] h-[52px] flex items-center justify-center border border-[#E8E8EA] rounded-full hover:bg-gray-50 transition-colors group">
              <Image src="/Assets/SignIn/fb.png" alt="Facebook" width={22} height={22} className="object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all" />
            </button>
            <button className="w-[52px] h-[52px] flex items-center justify-center border border-[#E8E8EA] rounded-full hover:bg-gray-50 transition-colors group">
              <Image src="/Assets/SignIn/google.png" alt="Google" width={22} height={22} className="object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all" />
            </button>
          </div>

          <p className="text-center mt-12 text-[14px] text-[#7F879E]">
            New user?{' '}
            <Link href="/signup" className="font-medium text-[#0055FF] hover:underline">
              Create an account
            </Link>
          </p>

        </div>
      </div>
      </div>
    </div>
  );
}
