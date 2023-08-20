import User from "./User";
import UserClass from "./UserClass";
const About = () =>{
    return(
        <div>
            <h1>This is About page</h1>
            <User />
            <UserClass name = {"Prabhanjan Pandey"} location = {"Lucknow Class"}/>
        </div>
    )
}

export default About;