import { useContext, useEffect, useRef, useState } from 'react';
import { ClientsContext } from '../../context/ClientsContext';
import Slider from "react-slick";



const SliderComponent = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const [clients] = useContext(ClientsContext)
    const property = clients[0]?.properties[0];

    useEffect(() => {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }, []);


    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
    };

    const sliderNavSettings = {
      slidesToShow : property?.media?.length,
      swipeToSlide: true,
      focusOnSelect: true,
      arrows: false,
    };



    return (
        <div className="grid gap-10 grid-cols-3 shadow-lg shadow-gray-200 rounded-xl	px-10 py-10">
            <div>
                <Slider {...sliderSettings} asNavFor={nav2} ref={sliderRef1}>
                {property?.media?.map((media) => {
                    return <img className='object-cover h-[300px]' key={media.id} src={media.file_path} alt="gallery"></img>
                })}
                </Slider>

                <Slider className='property-slider-nav' {...sliderNavSettings} asNavFor={nav1} ref={sliderRef2} >
                {property?.media?.map((media) => {
                    return <img className='object-cover h-[70px] border-2	border-gold' key={media.id} src={media.file_path} alt="gallery"></img>
                })}
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;