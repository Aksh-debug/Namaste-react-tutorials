import { CDN_URL } from "../../utils/constants";

const MenuList = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="flex justify-between border-solid border-b-[1.5px] my-4 text-left">
          <div className="my-4">
            <p className="font-bold text-[17.08px] text-[#3e4152]">{item?.card?.info?.name}</p>
            <p className="text-[14px] text-[#3e4152]">₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice/100}</p>
            <p className="text-[14px] text-[rgba(40,44,63,.45)] my-4">
              {item?.card?.info?.description}
            </p>
          </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className="rounded-md mb-12 mt-2 w-[118px] h-[96px]" />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
