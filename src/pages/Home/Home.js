import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <Layout
      bg="https://images.alphacoders.com/911/thumb-1920-911816.png"
      class="content"
    >
      <Hero />
      <div className="container">
        <div className="image">
          <img src="" alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
