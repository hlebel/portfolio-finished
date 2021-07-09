import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const images = [
    "https://repository-images.githubusercontent.com/318563592/e7b97880-a9ec-11eb-8c24-fbb1d61f9e9a",
    "data:image/jpeg;base64,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",
    "https://repository-images.githubusercontent.com/318563592/e7b97880-a9ec-11eb-8c24-fbb1d61f9e9a",
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
