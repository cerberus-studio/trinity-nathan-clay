import path from 'path'

require('dotenv').config();

export default {
    entry: path.join(__dirname, 'src', 'index.tsx'),
    getRoutes: async () => {
        return []
    },
    plugins: [
        'react-static-plugin-typescript',
        'react-static-plugin-sass',
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages'),
            },
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
    ],
}