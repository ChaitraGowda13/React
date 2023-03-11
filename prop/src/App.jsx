import React from "react";
import Course from './components/Course';
const App=()=>
{
    return(
<>
<Course courseDetails={{
 courseName:"JAVA FULL STACK",
 courseAvail: true,
 courseDuration: "3 months"

}}/>
</>
    )

}
export default App