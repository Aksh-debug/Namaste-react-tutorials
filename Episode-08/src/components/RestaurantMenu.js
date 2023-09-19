import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_LIST_LOGO_URL } from "../../utils/constants";
import { VEG_ICON } from "../../utils/constants";
import { MENU_API } from "../../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const {resId} = useParams();
//   console.log(MENU_API+resId);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    setResInfo(json?.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, areaName,avgRating,totalRatingsString } =
    resInfo.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
      <div className="menu-header">
        <div className="menu-header-info">
          <h3>{name}</h3>
          <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
          <p>{areaName}</p>
        </div>
        <div className="rating-info">
            <p className="avgRating-info">{avgRating}</p>
            <p className="totalRating-info">{totalRatingsString}</p>   
        </div>
      </div>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <div className="menu-list">
            <div className="menu-info">
              <img className="veg-icon" src={VEG_ICON} />
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
              <p className="rupee">
                {"₹"} {item?.card?.info?.price / 100}
              </p>
            </div>
            <img
              className="menu-img"
              src={MENU_LIST_LOGO_URL + item.card.info.imageId}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
