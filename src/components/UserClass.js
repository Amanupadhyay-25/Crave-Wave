import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Ghaziabad",
                avatar_url:"https://pic.com"
            }
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.github.com/users/Amanupadhyay-25");
            const json = await response.json();
            
            this.setState({
                userInfo: {
                    name: json.name || "No name available",
                    location: json.location || "No location available",
                    avatar_url:json.avatar_url || "No image found"
                }
            });

            console.log(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
        const { name, location,avatar_url} = this.state.userInfo;
     return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                <h3>Instagram Id: uritvik@0728</h3>
            </div>
        );
    }
}

export default UserClass;
