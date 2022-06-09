import React from "react";
import '../styles/Content.css';
import Data from '../data/data.js';

import Travel from "./Travel";

export default function Content() {

    const travel = Data.map((travel, i) => {
        return (
            <Travel {...travel} key={i} />
        )
    })

    return (
        <div className="content">
            {travel}
        </div>
    )
}