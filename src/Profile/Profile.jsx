import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";

const Profile = ({userImg, username : defaultUsername}) => {

  const [username, setUsername] = useState(defaultUsername);

  useEffect(() => {
    // Simulate fetching user profile details
    const fetchUserData = async () => {
      try {
        const response = await axios.post("http://localhost:3001/Login", {
          email: "test@example.com", // Replace with actual email
          password: "password123",   // Replace with actual password
        });
        if (response.data === "Success") {
          setUsername(response.data.name || defaultUsername); // Adjust to API response
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [defaultUsername]);

  return (
    <>
      <div className="divider"></div>
      <div className="Profile">
        <div className="userSection">
          <section className="profileImg">
            {userImg ? (
              <img src={props.userImg} alt="" />
            ) : (
              <svg
                height={40}
                width={40}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7l450.6 0c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320l-189.4 0z" />
              </svg>
            )}
          </section>
          <section className="profileName">
            {/* {username ? <h2>{username}</h2> : <h2>{props.username}</h2>} */}
            <h2>{username}</h2>
            <button>Edit Profile</button>
          </section>
        </div>
        <section className="DetailButton">
          <button>My Orders</button>
          <button>Premium</button>
        </section>
        <section className="detailsSection">
          <h1>ACCOUNT SPECIFIC DETAILS</h1>
          <ul>
            <li>My Wishlist</li>
            <li>Available Free Trial</li>
            <li>My Saved Address</li>
            <li>Saved Payment Method</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Profile;
