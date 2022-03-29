import { useState } from "react";


const Counter = (props) => {

    const [likes, setLikes] = useState(5);
    const [value, setValue] = useState('Text')

    return(
    <div>
        <p>Вы кликнули {likes} раз(а)</p>
    <h1>{value}</h1>
      <button onClick={() => setLikes(likes + 1)}>+</button>
      <button onClick={() => setLikes(likes - 1)}>-</button>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} />
    </div>
    )
}

export default Counter;