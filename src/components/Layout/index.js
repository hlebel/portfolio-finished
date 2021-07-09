const Layout = ({ title, bg, children }) => (
  <div className="content">
    <div
      className="hero bg-dark p-3 justify-content-center d-flex flex-column align-items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-white mb-5 mt-5">{title}</h1>
      {children}
    </div>
  </div>
);

export default Layout;
