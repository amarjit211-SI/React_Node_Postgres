import React from 'react';
import '../../CSS/Profile.css';

const Profile = () => {
  // Sample data for the user's profile
  const user = {
    name: 'rahul',
    selectedGame: 'Chess', // Replace with the user's selected game
    selectedVenue: 'KoraKendra Ground',
    profileImageUrl: 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', // Replace with the URL of your online image
  };

  // Style for the circular profile image
  const profileImageStyle = {
    width: '20%',
    height: '20%',
    borderRadius: '50%', // Makes the image circular
  };

  return (
    <div className="profile-container">
      {/* Add the circular profile image with the online image URL */}
      <img src={user.profileImageUrl} alt="Profile" style={profileImageStyle} />

      <div className="profile-details">
        <h2>{user.name}</h2>
        <p>Selected Game: {user.selectedGame}</p>
        <p>Selected Venue: {user.selectedVenue}</p>
      </div>
    </div>
  );
};

export default Profile;
