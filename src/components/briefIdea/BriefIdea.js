import React from "react";
import { useSelector } from "react-redux";

import './BriefIdea.css'

const BriefIdea = ({ id }) => {

    const { stacks, allIdeas } = useSelector((state) => state.data)
    console.log(allIdeas, id)
    const elem = allIdeas.find((item) => item.id === id);

    const stackList = elem.stack.map(item => stacks.find((i) => i.id === item).name).map(item => {
        return (
            <li key={item}>
                {item}
            </li>
        )
    })



    return (
        <div className="briefIdea">
            <h2>{elem.name}</h2>
            <div style={{ border: '2px solid #000000', backgroundColor: '#000000' }}></div>
            <div>{elem.description}</div>
            <ul>{
                stackList}
            </ul>
        </div>
    )
}

export default BriefIdea
