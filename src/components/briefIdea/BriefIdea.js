import React from "react";
import { useSelector } from "react-redux";

import './BriefIdea.css'

const BriefIdea = ({ name, description, stack }) => {
    const { stacks } = useSelector((state) => state.data)
    const stackList = stack.map(item => stacks.find((i) => i.id === item).name).map(item => {
        return (
            <li>{item}</li>
        )
    })



    return (
        <div className="briefIdea">
            <h2>{name}</h2>
            <div style={{ border: '2px solid #000000', backgroundColor: '#000000' }}></div>
            <div>{description}</div>
            <ul>{
                stackList}
            </ul>
        </div>
    )
}

export default BriefIdea
