import React from 'react';
import { Link } from 'react-router-dom'


export const Inbox = (props) => {

Inbox.displayname = "Inbox"

    return (
        <div>
        <h2>Inbox</h2>
         "Welcome to your Inbox"

         <hr/>
            <ul>
            {props.entries.map((posts,index) => 


                <Link  key = {index} to={{
                    pathname:  `/inbox/${posts.fields.slug}`,
                    state: { posts: props.entries }
                  }}> 
                  <li > {posts.fields.title} </li> 
                </Link>           

            )}
            </ul>
            

        </div>

    );
}
