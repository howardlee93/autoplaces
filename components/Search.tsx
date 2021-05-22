
import {useRouter} from 'next/router';
import Head from 'next/head';

import {useState} from 'react';

const Seearch = () =>{


    const keys = {
        ENTER: 13,
        UP: 38,
        DOWN: 40
    };
    const [searchTerm, setSearchTerm] = useState("");

    const [filteredResults, updateFilteredResults] = useState([]);


    const router = useRouter();
  
    const handleChange = (e:any) => {
      setSearchTerm(e.target.value);
      console.log(searchTerm);
  
    };
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      alert("you have searched for!");
  
      router.push(`/lesson?query=${searchTerm}`);
  
      // or you can send data to backend
    };
  
    const handleKeypress = (e:any) => {
        //it triggers by pressing the enter key
  
      if (e.keyCode === 13) {
        handleSubmit(e);
      }
    }
  
    return(
      <div> 
        <h1>Home</h1>
  
        <p>{keywords}</p>
        <form>
        <input 
  
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={(e)=>handleKeypress(e)}
        />
        <p></p>
        <Suggestion keywords={
          ["java", "python","c++", "programming", "windows", "unix", "os", "c", "california","history","mathematics",
        "college"]
        }
  
        />
        <p></p>
        <button onClick={handleSubmit} type="submit">
            Submit
        </button>
        </form>
      </div>
      
    )
  }

}