import Link from 'next/link';
import { GetServerSideProps } from 'next'
import {useRouter} from 'next/router';
import Search from '../components/Search';


import {useState} from 'react';

 
const LessonRes = (props: any) => {

  
  let {results} = props;  
  let searchRes = results[0]
  

   return(
   <div className="container">
     <h1> Search results</h1>
     <Link href="/">
          <a>Home</a>
      </Link>
      <p></p>
     
     {/* <Search people={people}/> */}


      <h1>{searchRes.name}</h1>



   </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ( context ) => {

  const {query} = context.query;

  const res = await fetch(`https://swapi.dev/api/people/?search=${query}`); 

  const data = await res.json();
  let results = data.results;

  return{
    props: {
      results  
    }
  } 
}


export default LessonRes;
