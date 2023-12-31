async function getData() {
    const res = await fetch('https://localhost:3001/api/users',{
        headers:{
            'x-api-key':'validation_key1'
        }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function UsersPage() {
    const data = await getData()

    return (
        <>
            <h1>Users page</h1>
        </>
    )
}