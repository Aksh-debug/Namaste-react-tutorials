import RestaurantCard, {withDiscountLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Offline from "./Offline";
import { FETCH_API_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";


const Body = () => {
  // local state variable --> super powerful variable declared using use state hook
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {setUserName}=useContext(UserContext);

  // console.log(listOfRestaurants);

  const RestaurantCardOpen=withDiscountLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(FETCH_API_URL);
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <Offline />;
  }

  // Conditional rendering : rendering on the basis of condition
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="ml-36">
        <div className="flex mt-8 items-center">
          <div className="flex mx-4 my-2">
            <input
              type="text"
              className="border-solid border-[1.5px] border-gray-300 rounded-md p-2 m-4 w-56 focus:border-blue-300 outline-none focus:ring-cyan-100 focus:ring-2"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="border-solid border-[1.5px] border-inherit border-black rounded-md m-4 w-24 shadow-lg bg-gradient-to-r from-lime-700 to-lime-600 text-white hover:from-lime-900 hover:to-lime-800"
              onClick={() => {
                const filteredRes = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRes);
              }}
            >
              SEARCH
            </button>
          </div>
          <div className="my-2">
            <button
              className="border-solid border-[1.5px] border-orange-600 border-inherit rounded-md h-[38px] m-4 w-64 drop-shadow-md bg-gradient-to-r from-orange-700 to-orange-600 text-white hover:from-orange-800 hover:to-orange-700"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              TOP RATED RESTAURANTS
            </button>
          </div>
          <div>
            <input className="border-[1.5px] border-gray-200 rounded-md p-2 shadow-lg ml-8 bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-100 focus:border-blue-300 outline-none focus:ring-cyan-200 focus:ring-2 placeholder-cyan-600" placeholder="Username..." onChange={(e)=>setUserName(e.target.value)}/>
          </div>
        </div>
        <div className="my-8 mx-[22px] font-serif text-lg font-extrabold">
        Restaurants with online food delivery in Mathura
      </div>  
        <div className="flex flex-wrap">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {/* {restaurant?.info?.aggregatedDiscountInfoV3 ? console.log('not undefined!!!!') :  console.log(restaurant?.info?.name) } */}
              {restaurant?.info?.aggregatedDiscountInfoV3 ? <RestaurantCardOpen resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
