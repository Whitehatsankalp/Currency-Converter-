//we will be creating custom hooks in most of the cases these custom hooks return js thats why we name it as .js 
//custom hooks are nothing but a function that starts with use and resturns some value
//these  hooks can also use other hooks like usestate useeffect etc


import {useEffect , useState} from "react";


function useCurrencyInfo(currency){  
    const [data , setData] = useState(null);
    //mujhe iss function mai api call karni hai lekin mai useEffect ka use karunga taaki mai iss fuction ko tabhi call kru jab iski use ho rha ho
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        //ya toh try catch ka use krna hai ya fir .then ka use krna hai
        .then(Response => Response.json())
        .then(Response => setData(Response[currency]))

    },[currency])
    console.log(data);
    return data; //why we are returning data because we want to use this data in our component
}

export default useCurrencyInfo;


