import { ArrowUpIcon } from "lucide-react";

export default function ScrollToTop() {
    
    const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth'});};

    return (
        <button onClick={scrollToTop} className="float-right fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
            <ArrowUpIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>
    )
}