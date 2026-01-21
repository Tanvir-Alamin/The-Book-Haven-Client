import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { BsEyeFill } from "react-icons/bs";
import { Eye, EyeOff } from "lucide-react";

const LogIn = () => {
  const navigate = useNavigate();
  const { google, setUser, mailLogIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [eye, setEye] = useState(false);
  const submitGoogle = (e) => {
    e.preventDefault();
    google()
      .then((result) => setUser(result.user), navigate("/home"))
      .catch((error) => console.log(error.code));
  };
  const loginHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }
    setError("");

    mailLogIn(email, password)
      .then((result) => {
        e.target.reset();
        setUser(result.user);
        setSuccess(true);
        navigate("/home");
      })
      .catch((error) => {
        handleFirebaseError(error.code);
      });
    const handleFirebaseError = (code) => {
      if (code === "auth/invalid-credential") {
        setError("Invalid email or password");
      } else if (code === "auth/invalid-email") {
        setError("Please enter a valid email");
      } else if (code === "auth/user-disabled") {
        setError("This account has been disabled");
      } else {
        setError("Login failed. Please try again");
      }
    };
  };
  return (
    <div>
      <div>
        <div className="flex items-center  justify-center">
          <div className=" bg-[#FFE4EF] flex justify-between  my-25 shadow-2xl rounded-2xl ">
            <form onSubmit={loginHandle} className="">
              <fieldset className="fieldset  border-none rounded-box mt-5 w-xs mx-15 border p-4">
                <div className="text-3xl text-center text-green-950 font-sans font-semibold">
                  Sing in to discover the Haven
                </div>

                <label className="label text-gray-800 font-semibold">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="input  bg-green-50"
                  placeholder="Email"
                />

                <label className="label text-gray-800 font-semibold">
                  Password
                </label>
                <div className="items-center flex relative">
                  <input
                    name="password"
                    type={!eye ? "password" : "text"}
                    className="input bg-green-50"
                    placeholder="Password"
                  />
                  <p
                    className="absolute ml-[90%]"
                    onClick={() => {
                      setEye(!eye);
                    }}
                  >
                    {!eye ? <EyeOff /> : <Eye />}
                  </p>
                </div>
                <Link className="text-xs mt-1 underline text-blue-900">
                  Forgot your password?
                </Link>
                {error ? <p className="text-red-500 text-sm">{error}</p> : ""}
                {success ? (
                  <p className="text-blue-600 text-sm">Login successful ✓</p>
                ) : (
                  ""
                )}

                <button className="btn bg-pink-800 text-white font-bold mt-4">
                  Login
                </button>
              </fieldset>
              <div className="flex items-center justify-center">
                <div>────────</div>
                <div className="mx-3">Or continue with</div>
                <div>────────</div>
              </div>
              <div onClick={submitGoogle} className="flex my-5 justify-center">
                {" "}
                <button className="btn bg-white w-71 text-black border-[#e5e5e5]">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
              <div className="flex my-5 justify-center">
                Don't have an account?{" "}
                <Link to="/register" className="ml-1 text-blue-700 underline">
                  {" "}
                  Sign up here
                </Link>
              </div>
            </form>
            <img
              className="md:w-100 hidden md:block rounded-4xl shadow-black shadow-2xl rounded-r-2xl h-full"
              src={"/src/assets/logInImage.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
