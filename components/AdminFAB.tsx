import React from 'react';

interface AdminFABProps {
    isAdmin: boolean;
    onToggleAdmin: () => void;
}

export const AdminFAB: React.FC<AdminFABProps> = ({ isAdmin, onToggleAdmin }) => {
    return (
        <button
            onClick={onToggleAdmin}
            className="md:hidden fixed bottom-20 right-5 z-40 bg-brand-orange text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-orange-400"
            title={isAdmin ? 'Cerrar Sesión' : 'Iniciar Sesión como Administrador'}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
        </button>
    );
};
