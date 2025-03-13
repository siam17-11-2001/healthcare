import Title from "../../Components/Title/Title";
import DiscountCard from "../../Components/DiscountCard/DiscountCard";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img1 from "../../assets/img1.webp";
import Marquee from "react-fast-marquee";
const DiscountProducts = () => {
  return (
    <div>
      <Title title="Discount Products"></Title>

      <div className="py-12 w-11/12 mx-auto">
        <Marquee>
          <div className="p-3">
            <DiscountCard
              image={img1}
              title="Napa Pain killer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </div>

          <div className="p-3">
            <DiscountCard
              image="https://img.drz.lazcdn.com/static/bd/p/61286d4d03ed0cb956f7fa4a47790e15.jpg_400x400q75.jpg_.webp"
              title="Blood Pressure Monitor"
              discountPrice={70.0}
              basePrice={92.0}
              coupon={7}
            ></DiscountCard>
          </div>

          <div className="p-3">
            <DiscountCard
              image="https://img.drz.lazcdn.com/g/kf/S893f99a2753d46dda9b35a9f62159bb11.jpg_400x400q75.jpg_.webp"
              title="Digital Thermometer"
              discountPrice={30}
              basePrice={43}
              coupon={12}
            ></DiscountCard>
          </div>
          <div className="p-3">
            <DiscountCard
              image="https://img.drz.lazcdn.com/static/bd/p/2fdd662d3e4d4c0532e6b1bd3bde33a6.jpg_400x400q75.jpg_.webp"
              title="Cough Syrup"
              discountPrice={12}
              basePrice={17}
              coupon={5}
            ></DiscountCard>
          </div>

          <div className="p-3">
            <DiscountCard
              image="https://img.drz.lazcdn.com/g/kf/S59da417677dc45318a9dbe04cb82c533s.jpg_400x400q75.jpg_.webp"
              title="Hand Sanitizer"
              discountPrice={22}
              basePrice={29}
              coupon={17}
            ></DiscountCard>
          </div>

          <div>
            <DiscountCard
              image="https://img.drz.lazcdn.com/static/bd/p/3b8a3dfb028bdd88222410e40352aa9d.jpg_400x400q75.jpg_.webp"
              title="N95 Face Mask"
              discountPrice={10}
              basePrice={15.4}
              coupon={6}
            ></DiscountCard>
          </div>

          <div className="p-3">
            <DiscountCard
              image="https://img.drz.lazcdn.com/static/bd/p/ef5e47ef1c2b9b33bfab601c227dd107.jpg_400x400q75.jpg_.webp"
              title="Glucose Monitoring Kit"
              discountPrice={90}
              basePrice={98}
              coupon={12}
            ></DiscountCard>
          </div>

          <div className="p-3">
            <DiscountCard
              image="https://img.drz.lazcdn.com/static/bd/p/1cf9932af7c6ad8fa0c95434c7d48c1a.jpg_400x400q75.jpg_.webp"
              title="Antiseptic Cream"
              discountPrice={44}
              basePrice={53}
              coupon={19}
            ></DiscountCard>
          </div>

          <div className="p-3">
            <DiscountCard
              image="https://img.drz.lazcdn.com/static/bd/p/6dc5752c7832e5dee6e410e25473d547.jpg_400x400q75.jpg_.webp"
              title="Vapour Rub"
              discountPrice={45}
              basePrice={57}
              coupon={12}
            ></DiscountCard>
          </div>

          <div className="p-3">
            <DiscountCard
              image="https://img.drz.lazcdn.com/static/bd/p/1c7fa89623bb6a200aca7beabf88b33e.png_400x400q75.png_.webp"
              title="Multivitamin Tablets"
              discountPrice={8}
              basePrice={12}
              coupon={7.5}
            ></DiscountCard>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default DiscountProducts;
