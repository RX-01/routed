// import React, { Component } from 'react';
import React from 'react';
// import {  Redirect} from 'react-router-dom'




export const Message = (props) => {
    

    const param = props.match.params.slug;
    const entries = props.location.state.posts;
 
    const selected = entries.filter((item) => item.fields.slug === param)
                            .map((item) =>  item.fields);

   
    const {title , content} = selected[0];    
   

    return (
        <div>
         <h3>Message</h3>
    
         <h2><i>{title}</i></h2>
            <p>{content}</p>

        
        </div>

    );
}



  

  