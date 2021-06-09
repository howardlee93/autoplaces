import Link from 'next/link';
import { GetServerSideProps } from 'next'
import {useRouter} from 'next/router';
import Search from '../components/Search';
import {searchPlacesURL} from '../constants/constants';



import {useState} from 'react';
import ReactPaginate from "react-paginate";

 
const LessonRes = (props: any) => {

  
  let {items, query} = props;  
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(query);
  const [currentPage, setCurrentPage] = useState(0);


  const handlePagination = (page:any) => {
    setCurrentPage(page);

    const currentPath = router.pathname
    const currentQuery = router.query
    currentQuery.page  = page.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
    
  }

  const PER_PAGE = 10;

  // const offset = currentPage * PER_PAGE;

  // const currentPageData = data
  //   .slice(offset, offset + PER_PAGE)
  //   .map(({ thumburl }) => <img src={thumburl} />);

  // const pageCount = Math.ceil(data.length / PER_PAGE);


  const mapRes = items.map( (item: any, i:number)=>(
    <div key={i}>
      <h2>{item.title}</h2>
      <p>Teacher:{item.teacherNames}</p>

      <p>{item.content}</p>
      <p>Keywords: {item.keywords}</p>

    </div>
  ))

   return(
   <div className="container">
     <h1> Search results</h1>
     <Link href="/">
          <a>Home</a>
      </Link>
      <p></p>
     
     <Search/>


      {mapRes}

      <ReactPaginate
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


  const res = await fetch(searchPlacesURL+`input=${query}&page=${page}&size=${10}`); //&size=${20}

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