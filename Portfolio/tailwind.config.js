tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily:{
                Ovo:[ "Ovo", "serif"],
                Montserrat:[ "Montserrat","serif"],
                outfit:[ "Outfit","serif"],  
    
            },
            animation:{
                spin_slow:'spin 6s linear infinite'
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f'
            },
            boxShadow:{
                'blue':'4px 4px 0 #0000ff',
                'white':'4px 4px 0 #fff',

            }

        }

        },
        darkMode:'selector'
       
}

