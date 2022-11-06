import React, { useEffect } from "react";

import BriefIdea from "../briefIdea/BriefIdea";

import './IdeasFeed.css'

import heed from '../../images/heed.png';
import { useSelector } from "react-redux";

const IdeasFeed = () => {

    const allIdeas = useSelector(state => state.data.allIdeas);

    const list = allIdeas.map(item => {
        return (
            <li key={item.id} >
                <BriefIdea
                    name={item.name}
                    description={item.description}
                    stack={item.stack} />
            </li>)
    })

    return (
        <div className="feed">
            <div className="black_feed"> <h2>Лента идей</h2><img className="heed" src={heed}></img></div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default IdeasFeed

