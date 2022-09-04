import React from 'react';
import ResumePDF from "./Resume.pdf"
import "./Resume.css"
function Resume() {
return(
  <div class="resume">
    <h1 class="title"> 
      Resume
    </h1>
    <object height="1040" data={ResumePDF} type="application/pdf" width="960">
        <a href={ResumePDF} >Do not have the proper PDF plugin so download to view resume</a>
    </object>
  </div>

)
}
export default Resume;