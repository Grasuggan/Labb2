import React, { useState, useEffect} from 'react'
import SearchResult from './SearchResult'
import {SubmitterFrame} from '../css/Styles.js'
import {Input} from '../css/Styles.js'

function SubmitCounts(props){

    const [listToShow, setListToShow] = useState([]);
    const [initialSubmitters, seInitialSubmitters] = useState([props.submitters])
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
        seInitialSubmitters(props.submitters);
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

    
    return(
        <React.Fragment>
           <form onSubmit={handleSearch} id="search-form">
            <Input type="text" name="searchInput"
            id="searchInput" placeholder="Search for submitter"/>
            </form>
            {
                showFromList ?  listToShow.map(list => (
                    <div className="profile" key={list.id} id={list.id}>
                        <SubmitterFrame key={list.id}>
                <SearchResult result={list}/> 
                </SubmitterFrame>
                </div>
                )) : 
                initialSubmitters.map(mitter =>(
                    <SubmitterFrame key={mitter.id}>
                     <div className="profile" key={mitter.id} id={mitter.id}>
                    <SearchResult result={mitter} /> 
                    </div> 
                    </SubmitterFrame>
                 )) 
                    
            }

          
        </React.Fragment>
    )
}

export default SubmitCounts