import {useRouter} from 'next/router';
import Head from 'next/head';

import {useState} from 'react';
// import { GetStaticProps } from 'next';

import Suggestion from '../components/Suggestion';



const IndexPage = (props: any) => {
  const {keywords} = props;
  const [searchTerm, setSearchTerm] = useState("");

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
      {/* <Suggestion keywords={
        ["java", "python","c++", "programming", "windows", "unix", "os", "c", "california","history","mathematics",
      "college"]
      }

      />
      <p></p> */}
      <button onClick={handleSubmit} type="submit">
          Submit
      </button>
      </form>
    </div>
    
  )
}

export default IndexPage;

// export async function getStaticProps(){
//   const res = await fetch('http://iteachlti.com:3001/api/public/es/lessons?query=*&page=1&size=10');

//   const data = await res.json();

//   // let keywords = data.data.items.keywords;

//   return{
//     props: {
//       // keywords
//     }
//   } 

// }
