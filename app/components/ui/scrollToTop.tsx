import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div 
            className="fixed bottom-8 right-8 z-50 flex flex-col items-center group"
            style={{ 
                opacity: isVisible ? 1 : 0, 
                visibility: isVisible ? 'visible' : 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' 
            }}
        >
            {/* Smooth Tooltip */}
            <span className="mb-2 px-2.5 py-1 text-[11px] uppercase tracking-wider font-bold text-white bg-primary backdrop-blur-sm rounded-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
                Na Vrh Stranice
            </span>

            {/* Button with Scale & Lift */}
            <button 
                onClick={scrollToTop} 
                aria-label="Scroll to top"
                className="relative p-3 rounded-full bg-secondary shadow-xl transition-all duration-300 hover:scale-110 active:scale-90 overflow-hidden"
            >
                <ArrowUpIcon 
                    className="w-6 h-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-1.5" 
                />
            </button>
        </div>
    );
}