import { FC } from "react";
import Layout from "../components/layout/Layout";
import rentals from "../data/mock.json";
import HomeCard from "../components/home/HomeCard/HomeCard";

const Home: FC = () => {
  return (
    <Layout id="home">
      <div className="hero">
        <img src="/assets/images/home_bg.png" alt="home background image" />
        <div className="hero__mask" aria-hidden />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <section>
        {rentals.slice(0, 6).map(rental => (
          <HomeCard key={rental.id} rental={rental} />
        ))}
      </section>
    </Layout>
  );
};

export default Home;
