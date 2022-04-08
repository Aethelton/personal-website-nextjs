import { SwiperSlide } from "swiper/react";

const GamingConsoleSlide = (props) => {
    return (
        <SwiperSlide>
            <img src={`/Gaming%20Console%20Images/${props.src}`} alt={props.title}/>
            <div>
                <h3 className="console-carousel-text">{props.children}</h3>
            </div>
        </SwiperSlide>
    );
};

export default GamingConsoleSlide;
