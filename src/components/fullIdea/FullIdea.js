import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { newComment, setComment } from "../../storage/slises/dataSlise";

const FullIdea = () => {
    const dispatch = useDispatch();
    const params = useParams();


    useEffect(() => {
        dispatch(setComment(params.cardId))
    }, [])

    const [text, setText] = useState('')

    const { stacks, allIdeas, comments } = useSelector((state) => state.data)
    const id = useSelector(state => state.user.id)

    const { name, description, stack } = allIdeas.find((item) => item.id == params.cardId)


    const stackList = stack.map(item => stacks.find((i) => i.id === item).name).map(item => {
        return (
            <li key={item}>{item}</li>
        )
    })

    const commentsList = comments.map((item) => {
        return (
            <div key={item.id}>
                <h4>{'User'}</h4>
                <span>{item.text}</span>
            </div>
        )
    })



    return (
        <div className="fullIdea">
            <h2>{name}</h2>
            <div style={{ border: '2px solid #000000', backgroundColor: '#000000' }}></div>
            <div>{description}</div>
            <ul>{
                stackList}
            </ul>
            <h3>Оставить коментарий</h3>
            <textarea
                className="description"
                value={text}
                onChange={(e) => setText(e.target.value)}
            >
            </textarea>
            <button
                className="send_comment"
                onClick={() => {
                    fetch('/api/v1/comment/', {
                        method: 'POST',
                        body: JSON.stringify({
                            idea: params.cardId,
                            author: id,
                            text: text
                        }),
                        headers: { "content-type": "application/json" }
                    });
                    dispatch(newComment({
                        idea: params.cardId,
                        author: id,
                        text: text
                    }));
                    setText('');
                }}>отправить комментарий</button>
            <div className="comment">
                <h3>Коментарии</h3>
                {commentsList}
            </div>

        </div >


    )
}

export default FullIdea