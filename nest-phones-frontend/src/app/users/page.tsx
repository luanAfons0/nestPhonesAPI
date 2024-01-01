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
    const [mode, setMode] = useState<PaletteMode>('light')

    const theme = createTheme({
        palette: {
            mode: mode
        }
    })

    const toggleTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light')
    }

    const fetcher = (url: string) => fetch(url,{headers:{'x-api-key':'validation_key1'}}).then(res => res.json())
    const URL = "http://localhost:3001/api/users"
    const { data, error, isLoading } = useSWR<User[]>(URL, fetcher)

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ height: '100vh', borderRadius: 0 }}>
                <Container maxWidth={'xl'} sx={{ paddingBottom: 2 }}>
                    <Navbar toggleTheme={toggleTheme} />
                    <Pagination />
                    <ul>
                        {data? data.map((user)=>{
                            return(
                                <li>{user.name}</li>
                            )
                        }) : 'deu ruim rapaize'}
                    </ul>
                </Container>
            </Paper>
        </ThemeProvider>
    )
}