import React, { useState } from "react";
import  {Autocomplete, createFilterOptions } from '@material-ui/lab';
import {TextField} from '@material-ui/core';
import {useRouter} from 'next/router';



interface OptionType {
  id: string,
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  gender: string,
}

const Search = ({people})=>{

  // const people ={ people }

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  const handleChange = (e: any, value:any ) =>{
    setSearchTerm(value);
    setSuggestions(e.currentTarget.value)


  }


  const handleKeyUp = async (e:any) =>{
    if (e.keyCode == 13){


    console.log(searchTerm);
      
    // await setSearchTerm(e.currentTarget.value)

    
    // router.push(`/result?query=${searchTerm}`)
      
    }
  }

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: OptionType) => option.name,
  });

  return(

    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={people}
      filterOptions={filterOptions}
      getOptionLabel={(people) => people.name ? people.name :" "}
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

