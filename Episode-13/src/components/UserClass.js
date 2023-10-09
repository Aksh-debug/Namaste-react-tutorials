import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"Shobhit",
      location:"Mathura",  
      avatar_url:"https://dummy.com"
      },
    };
  }

  async componentDidMount(){
    let data = await fetch("https://api.github.com/users/Aksh-debug");
    let json = await data.json();
    console.log(json);
    this.setState({
        userInfo:json
    });
  }

  componentDidUpdate(){
    console.log('Component did update is called!!');
  }

  componentWillUnmount(){
    console.log("component is unmounted!!");
  }

  render() {
    const {name,location,avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <img src={avatar_url} style={{height:"100px",width:"100px",borderRadius:"50px"}}/>
        <h3>Location: {location}</h3>
        <h4>Contact: adiraj@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
