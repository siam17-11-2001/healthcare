import { Link } from "react-router-dom";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import Title from "../../Components/Title/Title";
import useMedicine from "../../Hooks/useMedicine";
import skinImg from "../../assets/skin.png";
import equipmentImg from "../../assets/equipment.png";
const Category = () => {
  const [medicine] = useMedicine();
  const covid = medicine.filter(
    (item) => item.category_name === "COVID Essentials"
  );
  console.log(covid);
  const pain = medicine.filter((item) => item.category_name === "Pain Relief");
  const skin = medicine.filter((item) => item.category_name === "Skin Care");
  const healthcare = medicine.filter(
    (item) => item.category_name === "Healthcare Device"
  );
  const equipment = medicine.filter(
    (item) => item.category_name === "Protective Equipment"
  );
  const diabetes = medicine.filter(
    (item) => item.category_name === "Diabetes Care"
  );
  return (
    <div>
      <Title title="Popular category"></Title>

      <div className="w-11/12 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4 py-4">
        <Link to={`/list/COVID Essentials`}>
          <CategoryCard
            image={
              "https://demo2.themelexus.com/medilazar/wp-content/uploads/2022/11/Home12_category1.png"
            }
            category={"Covid Essentials"}
            number={covid.length}
          ></CategoryCard>
        </Link>
        <Link to="/list/Pain Relief">
          <CategoryCard
            image={
              "https://demo2.themelexus.com/medilazar/wp-content/uploads/2022/11/home9_png-36-1.png"
            }
            category={"Pain Relief"}
            number={pain.length}
          ></CategoryCard>
        </Link>
        <Link to="/list/Skin Care">
          <CategoryCard
            image={skinImg}
            category={"Skin Care"}
            number={skin.length}
          ></CategoryCard>
        </Link>
        <Link to="/list/Healthcare Device">
          <CategoryCard
            image={equipmentImg}
            category={"Healthcare Devices"}
            number={healthcare.length}
          ></CategoryCard>
        </Link>
        <Link to="/list/Protective Equipment">
          <CategoryCard
            image={
              "https://klbtheme.com/medibazar/wp-content/uploads/2020/09/product04.jpg"
            }
            category={"Protective Equipment"}
            number={equipment.length}
          ></CategoryCard>
        </Link>
        <Link to="/list/Diabetes Care">
          <CategoryCard
            image={
              "https://demo2.themelexus.com/medilazar/wp-content/uploads/2022/11/home9_png-39-1.png"
            }
            category={"Diabetes Care"}
            number={diabetes.length}
          ></CategoryCard>
        </Link>
      </div>
    </div>
  );
};

export default Category;
