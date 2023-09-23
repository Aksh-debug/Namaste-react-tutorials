import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Offline from "./Offline";
import { FETCH_API_URL } from "../../utils/constants";

const Body = () => {
  // local state variable --> super powerful variable declared using use state hook
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
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
        <div className="flex">
          <div className="flex mx-4 my-2">
            <input
              type="text"
              className="border-solid border-[1.5px] border-gray-300 rounded-md m-4 w-56 focus:border-blue-300 outline-none focus:ring-cyan-100 focus:ring-2"
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
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
