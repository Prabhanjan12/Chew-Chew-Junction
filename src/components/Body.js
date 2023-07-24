import { objList } from "../utils/objList";
import RestaurantConatiner from "./RestaurantContainer";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {objList.map((resList) => (
          <RestaurantConatiner resData={resList} />
        ))}
      </div>
    </div>
  );
};

export default Body;
