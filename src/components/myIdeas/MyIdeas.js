import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Select from 'react-select';

const MyIdeas = () => {
    const id = useSelector(state => state.user.id)
    const { stacks, profession } = useSelector((state) => state.data)

    useEffect(() => {
        fetch(`/api/v1/all_ideas/`)
    }, [])

    const [userData, setUserData] = useState({
        stack: [],
        name: '',
        description: ''
    })

    const handleClick = () => {
        const newIdea = {
            author:id,
            description:userData.description,
            name:userData.name,
            stack:userData.stack.map(item=>item.value)

        }
        
        fetch('/api/v1/user_ideas/', {
            method: 'POST',
            body: JSON.stringify(newIdea),
            headers: { "content-type": "application/json" }
          })

    }

    const styles = {
        control: styles => ({
            ...styles,
            outline: 'none',
            padding: '4px',
            border: 'none',
            cursor: 'pointer',
            color: '#5E6C84',
            width: '400px',
            borderRadius: '8px',
            backgroundColor: '#F5F5F5',
            height: '48px',
            fontSize: '25px',
            paddinLeft: '20px'
            
        }),
        placeholder: styles => ({
            ...styles,

        }),

        option: styles => ({
            ...styles,
            cursor: 'pointer',
            fontSize: '25px',
            paddinLeft: '20px'
        })
    }

    const stacksList = stacks.map((item) => {
        return {
            value: item.id,
            label: item.name
        }
    })

    return (

        <div>
            <h1>My Ideas</h1>
            <button
                onClick={handleClick}
                className="autorization"> ADD IDEA</button>

            <div>
                Название:
                <input
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}>
                </input>
                Описание:
                <textarea
                    value={userData.description}
                    onChange={(e) => setUserData({ ...userData, description: e.target.value })}>
                </textarea>
                Нобходимые навыки:
                <Select
                    placeholder='Выберите необходимые навыки'
                    styles={styles}
                    onChange={(e) => setUserData({ ...userData, stack: e })}
                    className="basic-single"
                    isMulti
                    options={stacksList}
                ></Select>

            </div>
<button
className="autorization"
onClick={()=>{
    fetch('/api/v1/comment/20/')
}}>FETCH</button>
        </div>


    )
}
export default MyIdeas