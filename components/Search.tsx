import { on } from 'cluster';
import React, {useState, useEffect} from 'react';


export default function Search({data}: {data: string}){

    const [searchTerm, setSearchTerm] = useState("");


    // useEffect(() =>{
    //     let current = true
    //     fetch(`https://images-api.nasa.gov/search?q=${passed}`)
    //       .then((res) => res.json())
    //       .then((res) => {
    //         if (current) {
    //             setSearchTerm(res)
    //         }
    //       })
    //       .catch((error) => {
    //         console.log('error', error)
    //       })
    //     return () => {
    //       current = false
    //     }
    //   }, [searchTerm])
    // }

    const onChange =()=>{

    }

    return(
        <div>
            <input
                type="text"
                value={searchTerm}
                placeholder="enter query here"
                onChange={onChange}
                />

        </div>
    )

};



