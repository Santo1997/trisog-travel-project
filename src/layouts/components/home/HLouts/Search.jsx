import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../../../../utilities/fakeDB";

const Search = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (user) {
      addToCart(user.uid, data);
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:flex md:gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text italic font-bold">Destination</span>
        </label>
        <input
          type="text"
          placeholder="Where to go?"
          className="input input-bordered"
          {...register("destinate", { required: true })}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text italic font-bold">Type</span>
        </label>
        <input
          type="text"
          placeholder="Activity"
          className="input input-bordered"
          {...register("type", { required: true })}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text italic font-bold">When</span>
        </label>
        <input
          type="date"
          placeholder="Date"
          className="input input-bordered"
          {...register("date", { required: true })}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text italic font-bold">Guest</span>
        </label>
        <input
          type="number"
          placeholder="0"
          className="input input-bordered"
          {...register("guest", { required: true })}
        />
      </div>

      <div className="form-control mt-8">
        <button className="btn bg-yellow-400 text-black hover:bg-info">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
