import { IMG_RES } from "../utils/constants";

const RestaurantConatiner = (props) => {
    const { resData } =  props;
    return(
            <div className="res-cards">
                    <img className="res-logo" src={IMG_RES+resData?.info?.cloudinaryImageId} />
                    <h3 className="heading">{resData?.info?.name}</h3>
                    <h4 className="cuisines">{resData?.info?.cuisines?.join(", ")}</h4>
                    <h4>{resData?.info?.avgRating} stars</h4>
                    <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
            </div>
    )
}

export default RestaurantConatiner;