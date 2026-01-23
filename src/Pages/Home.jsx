import Hero from "../Component/Hero";
import Genre from "../Component/Genre";
import About from "../Component/About";
import TopBook from "../Component/TopBook";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <TopBook></TopBook>
      <Genre></Genre>
      <About></About>
    </div>
  );
};

export default Home;
