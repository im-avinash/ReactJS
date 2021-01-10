import axios from "axios";
import React from "react";
import useForm from "./CustomHook";

function Register(props) {
  const { inputs, handleInput, handleSubmit } = useForm(signUp);

  function signUp() {
    axios
      .post("http://localhost:8080/api/users", inputs)
      .then((inputs) => {
        console.log(inputs);
        props.history.push("/welcome");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-6 mx-auto border border-secondary rounded mt-4">
          <div className="col-sm-12">
            <form onSubmit={handleSubmit} action="">
              <h1 className="text-center text-info">Register</h1>
              <div className="form-group">
                <label htmlFor="name" className="text-info">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  name="fullname"
                  value={inputs.fullname}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-info">
                  E-mail
                </label>
                <input
                  type="email"
                  id="name"
                  className="form-control"
                  name="email"
                  value={inputs.email}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="uname" className="text-info">
                  Username
                </label>
                <input
                  type="text"
                  id="uname"
                  className="form-control"
                  name="username"
                  value={inputs.username}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pword" className="text-info">
                  Password
                </label>
                <input
                  type="text"
                  id="pword"
                  className="form-control"
                  name="password"
                  value={inputs.password}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpword" className="text-info">
                  Confirm Password
                </label>
                <input
                  type="text"
                  id="cpword"
                  className="form-control"
                  name="confirmpassword"
                  value={inputs.confirmpassword}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
