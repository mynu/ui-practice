
import React from 'react'

export default function Cards(props) {

    const handleClickone=()=>{
        const number = parseInt(prompt('enter the integer:'));
          for(let i= 1; i<=10; i++){
              const result = i * number;
              document.write(`${number} *${i} = ${result} <br>`);
    }
}


    const handleClick =() => {
         document.write('go to facebook web site')
    }

    const handleClicktwo = () => {
         const a = Math.random() * (100-1) + 1
         document.write(`Random value betweenv 1 and 100 is ${a}`)
    }

    
    return (
        <div>
            <h1>Hello {props.name} {props.village}</h1>
            <button onClick={handleClickone}>Click Me for table</button>

            <div>
                <a href='http://www.facebook.com' onClick={handleClick}>Click me for FB site</a>
            </div>
            <button onClick={handleClicktwo}>click random number 1 to 100</button>
            
        </div>
    )
}

