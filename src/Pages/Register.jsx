import { Eye, EyeOff } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const [eye, setEye] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { userWithEmail, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i;

    const email = e.target.email.value;
    const password = e.target.password.value;

    const name = e.target.name.value.trim();
    const nameOfUser = e.target.name.value.trim();
    const photoURL = e.target.img.value.trim();
    if (!nameOfUser) {
      setError("Full Name is required");
      return;
    }

    if (!imageRegex.test(photoURL)) {
      setError("Photo URL is required");
      return;
    }

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!email.includes("@")) {
      setError("Email must contain @ symbol");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter (a–z).");
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError("Password must contain at least one number");
      return;
    }
    setError("");
    userWithEmail(email, password)
      .then((result) => {
        setUser(result.user);
        setSuccess(true);
        e.target.reset();
        navigate("/home");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("This email is already registered. Please login instead.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email address.");
        } else if (error.code === "auth/weak-password") {
          setError("Password is too weak.");
        } else if (error.code === "auth/network-request-failed") {
          setError("Network error. Please check your internet connection.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      });
  };
  return (
    <div>
      <div>
        <div className="flex items-center  justify-center">
          <div className=" bg-[#FFE4EF] flex justify-between mt-10 mb-25 shadow-2xl rounded-2xl ">
            <img
              className="md:w-92 hidden md:block rounded-4xl shadow-black shadow-2xl rounded-l-2xl h-full"
              src={"/src/assets/register.jpg"}
              alt=""
            />
            <form onSubmit={handleSubmit} className="">
              <fieldset className="fieldset  border-none rounded-box mt-0 w-xs mx-15 border pt-2 px-4">
                <div className="text-3xl text-center text-green-950 font-sans font-semibold">
                  Sign Up <br></br>
                  <span className="text-sm">
                    Create your account to get started
                  </span>
                </div>

                <label className="label text-gray-800 font-semibold">
                  Full Name *
                </label>
                <input
                  name="name"
                  type=""
                  className="input  bg-green-50"
                  placeholder="Enter your full name"
                />
                <label className="label text-gray-800 font-semibold">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  className="input  bg-green-50"
                  placeholder="Enter your email"
                />
                <label className="label text-gray-800 font-semibold">
                  Photo URL
                </label>
                <input
                  name="img"
                  type="text"
                  className="input  bg-green-50"
                  placeholder="Enter photo URL"
                />

                <label className="label text-gray-800 font-semibold">
                  Password *
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
                    {" "}
                    {!eye ? <EyeOff /> : <Eye />}
                  </p>
                </div>
                {error ? (
                  <p className="text-red-500 font-semibold text-xm">{error}</p>
                ) : (
                  ""
                )}
                {success ? (
                  <p className="text-blue-600 font-sans font-semibold">
                    Welcome <span className="text-sm">'{name}'</span> Your
                    account has been successfully created ✓
                  </p>
                ) : (
                  ""
                )}
                <button className="btn bg-pink-800 text-white font-bold mt-2">
                  Sign up
                </button>
              </fieldset>

              <div className="flex my-1 justify-center">
                Already have an account?{" "}
                <Link to="/login" className="ml-1 text-blue-700 underline">
                  {" "}
                  Sign in here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
