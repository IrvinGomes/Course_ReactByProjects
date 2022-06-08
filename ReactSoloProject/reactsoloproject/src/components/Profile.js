import React from "react";
import '../styles/Profile.css'
import ProfilePic from '../Images/profile--pic.png'

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile--img">
                <img src={ProfilePic} />
            </div>
            <div className="profile--content">
                <h2 className="profile--name">Irvin Gomes</h2>
                <p className="profile--position">Development Engineer</p>
                <div className="profile--btns">
                    <button className="profile--btn_email"><img src="https://cdn-icons-png.flaticon.com/512/712/712040.png" /><span>Email</span></button>
                    <button className="profile--btn_linkedin"><img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" /><span>LinkedIn</span></button>
                </div>
                <div className="profile--info">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h3>Interests</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}