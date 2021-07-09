const Hero = () => (
  <div className="opacity-2 w-100 p-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 order-md-1 order-2 text-center text-md-end mt-5">
          <h4 className="display-4">
            <strong>Henri Le Bel</strong>
          </h4>
          <p className="homePage-titre">Web Developper</p>
          <p className="bg-light d-inline-block homePage-titre2 px-3 text-dark">
            Our adventure begins today...
          </p>
        </div>
        <div className="col-md-4 order-1 order-md-2 text-center my-auto">
          <img class="img-moi" src="/img/profile-picyellow.png" alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
