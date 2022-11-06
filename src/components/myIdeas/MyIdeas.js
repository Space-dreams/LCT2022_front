import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from 'react-select';

import heed from '../../images/heed.png';
import { newMyIdea, setMyIdeas, setAllIdeas } from "../../storage/slises/dataSlise";
import BriefIdea from "../briefIdea/BriefIdea";

import './MyIdeas.css'

const MyIdeas = () => {

    const id = useSelector(state => state.user.id)
    const { stacks, myIdeas } = useSelector((state) => state.data)

    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        stack: [],
        name: '',
        description: ''
    })

    const handleClick = () => {
        const newIdea = {
            author: id,
            description: userData.description,
            name: userData.name,
            stack: userData.stack.map(item => item.value)

        }

        fetch('/api/v1/user_ideas/', {
            method: 'POST',
            body: JSON.stringify(newIdea),
            headers: { "content-type": "application/json" }
        })
            .then(() => {
                dispatch(setAllIdeas())
                    .then(() => { dispatch(setMyIdeas(id)) })

            })

        setUserData({
            stack: [{ value: '', label: '' }],
            name: '',
            description: ''
        })


    }

    const styles = {
        control: styles => ({
            ...styles,
            outline: 'none',
            padding: '4px',
            // border: 'none',
            cursor: 'pointer',
            color: '#5E6C84',
            // width: '70%',
            borderRadius: '8px',
            backgroundColor: '#F5F5F5',
            height: '48px',
            fontSize: '18px',
            paddinLeft: '20px'

        }),
        placeholder: styles => ({
            ...styles,

        }),

        option: styles => ({
            ...styles,
            color: '#000000',
            cursor: 'pointer',
            fontSize: '18px',
            // width: '70%',
            paddinLeft: '20px'
        })
    }

    const stacksList = stacks.map((item) => {
        return {
            value: item.id,
            label: item.name
        }
    })


    const list = myIdeas.map(item => {
        return (
            <li key={item.id} >
                <Link
                    to={`/${item.id}`}
                    className="link"
                >
                    <BriefIdea id={item.id} />
                </Link>
            </li>)
    })
    return (

        <div>
            <div className="feed">
                <div className="black_feed"> <h2>Мои идеи</h2><img className="heed" src={heed}></img></div>
                <ul>
                    {list}
                </ul>
            </div>

            <div className="addIdea">
                <h3>Добавить идею</h3>
                Название:
                <input
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}>
                </input>
                Описание:
                <textarea
                    className="dtextAreaMy"
                    value={userData.description}
                    onChange={(e) => setUserData({ ...userData, description: e.target.value })}>
                </textarea>
                Нобходимые навыки:
                <Select
                    placeholder='Выберите необходимые навыки'
                    styles={styles}
                    defaultValue={userData.stack}
                    onChange={(e) => setUserData({ ...userData, stack: e })}
                    className="basic-single"
                    isMulti
                    options={stacksList}
                ></Select>
                <button
                    className="addButtin"
                    onClick={handleClick}
                > Добавить идею</button>


            </div>
        </div>


    )
}
export default MyIdeas