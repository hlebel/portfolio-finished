import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Layout from "../../components/Layout";
const datas = [
  {
    id: "1",
    title: "Developper",
    description: "Lusis",
    timeline: "2019-2022",
  },
  { id: "2", title: "huhu", description: "g", timeline: "2019-2022" },
  { id: "3", title: "haha", description: "plfopy", timeline: "20-2022" },
  { id: "4", title: "hehe", description: "plddopy", timeline: "201019-2022" },
  { id: "5", title: "hdhd", description: "ploccpy", timeline: "204119-2022" },
];

const Resume = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/resume.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <Layout
      title="Resume"
      bg="https://istefan.ro/img/hero/web-developer-newsletter-coder-stefan-iordache.jpg"
      class="content"
    >
      <main class="container">
        <section className="education bg-dark text-white p-4 mb-5">
          <h2 className="display-4">Education</h2>
          {data.education?.map((item, i) => (
            <div key={i}>
              <h4>{item.area}</h4>
              <p>{item.institution}</p>
              <small>
                {item.startDate} - {item.endDate}
              </small>
            </div>
          ))}
        </section>
        <section className="work bg-dark text-white p-4 mb-5 ">
          <h2 className="display-4">Work</h2>
          {data.work?.map((item, i) => (
            <div key={i}>
              <h4>{item.position}</h4>
              <strong>{item.company}</strong>
              <br />
              <small>
                {item.startDate} - {item.endDate}
              </small>
              <p>{item.summary}</p>
            </div>
          ))}
        </section>
        <section className="skills bg-dark text-white p-4 mb-5 ">
          <h2 className="display-4">Skills</h2>
          {data.skills?.map((item, i) => (
            <div key={i}>
              <h4>{item.name}</h4>
              <strong>{item.keywords}</strong>
              <br />
              <small>{item.level}</small>
            </div>
          ))}
        </section>
        <section className="information bg-dark text-white p-4 mb-5 ">
          <h2 className="display-4">General info</h2>
          {data.volunteer?.map((item, i) => (
            <div key={i}>
              <h4>{item.organization}</h4>
              <strong>{item.position}</strong>
              <br />
              <small>{item.summary}</small>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};
// Je veux des cards
export default Resume;
