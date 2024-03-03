import About1 from "../About1/About1";
import About2 from "../About2/About2";
import Banner from "../Banner/Banner";
import BestSellers from "../BestSellers/BestSellers";
import Category from "../Category/Category";
import Collection from "../Collection/Collection";
import Showcase1 from "../Showcase1/Showcase1";
import SimpleDiv from "../Simplediv/SimpleDiv";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About1></About1>
      <Category></Category>
      <Collection></Collection>
      <About2></About2>
      <Showcase1></Showcase1>
      <BestSellers></BestSellers>
      <SimpleDiv></SimpleDiv>
    </div>
  );
};

export default Home;
