module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                basefont: ['Inter'],
            },
            colors: {
                primary: '#e94560',
                lightbg: '#dddddd',
                lightbg2: '#f9f3f3',
                darkbg: '#2b2e4a',
                darkbg2: '#16213e',
            },
        },
    },
    variants: {
        extend: {
            margin: ['last'],
        },
    },
    plugins: [],
};
