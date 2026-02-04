import { ArrowUpIcon } from "lucide-react";

export default function ScrollToTop() {
    
    const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth'});};

    return (
        <button onClick={scrollToTop} className="float-right fixed bottom-8 right-8 z-50 p-3 rounded-full bg-secondary transition-colors">
            <ArrowUpIcon className="w-6 h-6 text-white" />
        </button>
    )
}