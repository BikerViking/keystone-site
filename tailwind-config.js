tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                charcoal: '#333333',
                platinum: '#E5E5E5',
                lightgray: '#F5F5F5',
                mediumgray: '#888888',
                darkgray: '#444444',
                darkbg: '#1a1a1a'
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif']
            }
        }
    },
    safelist: [
        'bg-charcoal',
        'text-white',
        'text-charcoal',
        'bg-lightgray',
        'border-mediumgray',
        'text-darkgray',
        'text-platinum'
    ]
};

