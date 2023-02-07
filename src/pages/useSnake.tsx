import React, { useState } from "react";

const CONST_WIDTH = 8;
const CONST_HEIGHT = 8;

const useSnake = () => {
  
  const [snakeMap, setSnakeMap] = useState([]); 
  
  const initLoad = () => {
    for (let i = 0, j = CONST_WIDTH; i < j; i++) {
      for (let m = 0, n  = CONST_HEIGHT; m < n; m++) {
        console.log('m - n', m, n);
      }
    }
  }

  return {
    snakeMap, 
    
  }
}

export default useSnake;