import { CDN_URL } from "../../utils/constants";
import { RATING_LOGO } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
//   console.log("resData",resData)
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info; // destructuring the data using Optional chaining
  return (
    <div data-testid="resCard" className="m-2 p-4 w-[250px] rounded-md h-72 transition-all delay-50 hover:-translate-y-1 hover:scale-95">
      <div className="z-10 h-36 w-[218px] absolute rounded-2xl bg-gradient-to-t from-black to-transparent drop-shadow-md opacity-100"></div>
      <img
        className="rounded-2xl h-36 w-[220px] relative object-cover"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="pl-4">
        <h3 className="font-bold pt-2 text-lg truncate text-gray-700">{name}</h3>
        <div className="flex items-center">
          <img className="w-[20px] h-[18px]" src={RATING_LOGO} />
          <h4 className=" text-gray-700 font-semibold px-1 mt-[0.5px]">{avgRating}</h4>
        </div>
        <div className="text-sm text-gray-500 truncate">
          {cuisines.join(", ")}
        </div>
        <h4 className="font-semibold">{costForTwo}</h4>
      </div>
    </div>
  );
};

// Higher order component

export const withDiscountLabel=(RestaurantCard)=>{
    return (props)=>{


        const {aggregatedDiscountInfoV3}=props?.resData?.info;

        return (
            <div className="transition-all delay-50 hover:-translate-y-1 hover:scale-95">
                <label className="z-30 h-8 absolute bg-gradient-to-r from-green-950 via-green-900 to-green-800 text-white rounded-md text-xs font-bold p-2 m-2 shadow-lg cursor-pointer">{aggregatedDiscountInfoV3.header}</label>
                <label className="z-30 absolute mt-32 ml-10 text-white font-bold cursor-pointer">{aggregatedDiscountInfoV3.subHeader}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
};

export default RestaurantCard;
