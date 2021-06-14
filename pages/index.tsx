import Head from 'next/head';

import Search from '../components/Search'

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'


import {people} from '../utils/dummydata';



const IndexPage = () => {

  return(
    <div>
    <Head>
      <title>auto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container"> 

      <h1>Search</h1>
    <Search people={people}/>
    </div>
    </div>

    
  )
}

export default IndexPage;



// export const getStaticProps: GetStaticProps = async (context) => {
//   // ...
// }
