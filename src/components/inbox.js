import React from 'react';
import { Link } from 'react-router-dom'


export const Inbox = (props) => {

    console.log(props.entries);

    return (
        <div>
        <h2>Inbox</h2>
         "Welcome to your Inbox"

         <hr/>
            <ul>
            {props.entries.map((posts,index) => 
                <Link key = {index} to= 
                    {`/inbox/${posts.fields.slug}`}>
                    <li > {posts.fields.title} </li>
                </Link>
            

            )}
            </ul>
            

        </div>

    );
}
