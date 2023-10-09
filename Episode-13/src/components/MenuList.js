import { addItem } from "../../utils/cartSlice";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";


const MenuList = (props) => {
  const { items } = props;
  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="flex justify-between border-solid border-b-[1.5px] my-4 text-left"
        >
          <div className="my-4 w-[671px] mx-2">
            <p className="font-bold text-[17.08px] text-[#3e4152]">
              {item?.card?.info?.name}
            </p>
            <p className="text-[14px] text-[#3e4152]">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-[14px] text-[rgba(40,44,63,.45)] my-4">
              {item?.card?.info?.description}
            </p>
          </div>
          <div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="relative rounded-md mb-12 mt-2 w-[118px] h-[96px]"
            />
            <button
              className="z-30 absolute w-[100px] -mt-16 border-[1.5px] bg-white text-[#60b246] text-center font-bold text-sm p-1 rounded-md mx-[8.5px] hover:cursor-pointer hover:shadow-md"
              onClick={()=>handleAddItem(item)}
            >
              ADD+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
