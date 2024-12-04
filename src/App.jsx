import React from 'react'
import Button from './components/Button';
import Total from './components/Total';
import styles from './App.module.css';
import useCounter from './hooks/useCounter'
import useHuman from './hooks/useHuman';

const App = () => {
  const {number, statusMin, statusMax, handleClick} = useCounter()
  const {isHuman, handleCheck} = useHuman()

  return <div className={`${styles.app}`}>
      <Total value={number} className={`${styles.total}`}/>
      <div className={`${styles.buttons}`}>
        <Button type="button" value="-" className="btn btn-danger" onClick={handleClick} status={statusMin}/>
        <Button type="button" value="+" className="btn btn-success" onClick={handleClick} status={statusMax}/>
      </div>
      <h3>Are you human?</h3>
      <label htmlFor="chk"><input 
        type="checkbox"
        checked={isHuman}
        onChange={handleCheck}
        name="chk"
        id="chk"
      /> Sim/Não</label>
      <h1>
        {
          isHuman ? 'Sim' : 'Não'
        }
      </h1>
    </div>
}

export default App
