import {useEffect, useState} from "react";

export default function Time() {
    const [time, setTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleString());
        })
    })
  return (
    <h1>
        {time}
    </h1>
  )
}
