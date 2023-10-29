const tailwindcss =require('tailwindcss');

module.exports={
    Plugin:[
        tailwindcss('./tailwind.config'),
        require('autoprefixer')
    ]
}