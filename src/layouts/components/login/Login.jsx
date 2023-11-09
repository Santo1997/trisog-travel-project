import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setErr("");

    signIn(data.email, data.pwd)
      .then((userCredential) => {
        userCredential.user;
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };

  return (
    <div className="hero min-h-[calc(100vh-300px)] text-black">
      <div className="hero-content flex-col w-full lg:w-3/6">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Email:
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Password:
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                {...register("pwd", {
                  required: true,
                })}
              />
              {errors.pwd?.type === "required" && (
                <span className="mt-1 text-red-600">
                  This field is required
                </span>
              )}
            </div>
            {err && <span className="text-sm text-red-600 mt-5">{err}</span>}
            <div className="form-control m-5">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-sm">
              Create an account?
              <Link to="/signUp">
                <span className="ms-1 underline  hover:text-red-500">
                  Signup
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
