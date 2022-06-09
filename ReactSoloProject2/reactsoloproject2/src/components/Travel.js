import React from "react";
import '../styles/Travel.css'

export default function Travel(props) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let date = new Date(props.startDate)
    let sDate = `${date.getDate()} ${monthNames[date.getMonth() - 1]}, ${date.getFullYear()}`;
    date = new Date(props.endDate)
    let eDate = `${date.getDate()} ${monthNames[date.getMonth() - 1]}, ${date.getFullYear()}`;

    return (
        <div className="travel">
            <div className="travel--img" >
                <img src={props.imageUrl} alt="" />
            </div>

            <div className="travel--body">

                <div className="travel--body_mapconfig">
                    <img className="travel--body_pin" src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="" />
                    <h4 className="travel--body_location">{props.location}</h4>
                    <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                </div>

                <h2 className="tavel--body_title">{props.title}</h2>
                <h4 className="tavel--body_dates">{sDate} - {eDate}</h4>
                <p className="tavel--body_description">{props.description}</p>

            </div>
        </div>
    )
}