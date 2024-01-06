'use client'

import { CircularProgress, Container, PaletteMode, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Navbar from '../../_components/navbar'
import Pagination from '../../_components/pagination'
import useSWR from 'swr';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '@/_components/footer';
import PhoneModal from '@/_components/phonemodal';

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
    const [page, setPage] = useState(1)

    //fetch data
    const fetcher = (url: string) => fetch(url, { headers: { 'x-api-key': process.env.NEXT_PUBLIC_VALIDATION_KEY1 || '' } }).then(res => res.json())
    const URL = `http://localhost:3001/api/users?page=${page}`
    const { data, error, isLoading } = useSWR<User[]>(URL, fetcher)

    //render ui
    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ borderRadius: 0, minHeight: "100vh", paddingTop: 2 }}>
                <Container maxWidth={'xl'} sx={{ paddingBottom: 2 }}>
                    <Navbar toggleTheme={toggleTheme} />
                    <Pagination setIndexPage={setPage} />
                    <Paper elevation={3} sx={{ marginTop: 2, padding: 5 }}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', height: '80%' }} >
                                {!isLoading ? data?.map((user) => (
                                    <PhoneModal key={user.id} user={user} mode={mode} />
                                )) : <Box sx={{ display: 'flex', justifyContent: 'center', padding: 5 }}>
                                    <CircularProgress />
                                </Box>
                                }
                            </Grid>
                        </Box>
                    </Paper>
                    <Footer />
                </Container>
            </Paper>
        </ThemeProvider>
    )
}