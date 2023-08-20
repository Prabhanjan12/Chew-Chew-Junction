import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
        console.log(props, "props");
    }
    render(){
        const { name, location } = this.props;
        const { count } = this.state;
        return (
            <div className="user-card">
            <h2>Name: Prabhanjan - {name}</h2>
            <h3>Location: {location} {count}</h3>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1,
                })
            }}>Increment count</button>
            <h4>Contact: prabhanjanpandey1206@gmail.com</h4>
        </div>
        )
    }
}

export default UserClass;