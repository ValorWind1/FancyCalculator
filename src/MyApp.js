import React,{useState} from "react"
import "./App.css"

const MyApp = () => {

    const [numbers,setNumbers] = useState([])
    const [userNumber , setUserNumber ] = useState({number : " "})
    const [total , setTotal] = useState()

    const inputHandler = (event) => {
        setUserNumber({number : event.target.value })
    }

    const clickHandler = () => {
        const array1 = [...numbers]
        const myArray = array1.concat(userNumber.number)
        setNumbers(myArray)
    }

   const removeHandler = (index) => {
       const array1 = [...numbers]
       array1.splice(index,1)
       console.log(index)
       setNumbers(array1)
   }

   const totalHandler = () => {     
        // CAHNGE ARRAY OF STRING TO ARRAY OF NUMBERS 
      const arrayofNumbers = numbers.map(Number);
       let total =0;
       for (let i = 0 ; i < arrayofNumbers.length ; i++){
         total += arrayofNumbers[i] 
       }
       setTotal(total)  
   }

 const style1= {    
    color : "white"
 }

 const style2= {    
    color : "DarkGoldenRod"
 }

    return(
        <div className="div1">
        <h1 style={style1} >Enter your Numbers </h1>
            <input type="number" value={userNumber.number} onChange={inputHandler} />
            <h1 style={style1} onClick={clickHandler}> Current Number :{`  ${userNumber.number}`}</h1>
            {numbers.map((i,index) => {
                return <h4 style={style1} key={index} onClick={() => removeHandler(index)}>Numbers: {i}</h4>
            })}
            <button style={{backgroundColor:"Snow",marginTop:"20px"}} onClick={totalHandler}>Total !</button>

            {(total > 0 )? <hr /> : null}
            {(total > 0 ) ? <h4 style={style2}>Total:{total}</h4> : null }
            
        </div>
    )
}


export default MyApp