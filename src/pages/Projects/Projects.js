import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const images = [
    "https://repository-images.githubusercontent.com/318563592/e7b97880-a9ec-11eb-8c24-fbb1d61f9e9a",
    "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg",
    "https://i.pinimg.com/750x/ca/e3/23/cae3230fc96f31f8da82fbc37ebe7237.jpg",
  ];

  useEffect(() => {
    fetch("https://api.github.com/users/hlebel/repos")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);

  return (
    <Layout title="Projects" class="content">
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <a
                href={project.html_url}
                target="_blank"
                className="card text-dark mb-4"
              >
                <img src={images[index]} />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p>{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
