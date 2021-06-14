import React, { useState } from "react";
import  {Autocomplete, createFilterOptions } from '@material-ui/lab';
import {TextField} from '@material-ui/core';
import axios from 'axios';
import {useRouter} from 'next/router';

import {getPlaces} from '../utils/api_util';


interface OptionType {
  suggestion: string;
  count: number;
}

const Search = ()=>{

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  const handleChange = (e: any, value:any ) =>{
    setSearchTerm(value);


    getPlaces(`${e.currentTarget.value}`)

    .then( res => ( setSuggestions((res.data.data.items) 
    )));

  }


  const handleKeyUp = async (e:any) =>{
    if (e.keyCode == 13){

    // await setSearchTerm(e.currentTarget.value)
    router.push(`/result?query=${searchTerm}`)
      
    }
  }

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: OptionType) => option.suggestion,
  });

  return(

    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={suggestions}
      filterOptions={filterOptions}
      getOptionLabel={(suggestions) => suggestions.suggestion ? suggestions.suggestion :" "}
      onInputChange={handleChange}
      onKeyUp={ handleKeyUp}
      renderInput={params => (
        <TextField
          {...params}
          label="search"
          margin="normal"
          variant="outlined"
        />
      )}
    />

  )
};


export default Search;

