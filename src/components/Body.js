import { useState, useEffect } from "react";
import { objList } from "../utils/objList";
import RestaurantConatiner from "./RestaurantContainer";
import ShimmmerUI from "./ShimmmerUI";
import { Link } from "react-router-dom";
import RestaurantConatinerClass from "./RestaurantContainerClass";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    console.log(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      jsonData?.data
    );
    setRestaurantList(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
  };

  return restaurantList?.length === 0 ? (
    <ShimmmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
            console.log(restaurantList, "restaurantList");

              const filteredRestaurant = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);

            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = restaurantList?.filter(
              (res) => res.info.avgRating > 4.2
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((resList) => (
          <Link to={"/restaurants/"+resList?.info?.id} key={resList?.info?.id}><RestaurantConatiner resData={resList} /><RestaurantConatinerClass resData={resList} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
