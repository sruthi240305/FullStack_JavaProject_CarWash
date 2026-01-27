import React from 'react'

export default function Profile(){
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar-large">D</div>
          <div>
            <h2>Dhaksita</h2>
            <p className="muted">New Member</p>
          </div>
        </div>

        <ul className="profile-menu">
          <li>Edit Profile</li>
          <li>My Vehicles</li>
          <li>Payment Method</li>
          <li>Settings</li>
          <li className="signout">Sign Out</li>
        </ul>
      </div>
    </div>
  )
}
