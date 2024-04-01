import './Content.scss'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Content = () => {
    const [joke,setJoke] = useState('')
    const [err,setErr] = useState('')
    let hasReachedEnd = false;
    const getNextJoke = async () => {
        if (hasReachedEnd) {
            const dataSet = {
                "content": "That's all the jokes for today! Come back another day!",
                "id": 5,
                "votes": 0,
                "created_at": "2024-03-30T20:20:49.000Z"
            }
            setJoke(dataSet);
            return;
        }
        const apiUrl = "http://localhost:3001/next";
        // const apiUrl = 'https://backend-ot8g.onrender.com/'
        const lastJokeId = joke ? joke.id : 'null'
        console.log(lastJokeId)
        if (lastJokeId == 5) {console.log("Oke"); return;}
        try {
            const response = await axios.post(apiUrl, {lastJokeId});
            if (response) {
                console.log(response)
                console.log('Type: ', typeof response.data.data)
                if (typeof response.data.data === 'string') {
                    console.log('end')
                    hasReachedEnd = true;
                    const dataSet = {
                        "content": "That's all the jokes for today! Come back another day!",
                        "id": 5,
                        "votes": 0,
                        "created_at": "2024-03-30T20:20:49.000Z"
                    }
                    setJoke(dataSet);
                }
                else {
                setJoke(response.data.data);
                }
            }
            else {
                console.error('Error fetching next joke');
            }
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getNextJoke();
    },[])
    console.log('Joke', joke)
    return (
        <div className = "content">
            <div className = "pcontent">
            {joke && (  
              <p className = "story">{joke.content}</p>
                
            )}
             </div>
            <hr className='hr' size = "1px"/>
            <div className = "button">
            <button className = "fun-button" onClick = {getNextJoke}>This is Funny!</button>
            <button className = "no-button" onClick = {getNextJoke}>This is not funny.</button>
             </div>
            
        </div>
    )
}
export default Content