import Shimmer from "./Shimmer";
import { MENU_LIST_LOGO_URL } from "../../utils/constants";
import { VEG_ICON } from "../../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const {resId} = useParams();
  const resInfo=useRestaurantMenu(resId); // custom hook for fetching restaurant info

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, areaName,avgRating,totalRatingsString, feeDetails } =
    resInfo.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="w-[768px] ml-72 mt-8">
      <div className="flex justify-between border-b-[1.5px] border-dashed border-[#d3d3d3] p-4">
        <div className="menu-header-info">
          <h3 className="font-bold text-[20.02px] mb-2">{name}</h3>
          <p className="text-[13.02px] text-[#7e808c]">{cuisines.join(", ")} - {costForTwoMessage}</p>
          <p className="text-[13.02px] text-[#7e808c]">{areaName}</p>
          <p className="-ml-[0.5px] text-[#7e808c] text-[14px] m-4">{feeDetails?.message}</p>
        </div>
        <div className="w-[67.86px] h-[70.59px] rounded-md border-solid border-[1.5px] border-[#e9e9eb] p-[8px] shadow-md mt-6">
            <p className="border-b-[1.5px] border-[#e9e9eb] text-[#3d9b6d] font-bold text-center">{avgRating}</p>
            <p className="text-center text-[10px] mt-2 font-sans font-bold text-[#8b8d97]">{totalRatingsString}</p>   
        </div>
      </div>
      <h2 className="m-8">Menu</h2>
      <div data>
        {itemCards.map((item) => (
          <div className="flex justify-between border-b-[1.5px] border-[#d3d3d3] m-2 pb-10 p-4">
            <div className="menu-info">
              <img className="w-[14px] h-[14px]" src={VEG_ICON} />
              <p className="font-bold text-[#3e4152]" key={item?.card?.info?.id}>{item?.card?.info?.name}</p>
              <p className="text-sm mb-2 text-[#3e4152]">
                {"₹"} {item?.card?.info?.price / 100}
              </p>
              <p className="text-xs text-[rgba(40,44,63,.45)]">{item?.card?.info?.description}</p>
            </div>
            <img
              className="w-[118px] h-[96px] rounded-md"
              src={MENU_LIST_LOGO_URL + item.card.info.imageId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
