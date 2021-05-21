import Link from 'next/link'
import {useRouter} from 'next/router';
import Head from 'next/head';
import Search from '../components/Search';

import {useState} from 'react';


const IndexPage = ( ) => {
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
      <form>
      <input 

      value={searchTerm}
      onChange={handleChange}
      onKeyPress={(e)=>handleKeypress(e)}
      />
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

//   return{
//     props: data
//   } 

// }
