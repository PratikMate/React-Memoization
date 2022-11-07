import React, { memo, useMemo } from 'react';
import './App.css';

const Child = ({ counter, updateCounter }) => {
    console.log("Child is Rendering!!!");

    // useMemo
    /* To memoize computed value we can use 'useMemo' hook

    if you are using an heavy computation/task then for every re-render it will be computed again and it will result if lot of loading time in ur app

    so to avoid this use useMemo as follows

    imp -> it will take dependency array same as useEffect
    if there is empty dependency it will do computation only once and memoize it
    */
    let value = useMemo(() => {
        let num = 0;
        for (let i = 0; i < 500000000; i++) {
            num++;
        }
        return num;
    }, [])
  return (
      <div className="Child">
          <h1>Child - {counter}</h1>
          <h1>Computed value - {value}</h1>
          <button onClick={updateCounter}>Click</button>
      </div>
  )
}

export default memo(Child);
/* 
React.memo/memo  --> generally it does shallow comparison
Imp -> React.memo will check if the props that child is receiving are chnaging or not and if they chnages then only child re-render

1] React.memo will render the component only if the props that child receiving get changed.

2] React.memo will help to avoid re-rendering of child if it not getting any props from parent
(as by default if parent re-renders child re-renders)

3] Now we have input tag with onChange function and setting input on onChange, so if we not use React.memo then child will re-render by default

imp -> 4] React.memo also take another parameter for deep compare the props
eg. memo(Child, isEqual);
consider you have declared an array in parent and on every time the array will be re-declared and thus child will reload thus , to avoid this we can use deep comparison
*/