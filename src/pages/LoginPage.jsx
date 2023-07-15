import React from "react";

const LoginPage = () => {
  // return <div>LoginPage</div>;
  return (
    <>
      <div className="hero p-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-28">
          <div className="text-center lg:text-left flex-col justify-center min-w-max">
            <h1 className="text-5xl font-bold text-blue-300">Sign In</h1>
            <br />
            <h2 className="text-2xl font-bold">to Get started with!</h2>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
