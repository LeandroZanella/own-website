export const settings = {
    cssEase: 'ease-out',
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 3,
    responsive: [
        {breakpoint: 1024,
            settings: {
                cssEase: 'ease-out',
                dots: true,
                infinite: false,
                speed: 900,
                slidesToShow: 3,
                
            }
        },
        {breakpoint: 768 ,
            settings: {
                cssEase: 'ease-out',
                infinite: false,
                speed: 900,
                slidesToShow: 2,
                arrows: false,
            }
        },
        {breakpoint: 646 ,
            settings: {
                cssEase: 'ease-out',
                infinite: false,
                speed: 900,
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
};