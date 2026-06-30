

export const MDLogo = () => (
  <div className="flex items-center gap-4 text-[#D87D20] bg-white p-4 rounded-xl">
    <div className="relative w-16 h-16 border-2 border-gray-800 rounded-full flex items-center justify-center p-1">
      <div className="absolute inset-0 border-2 border-transparent border-t-[#D87D20] border-b-[#D87D20] rounded-full rotate-45 transform" />
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800">
        <path d="M12 22A10 10 0 1 0 2 12M12 2a10 10 0 0 0-10 10M12 12l5.5-5.5M12 12l5.5 5.5M12 12l-8 0M12 12l0-8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="font-bold text-2xl font-sans text-[#D87D20]">مجموعة MD</span>
      <span className="font-medium text-xl text-gray-800 -mt-1 tracking-wide">للمناسبات</span>
    </div>
  </div>
);
