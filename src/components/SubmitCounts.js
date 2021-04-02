import React, { useEffect } from 'react'
import Submitted from './Submitted.js'
// import { getCourses } from "../api/courseApi"
// import { render } from '@testing-library/react';

function SubmitCounts(props){


     let submitters = null;

    //  useEffect(() => {
    //     getCourses().then(function(courses){
    //         //Setstate
    //     })
       //     courseApi.saveCourses(course)
    // })

    // renderSearch() {
    //     course => {
    //         return (
    //             <tr>
    //                 <td key={course.something}>{course.title}</td>
    //             </tr>
    //         );
    //     }
    // }

    // return (
    //     {state.courses.map(renderRow)}
    // )


    // CoursePage.propTypes = {
    //     author: Proptypes.number.isRequired,
    //     firstName: Proptypes.array.isRequired,
            // anArray: Proptypes.arrayOf(Proptypes.shape({
            //     id: Proptypes.number.isRequired,
            //     title: Proptypes.string.isRequired
            // })).isRequired,
    //     desc: Proptypes.object,
    //     something: Proptypes.func.isRequired
    // }
    // //Will return error at runtime if something is wrong

    // CoursePage.defaultProps = {
    //     errors: {}
    // }
    ////Sets the erros to an empty object if this props isnt passed in




     //Make a select drop down of submitters to change info about each one and save to new list, maybe with custom hook outside Contact form? https://reactjs.org/docs/hooks-custom.html
     //https://github.com/pkellner/pluralsight-course-using-react-hooks

     
     //Create new component with all submitters
     //Make a search function that searches through all submitters in new component axios
    if(props.submitters.length){
        submitters = props.submitters.map(submitter => (
            <div className="profile" key={submitter.id}>
            <div className="info">
              <div>{submitter.firstName } {submitter.lastName}</div>
              <div className="description"><span>Description:</span> {submitter.desc}</div>
           </div>
       </div>
        ))
    }


 

    return(
        <>
            <div>Here comes a lot of submitters</div>
            {submitters}

          
        </>
    )
}

export default SubmitCounts