import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import validator from "validator";

const ContactMe = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    ytext: "",
  });
  const [validation, setValidation] = useState({});

  const handleChange = (e) => {
    // console.log(e);
    // les ... font reference a la fonction rest qui permet de récupérer l'input dans ce cas précis, avant l'association
    // de la target de l'id.
    setData({ ...data, [e.target.id]: e.target.value });

    if (e.target.value) {
      setValidation({ ...validation, [e.target.id]: null });
    }
  };
  // pour empêcher la page de se reload dès qu'on a soumis le formulaire ou appuyé sur entrée
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setValidation(errors);
    } else {
      setValidation({});
      console.log(data);
    }
  };

  console.log({ validation });

  const validate = () => {
    const errors = {};

    if (!data.fname) errors.fname = "Please, enter your first name";
    if (!data.lname) errors.lname = "Please, enter your last name";
    if (!data.email) {
      errors.email = "Please, enter your email";
    } else if (!validator.isEmail(data.email)) {
      errors.email = "Please, enter a valid email";
    }

    //if(data.password.length < 6) errors.password  = 'Your password must have 6 characters or more'

    return errors;
  };

  return (
    <Layout title="Contact Me" className="content">
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  !!validation.fname ? "is-invalid" : "is-valid"
                }`}
                id="fname"
                onChange={handleChange}
                value={data.fname}
              />
              {!!validation.fname && (
                <div className="invalid-feedback">{validation.fname}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  !!validation.lname ? "is-invalid" : "is-valid"
                }`}
                id="lname"
                onChange={handleChange}
                value={data.lname}
              />
              {!!validation.lname && (
                <div className="invalid-feedback">{validation.lname}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your mail
              </label>
              <input
                type="text"
                className={`form-control ${
                  !!validation.email ? "is-invalid" : "is-valid"
                }`}
                id="email"
                onChange={handleChange}
                value={data.email}
              />
              {!!validation.email && (
                <div className="invalid-feedback">{validation.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="ytext" className="form-label">
                Describe your project
              </label>
              <textarea
                className="form-control"
                id="ytext"
                onChange={handleChange}
                value={data.ytext}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactMe;
