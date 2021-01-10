import React from "react";
import useForm from "./CustomHook";
import axios from "axios";

function Login(props) {
  const { inputs, handleInput, handleSubmit } = useForm(login);

  function login() {
    axios
      .fetch("http://localhost:8080/api/users", inputs)
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
      <div className="row mt-4">
        <div className="row mx-auto col-sm-6 center-block border border-secondary rounded">
          <div className="col-sm-12">
            <h1 className="text-center text-info">LOGIN</h1>
            <div>
              <form onSubmit={handleSubmit} action="row col-sm-11 mx-auto">
                <div className="form-group mt-2">
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
                <div className="form-group mt-2">
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
                <div className="form-group mt-2">
                  <button type="submit" className="col-sm-2 btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
