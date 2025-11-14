import React from 'react';

export const WhatsAppFAB: React.FC = () => {
    const whatsappLink = "https://wa.me/525624850092?text=Hola,%20me%20gustaría%20solicitar%20más%20información.";

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 md:bottom-5 left-5 z-40 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-green-400"
            aria-label="Contactar por WhatsApp"
            title="Contactar por WhatsApp"
        >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.75.45 3.41 1.28 4.89L2 22l5.25-1.38c1.44.78 3.05 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.01 20.14h-.01c-1.5 0-2.95-.4-4.22-1.14l-.3-.18-3.13.82.84-3.05-.2-.32a8.03 8.03 0 01-1.22-4.28c0-4.42 3.59-8.02 8.02-8.02s8.02 3.6 8.02 8.02-3.6 8.02-8.02 8.02zm4.53-6.17c-.27-.14-1.61-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.4-.42.14-.1.18-.18.27-.31.09-.14.05-.27 0-.41-.05-.14-.61-1.45-.83-2-.22-.54-.45-.47-.61-.47h-.52c-.18 0-.45.09-.69.31-.24.22-.92.9-1.12 2.17-.2 1.27.24 2.5.27 2.68.03.18 1.14 1.75 2.76 2.44 1.62.69 2.89 1.1 3.32 1.4.67.45 1.09.36 1.27.22.2-.16.83-.96.95-1.14.12-.18.24-.14.41-.09.18.05 1.1.52 1.29.61.19.09.32.14.36.22.04.09.04.54-.02.62-.07.09-.27.14-.54.27z"/>
            </svg>
        </a>
    );
};