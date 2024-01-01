'use client'

import { Container, PaletteMode, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Navbar from '../../_components/navbar'
import Pagination from '../../_components/pagination'
import useSWR from 'swr';

type User = {
    name: string,
    id: string,
    email: string
}

export default function UsersPage() {

    // dark mode
    const [mode, setMode] = useState<PaletteMode>('light')

    const theme = createTheme({
        palette: {
            mode: mode
        }
    })

    const toggleTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light')
    }

    //pagination system
    const [page,setPage] = useState(0)

    //fetch data
    const fetcher = (url: string) => fetch(url, { headers: { 'x-api-key': 'validation_key1' } }).then(res => res.json())
    const URL = `http://localhost:3001/api/users?page=${page}`
    const { data, error, isLoading } = useSWR<User[]>(URL, fetcher)

    //render ui
    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ height: '100vh', borderRadius: 0 }}>
                <Container maxWidth={'xl'} sx={{ paddingBottom: 2 }}>
                    <Navbar toggleTheme={toggleTheme} />
                    <Pagination setIndexPage={setPage} />
                    <ul>
                        {data ? data.map((user) => {
                            return (
                                <li key={user.id}>{user.name}</li>
                            )
                        }) : 'Carregando...'}
                    </ul>
                </Container>
            </Paper>
        </ThemeProvider>
    )
}