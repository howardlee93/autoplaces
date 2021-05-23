import {useRouter} from 'next/router';
import Head from 'next/head';

import {useState} from 'react';
// import { GetStaticProps } from 'next';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";




const IndexPage = (props: any) => {
  const {keywords} = props;
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  // const handleChange = (value) => {
  //   setSearchTerm(value);
  //   console.log(searchTerm);

  // }; 

 

  const handleSubmit = (e:React.KeyboardEvent) => {
    e.preventDefault();


    router.push(`/lesson?query=${searchTerm}&page=1&size=${10}`);

  };

  const handleKeypress = (e:React.KeyboardEvent) => {

    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }

  return(
    <div className="container"> 
      <h1>Search</h1>

      <form>
      <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={["java", "python","c++", "programming", "windows", "unix", "os", "c", "california","history","mathematics",
      "college"]} 
      onChange={(event,value)=> setSearchTerm(value)}
      onKeyPress={ handleKeypress}
      renderInput={params => (
        <TextField
          {...params}
          label="Search for lessons"
          variant="outlined"
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
      />
      
      <p></p> 
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
