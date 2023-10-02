import { useState } from "react";
import MenuList from "./MenuList";

const RestaurantCategory = (props) => {
  const { itemCards, title } = props?.data?.card?.card;
  const {showItems,setShowIndex,index}=props;
  //   console.log(itemCards);
  const handleClick=()=>{
    showItems ? setShowIndex(null) : setShowIndex(index);
  }

  return (
    <div className="mx-auto my-4 p-4 border-solid border-b-[16px] border-[#f1f1f6]">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-[18.2px] text-[#3e4152]">{title} ({itemCards.length})</span>
        <span>{showItems ? "🔼" : "🔽"}</span>
      </div>
      {showItems && <MenuList items={itemCards}/>}
    </div>
  );
};

export default RestaurantCategory;
