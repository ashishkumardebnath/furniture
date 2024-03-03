import { Link } from "react-router-dom";
import img from "../../../assets/images/Login/62e0bd1e0f555f392e090236_breadcrumb-image-1-p-800.png";
const Login = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-20 mt-28">
        <div className="flex justify-center items-center">
          <div>
            <h6 className="text-6xl font-semibold mb-6">Login</h6>
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
          <h6 className="text-6xl font-semibold mb-6 text-center">Login</h6>
          <p className="font-sans text-center mb-2">
            Please fill your email and password to login
          </p>
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
              value="LOG IN"
            />
            <p className="text-center mt-2">
              Don’t have an account?{" "}
              <Link to="/signup" className="underline">
                Please Register
              </Link>
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
