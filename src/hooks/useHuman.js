import { useState, useCallback } from "react";

const useHuman = () => {
   const [isHuman, setHuman] = useState(false);
   const handleCheck = useCallback(() => setHuman((prevState) => !prevState), [])

   return {isHuman, handleCheck}
}

export default useHuman