import { useState, useCallback, useEffect } from "react";

const useCounter = () => {
   const [number, setNumber] = useState(0);
   const [statusMin, setStatusMin] = useState(true);
   const [statusMax, setStatusMax] = useState(false);

   const handleClick = useCallback(
      e => {
      const {innerText} = e.target;

      if (innerText === '-') {
         setNumber((prevState) => Number(prevState) - 1 )
      } else {
         setNumber((prevState) => Number(prevState) + 1 )
      }
      }, []
   )


   useEffect(() => {
      if (number === 0) {
      setStatusMin(true)
      setStatusMax(false)
      }

      if(number === 10) {
      setStatusMin(false)
      setStatusMax(true)
      }

      if (number >= 1 && number <= 9) {
      setStatusMin(false)
      setStatusMax(false)
      }
   }, [number]);

   return {number, statusMin, statusMax, handleClick}

}

export default useCounter