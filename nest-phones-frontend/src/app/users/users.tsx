'use client'

import React, { useState, useEffect } from "react"

type User = {
    id: string,
    name: string,
    email: string
}

export default function UsersGrid() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch('http://localhost:3001/api/users', { headers: { 'x-api-key': 'validation_key1' } })
            if (!res.ok) {
                throw new Error('Falha ao receber usuarios')
            }
            const data: User[] = await res.json()
            setUsers(data)
        }
        getUsers().catch(e=>{
            console.log("Ocorreu um error enquanto recebiamos os usuarios....",e)
        })
    }, [])

    return (
        <>
            <h1>teste</h1>
            {users? users.map(user=>{
                 return (
                    <ul key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                    </ul>
                )
            }) : 'esta carregando'}
        </>
    )
}