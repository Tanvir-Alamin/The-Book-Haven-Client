import Hero from "../Component/Hero";
import Genre from "../Component/Genre";
import About from "../Component/About";
import TopBook from "../Component/TopBook";
import Loader from "../Component/Loader";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) return <Loader></Loader>;
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
