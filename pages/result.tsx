import Link from 'next/link';
import { GetServerSideProps } from 'next'
import {useRouter} from 'next/router';
import Search from '../components/Search';
import { Layout } from '../components/Layout';


import {useState} from 'react';
// import ReactPaginate  "react-paginate";

 
const LessonRes = (props: any) => {

  
  let {people, query} = props;  
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(query);
  const [currentPage, setCurrentPage] = useState(0);


  // const handlePagination = (page:any) => {
  //   setCurrentPage(page);

  //   const currentPath = router.pathname
  //   const currentQuery = router.query
  //   currentQuery.page  = page.selected + 1;

  //   router.push({
  //     pathname: currentPath,
  //     query: currentQuery,
  //   });
    
  // }

  const PER_PAGE = 10;

  const mapRes = people.map( (person: any, i:number)=>(
    <div key={i}>
      <h2>{person.name}</h2>
    

    </div>
  ))

   return(
   <div className="container">
     <h1> Search results</h1>
     <Link href="/">
          <a>Home</a>
      </Link>
      <p></p>
     
     <Search people={people}/>


      {mapRes}

      {/* <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
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
            /> */}

   </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ( context ) => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // // the component.

  const {query} = context.query;

  const page =  context.query.page || "1" ;


  const res = await fetch('https://swapi.dev/api/people/?search=${query'); //&size=${20}

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
