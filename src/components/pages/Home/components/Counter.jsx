import {  useState } from 'react'
import reactLogo from '../../../../assets/react.svg'
import viteLogo from '/vite.svg'
import '../../../../App.css'
import { Button } from '../../../../components/Button'

export function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        {count % 2 === 0 ? <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> :
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>}
      </div>
      <h1>{count % 2 === 0 ? "Vite" : "React"}</h1>
      <div className="card" style={{display:"flex",gap:"15px"}}>
        <Button label="Increase" onClick={() => setCount((count) => count + 1)} color="blue" />
        <Button label="Decrease" onClick={() => setCount((count) => count - 1)} color="red" />
      </div>
      <p className="read-the-docs">
      count is {count}
      <Button label={count} onClick={() => {}} color="green" />
      </p>
    </>
  )
}
