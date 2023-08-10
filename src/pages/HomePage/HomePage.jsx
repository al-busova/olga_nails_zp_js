import { Hero } from "../../components/Hero/Hero";
import { Advantages } from "../../components/Advantages/Advantages";
import { HomeSliderUseful } from "../../components/HomeSliderUseful/HomeSliderUseful";
import { FormHome } from "../../components/FormHome/FormHome";
import { Reviews } from "../../components/Reviews/Reviews";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Advantages />
      {/* <HomeGifs /> */}
      <HomeSliderUseful />
      <FormHome />
      <Reviews />
      {/* <Promotions /> */}
    </main>
  );
};

export default HomePage;
