import { data } from "./data";
import { settings } from "./settings";
import Slider from "react-slick";

export default function Content() {
  return (
    <div className="flex justify-center items-center py-8 w-full bg-gray-950" id="experience">
      <div className="w-full max-w-screen-lg lg:w-3/4 ">
        <h2 className="text-3xl p-4 font-bold text-center text-white">Minhas experiências</h2>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <div className="rounded-lg p-4 transition duration-300 transform hover:scale-105 mx-4">
                <img src={item.imageUrl} alt={item.title} className="w-full h-40 rounded-lg mb-4"/>
                <h3 className="text-white text-xl">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}