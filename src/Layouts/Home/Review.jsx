import test from "../../assets/test.png";
import client from "../../assets/04.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
const Review = () => {
  return (
    <div className="py-12 w-11/12 mx-auto">
      <div className="flex items-center lg:flex-row flex-col">
        
        <div className="lg:w-1/2 w-full">
          <img src={test} alt="" />
        </div>
        <div className="lg:w-1/2 w-full">
        <h2 className="text-4xl font-semibold mb-8">What Our Client Says</h2>
          <Swiper autoplay={true} modules={[Autoplay]} className="mySwiper">
            <SwiperSlide>
              <div className="border-2 border-l-green-600 mb-4">
                <h2 className="p-4 font-semibold">
                  The oxygen concentrator I purchased from Medicine Care has
                  been a lifesaver. It works efficiently, is easy to use, and
                  provides a steady oxygen supply. The build quality is
                  excellent, and the noise level is minimal. Highly recommend it
                  for anyone in need!
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <img src={client} alt="" />
                <div>
                  <h4 className="text-xl font-semibold">Ahbab Zaman</h4>
                  <p className="font-bold">Business Manager</p>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="border-2 border-l-green-600 mb-4">
                <h2 className="p-4 font-semibold">
                  I bought a digital blood pressure monitor, and it's very
                  accurate and easy to use. The display is clear, and the
                  readings are consistent. The cuff is comfortable, but I wish
                  the battery lasted longer. Still, a great purchase overall!
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <img src={client} alt="" />
                <div>
                  <h4 className="text-xl font-semibold">Susmita Rani</h4>
                  <p className="font-bold">Product Designer</p>
                  ⭐⭐⭐⭐
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="border-2 border-l-green-600 mb-4">
                <h2 className="p-4 font-semibold">
                  The wheelchair is lightweight yet sturdy, making it easy to
                  maneuver. The seat is comfortable, and the brakes work well.
                  It’s also foldable, which makes it convenient to transport.
                  Very satisfied with my purchase!
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <img src={client} alt="" />
                <div>
                  <h4 className="text-xl font-semibold">Angelina Jolly</h4>
                  <p className="font-bold">Foreign Client</p>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="border-2 border-l-green-600 mb-4">
                <h2 className="p-4 font-semibold">
                  The infrared thermometer gives quick and accurate readings.
                  It’s perfect for home use, especially for kids. The only
                  downside is that the battery needs to be replaced often, but
                  otherwise, it’s an excellent device.
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <img src={client} alt="" />
                <div>
                  <h4 className="text-xl font-semibold">Jennifer Lawrence</h4>
                  <p className="font-bold">Sales Executive</p>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
