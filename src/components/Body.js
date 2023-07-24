import { useState } from "react";
import { objList } from "../utils/objList";
import RestaurantConatiner from "./RestaurantContainer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(objList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.2
            );
            console.log(filteredList, "filteredList");
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((resList) => (
          <RestaurantConatiner resData={resList} />
        ))}
      </div>
    </div>
  );
};

export default Body;
