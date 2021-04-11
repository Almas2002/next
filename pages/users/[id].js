import {useRouter} from "next/router";
export default function ({user}) {
    const router = useRouter();
    console.log(router.query.id)
    return(
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const user = await res.json();

    if (!user) {
        return {
            notFound: true,
        }
    }

    return {
        props: {user}, // will be passed to the page component as props
    }
}