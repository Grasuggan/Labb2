import React, { useState, useEffect} from 'react'
import SearchResult from './SearchResult'
import {SubmitterFrame} from '../css/Styles.js'
import {Input} from '../css/Styles.js'
import { getSubmitters, deleteSubmitters } from '../api/submittersApi';

function SubmitCounts(props){

    const [listToShow, setListToShow] = useState([]);
    const [initialSubmitters, setInitialSubmitters] = useState([props.submitters])
    const [showFromList, setShowFromList] = useState(false)

  
      useEffect(() => {
        if (listToShow.length > 0){
            setShowFromList(true);          
        }
        else{
            setShowFromList(false);
        }
     }, [listToShow]);

     useEffect(() => {
        setInitialSubmitters(props.submitters);
     }, [props.submitters]);
    
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


    function searchType(event){
        event.preventDefault();
        const searchString = event.target.value;

        if(event.target.value !== ""){
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



    
    function removeSubmitter(subId){
         deleteSubmitters(subId).then(getSubmitters().then(_submitters =>  setInitialSubmitters(_submitters)));
        
         
    }
    
    return(
        <React.Fragment>
           <form onSubmit={handleSearch} id="search-form">
            <Input type="text" name="searchInput"
            id="searchInput" onChange={searchType} placeholder="Search for submitter"/>
            </form>
            {
                showFromList ?  listToShow.map(list => (
                    <div className="profile" key={list.firstName + list.lastName} id={list.id}>
                        <SubmitterFrame>
                <SearchResult result={list} removeSubmitter={removeSubmitter}/> 
                </SubmitterFrame>
                </div>
                )) : 
                initialSubmitters.map(mitter =>(
                    <SubmitterFrame key={mitter.firstName + mitter.lastName}>
                     <div className="profile" id={mitter.id}>
                    <SearchResult result={mitter} removeSubmitter={removeSubmitter}/> 
                    </div> 
                    </SubmitterFrame>
                 )) 
                    
            }

          
        </React.Fragment>
    )
}

export default SubmitCounts