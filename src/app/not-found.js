import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 text-center font-satoshi py-10 lg:py-20 min-h-[70vh]">
      <h1 className="text-[150px] sm:text-[200px] md:text-[280px] lg:text-[350px] font-bold leading-none tracking-tighter font-[var(--font-poppins)] z-0" style={{
        background: 'linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.1) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent'
      }}>
        404
      </h1>
      
      <h2 className="text-[32px] sm:text-[42px] md:text-[56px] font-bold text-white mt-[-40px] sm:mt-[-60px] md:mt-[-90px] font-[var(--font-poppins)] leading-[1.2] max-w-[800px] z-10 relative">
        The page you are looking<br/>for doesn't exist
      </h2>
      
      <p className="text-[15px] sm:text-[16px] text-white/70 mt-8 mb-10 z-10 relative">
        Try to use a correct url or go back to homepage to start again
      </p>
      
      <Link href="/" className="z-10 relative">
        <button className="bg-[#D4FB20] text-[#1A1D27] font-semibold text-[15px] px-8 py-3.5 rounded-full hover:bg-[#c5ec15] transition-colors shadow-lg">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
