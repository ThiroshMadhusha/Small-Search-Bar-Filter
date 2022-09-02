import React, { useState } from "react";
import "./Profile.scss";

import { FaTrashAlt } from "react-icons/fa";

// import profile data
import { profileData } from "../data/ProfileData";

const Profile = () => {
  // For User Profiles
  const [userProfile, setUserProfile] = useState(profileData);
  // arrow Function
  const removeProfile = (id) => {
    console.log(id);
    const newProfileList = userProfile.filter((profile) => profile.id !== id);
    setUserProfile(newProfileList);
  };

  // For Search Bar
  const [search, setSearch] = useState("");
  // Arrow function
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // End Search
  return (
    <section className="profile-sec --flex-center">
      <div className="container">
        <h2 className="--text-light">Search Profile Data</h2>

        {/* For Search Users */}
        <div className="--form-control">
          <input
            type="text"
            placeholder="Search Name"
            className="--width-100"
            onChange={handleInputChange}
            value={search}
          />
        </div>
        {/* End Search */}

        {userProfile
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (value.name.toLowerCase().includes(search)) {
              return value;
            }
          })
          .map((profile) => (
            <div className="profile --card --flex-between" key={profile.id}>
              <img src={profile.img} alt="profile" />
              <div className="desc">
                <h4 className="--text-light">Name: {profile.name}</h4>
                <p className="--text-light">Job: {profile.job}</p>
              </div>
              <FaTrashAlt
                className="icon"
                size={18}
                onClick={() => removeProfile(profile.id)}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Profile;
