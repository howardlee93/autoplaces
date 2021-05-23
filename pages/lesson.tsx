import Link from 'next/link';
import { GetServerSideProps } from 'next'
import {useRouter} from 'next/router';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import {useState} from 'react';
import ReactPaginate from "react-paginate";

 
const LessonRes = (props: any) => {

  
  let {items, query} = props;  
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(query);


  const handleChange = (e:any) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);

  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // alert("you have searched for!");

    router.push(`/lesson?query=${searchTerm}`);

  };

  const handleKeypress = (e:any) => {

    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }

  const handlePagination = (page:any) => {
    const currentPath = router.pathname
    const currentQuery = router.query
    currentQuery.page  = page.selected + 1;

    // router.push(`/lesson?query=${searchTerm}&page=${currentQuery.page}&size=${20}`);

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
    
  }

  const mapRes = items.map( (item: any, i:number)=>(
    <div key={i}>
      <h2>{item.title}</h2>
      <p>{item.content}</p>

    </div>
  ))

   return(
   <div className="container">
     <h1> Search results</h1>
     <Link href="/">
          <a>Home</a>
      </Link>
      <p></p>
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

      <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}

                initialPage={props.currentPage - 1}
                pageCount={props.pageCount} //page count
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePagination}
            />

   </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ( context ) => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.

  const {query} = context.query;

  const page =  context.query.page || "1" ;


  const res = await fetch(`http://iteachlti.com:3001/api/public/es/lessons?query=${query}&page=${page}&size=${10}`); //&size=${20}

  const data = await res.json();
  let items = data.data.items;

  return{
    props: {
      items,
      query  
    }
  } 
}


export default LessonRes;
