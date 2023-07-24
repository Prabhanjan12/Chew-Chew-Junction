import { IMG_RES } from "../utils/constants";

const RestaurantConatiner = (props) => {
    const { resData } =  props;
    console.log(resData, "resData");
    return(
            <div className="res-cards">
                    <img className="res-logo" src={IMG_RES+resData.info?.cloudinaryImageId} />
                    <h3>{resData.info.name}</h3>
                    <h4>{resData.info.cuisines.join(", ")}</h4>
                    <h4>{resData.info.avgRating} stars</h4>
                    <h4>{resData.info.sla.deliveryTime} minutes</h4>
            </div>
    )
}

export default RestaurantConatiner;