import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmmerUI from "./ShimmmerUI";
import {MENU_API} from "../utils/constants";

const RestaurantMenu = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const { resId } = useParams();
    console.log(MENU_API+resId);
    console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId=65085&catalog_qa=undefined&submitAction=ENTER");

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json, "pppp");
        setRestaurantInfo(json.data);
    }
    if(restaurantInfo === null) return <ShimmmerUI />

    const { name, avgRating, cuisines, costForTwoMessage } = restaurantInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards, "itemCards");
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h5>{cuisines.join(", ")} - {costForTwoMessage}</h5>
            <h3>Average rating: {avgRating}</h3>
            <h3>Menu</h3>
            <ul>
                {itemCards?.map(item => <li key={item.card.info.id}>{item?.card?.info?.name} - {"Rs "}{item?.card?.info?.price / 100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;