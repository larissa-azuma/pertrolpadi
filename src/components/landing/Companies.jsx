import React from 'react'
import Slider from 'react-slick'
import nnpc from "../../assests/image/nnpc.png"
import mobil from "../../assests/image/mobil.png"
import quest from "../../assests/image/quest.png"
import rainoil from "../../assests/image/rainoil.png"
import northwest from "../../assests/image/northwest.png"
import pinnacle from "../../assests/image/pinnacle.png"
import eenergy from "../../assests/image/eenergy.png"
import mrs from "../../assests/image/mrs.png"
import chipet from "../../assests/image/chipet.png"
import sahara from "../../assests/image/sahara.png"

const CompaniesData=[
    { id: 1, image: nnpc },
    { id: 2, image: mobil },
    { id: 3, image: quest },
    { id: 4, image: rainoil },
    { id: 5, image: northwest },
    { id: 6, image: pinnacle },
    { id: 7, image: eenergy },
    { id: 8, image: mrs },
    { id: 9, image: chipet },
    { id: 10, image: sahara },
]

function Companies() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }
    return (
        <div className='py-16 bg-color-bg text-black'>
            <div className='container'>
                {/* Header section */}
                <div className='mb-10 space-y-5'>
                    <h1 className='text-center text-4xl font-bold sm:max-w-sm mx-auto'>Trusted by Some Amazing Companies</h1>
                </div>
                {/* Slider section */}
                <div>
                    <Slider {...settings}>
                        {CompaniesData.map((menu) => (
                            <div className='my-16' key={menu.id}>
                                <div className='flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl'>
                                    {/* Image section */}
                                    <div className='mb-3 flex justify-between'>
                                        <img src={menu.image} alt='' className='rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Companies