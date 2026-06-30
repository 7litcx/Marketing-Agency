

const SoulLogo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M 65 25 C 80 25, 80 50, 65 50 L 35 50 C 20 50, 20 75, 35 75 L 65 75" 
        stroke="currentColor" 
        strokeWidth="16" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M 35 75 C 20 75, 20 50, 35 50 L 65 50 C 80 50, 80 25, 65 25 L 35 25" 
        stroke="currentColor" 
        strokeWidth="16" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="opacity-50"
      />
    </svg>
  );
};

export default SoulLogo;
