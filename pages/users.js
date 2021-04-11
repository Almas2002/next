import React from 'react'
import Link from "next/link";



export default function users({data}) {
    const [user,setUser] = React.useState([
        {id:1,name:"almas"},
        {id:2,name:"almasik"}
        ]);
    console.log(data)
    return (
        <div>
            <h1>Hello users</h1>
            {data.map((u)=> <li key={u.id}><Link href={`/users/${u.id}`}><a>{u.name}</a></Link></li>
            )}
        </div>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {data}, // will be passed to the page component as props
    }
}