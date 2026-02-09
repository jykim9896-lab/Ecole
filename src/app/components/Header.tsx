import imgLogo from "figma:asset/e3fbdab16482d8ad6e984c2538cf99595846d1df.png";

interface HeaderProps {
  onNavigateHome: () => void;
}

export function Header({ onNavigateHome }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8">
      {/* Liquid Glass Background */}
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/30 to-white/40 backdrop-blur-xl rounded-3xl shadow-lg border border-white/50" 
             style={{
               boxShadow: '0 8px 32px 0 rgba(161, 229, 216, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)'
             }}
        />
        
        {/* Content */}
        <div className="relative flex items-center justify-between px-8 py-4">
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0"
          >
            <img src={imgLogo} alt="아트봉봉에꼴 로고" className="h-8 md:h-10" />
          </button>
        </div>
      </div>
    </header>
  );
}