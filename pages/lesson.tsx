import Link from 'next/link';
import { GetServerSideProps } from 'next'
import {useRouter} from 'next/router';

import {useState} from 'react';

 
const LessonRes = (props: any) => {
  let {items} = props;  
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(router.query);


  const handleChange = (e:any) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);

  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert("you have searched for!");

    router.push(`/lesson?query=${searchTerm}`);

  };

  const handleKeypress = (e:any) => {

    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }


  const mapRes = items.map( (item: any, i:number)=>(
    <li key={i}>
      <h2>{item.title}</h2>
      <p>{item.content}</p>

    </li>
  ))

   return(
   <div>
     <h1> Search results</h1>

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


      {mapRes}

   </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.

  const {query} = context.query;


  const res = await fetch(`http://iteachlti.com:3001/api/public/es/lessons?query=${query}&page=1&size=10`);

  const data = await res.json();
  let items = data.data.items;

  return{
    props: {
      items
    }
  } 
}


export default LessonRes;
