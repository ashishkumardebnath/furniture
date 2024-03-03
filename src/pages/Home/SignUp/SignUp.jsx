import { Link } from "react-router-dom";
import img from "../../../assets/images/SignUp/62e0bd1e0f555f392e090236_breadcrumb-image-1-p-800 (1).png";

const SignUp = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-20 mt-28">
        <div className="flex justify-center items-center">
          <div>
            <h6 className="text-6xl font-semibold mb-6">Sign Up</h6>
            <p className="font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing scelerisque a
              tincidunt urna nisl quam orci males
            </p>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-28">
        <form>
          <h6 className="text-6xl font-semibold mb-6 text-center">
            Create an account
          </h6>
          <p className="font-sans text-center mb-2">
            Create an account and start using...
          </p>
          <div className="flex justify-center items-center">
            <div>
              <label className="form-control w-full max-w-xs ">
                <div className="label">
                  <span className="label-text text-lg">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type your Name"
                  className="input input-bordered  w-full rounded-none border-1 border-black max-w-xs lg:w-[500px] bg-gray-50"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-lg">Email Address</span>
                </div>
                <input
                  type="text"
                  placeholder="Type your Email"
                  className="input input-bordered  w-full rounded-none border-1 border-black max-w-xs bg-gray-50"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-lg">Password</span>
                </div>
                <input
                  type="text"
                  placeholder="Type your Password"
                  className="input input-bordered w-full rounded-none border-1 border-black max-w-xs bg-gray-50"
                />
                <input
                  className="btn bg-black text-white rounded-none mt-8 max-w-xs"
                  type="submit"
                  value="SIGN UP"
                />
                <p className="text-center mt-2">
                  Have an account?
                  <Link to="/login" className="underline">
                    {" "}
                    Please Login
                  </Link>
                </p>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
