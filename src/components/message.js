// import React, { Component } from 'react';
import React from 'react';
// import {  Redirect} from 'react-router-dom'




export const Message = (props) => {
    


    const param = props[0].match.params.slug;
    const entries = props.entries;

    const selected = entries.filter((item) => item.fields.slug === param)
                            .map((item, index) =>  item.fields);

    // selected.map((item, index) => console.log(item.fields));

    const {title , content} = selected[0];    



    return (
        <div>
         <h3>Message</h3>
           <title>{title}</title> 
         <h2><i>{param}</i></h2>
            <p>{content}</p>

        
        </div>

    );
}


// export class Message extends Component {
//     constructor(props){
//       super(props)
  
//       this.state = {
//           selected_items:this.props.entries
//       }
    
//         console.log(this.props);
//   }
  



  
//     render() {

//         if(!this.props[0].match.params.slug){
//             return (
                           
//                  <Redirect push to="/inbox"/> 
               
//             )};

//         const param = this.props[0].match.params.slug;
//         // const entries = this.props.entries;
//         // const entries = this.props.entries;
//         const entries = this.state.selected_items;

        
//         const selected = entries.filter((item) => item.fields.slug === param)
//                                 .map((item, index) =>  item.fields);

//         // selected.map((item, index) => console.log(item.fields));
        
        

//         const {title , content} = selected[0];    

//       return (
//         <div>
//         <h3>Message</h3>
//           <title>{title}</title> 
//         <h2><i>{param}</i></h2>
//            <p>{content}</p>

       
//        </div>
//       );
//     }

 
//   }
  

  