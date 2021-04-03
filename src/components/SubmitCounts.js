import React, { useState, useRef, useEffect, useContext, useReducer } from 'react'
import SearchResult from './SearchResult'
// import { getCourses } from "../api/courseApi"
// import { render } from '@testing-library/react';

function SubmitCounts(props){

    const [listToShow, setListToShow] = useState([]);
    const [initialSubmitters, seInitialSubmitters] = useState([props.submitters])
    const [showFromList, setShowFromList] = useState(false)

     function handleSearchWhileType(event){
        const result = event.target.value;
      } //Maybe thos one later
  
      useEffect(() => {
        if (listToShow.length > 0){
            setShowFromList(true);
           
        }
        else{
            setShowFromList(false);
        }

     }, [listToShow]);

     useEffect(() => {
        seInitialSubmitters(props.submitters);
     });
    
    function handleSearch(event){
        event.preventDefault();
        const searchString = event.target.searchInput.value;

        if(event.target.searchInput.value !== ""){
        const emptyArray = [];

        
        for(let i = 0; i < initialSubmitters.length; i++ ){
            if(initialSubmitters[i].firstName.includes(searchString) || initialSubmitters[i].lastName.includes(searchString) || initialSubmitters[i].desc.includes(searchString)){
                 const newArray = emptyArray.slice();
                newArray.push(initialSubmitters[i]);
                emptyArray.push(...newArray);
            }
        }
        emptyArray.map(list => (
            console.log(`We have a list with name ${list.firstName}`)
        ));
        setListToShow(emptyArray);
        
    
        }
        else{
            setListToShow([]);
        }
       
    }

    
    return(
        <>
           <form onSubmit={handleSearch} id="search-form">
            <input type="text" name="searchInput"
            id="searchInput" placeholder="Search for submitter" onChange={handleSearchWhileType}/>
            </form>
            {
                showFromList ?  listToShow.map(list => (
                    <div className="profile" key={list.id} id={list.id}>
                <SearchResult result={list} /> 
                </div>
                )) : 
                initialSubmitters.map(mitter =>(
                     <div className="profile" key={mitter.id} id={mitter.id}>
                    <SearchResult result={mitter} /> 
                    </div> 
                 )) 
                    
            }

          
        </>
    )
}

export default SubmitCounts