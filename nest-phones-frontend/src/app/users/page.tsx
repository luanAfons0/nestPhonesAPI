'use client'

import { Container, PaletteMode, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Navbar from '../../_components/navbar'
import Pagination from '../../_components/pagination'
import useSWR from 'swr';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type User = {
    name: string,
    id: string,
    email: string
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
    const fetcher = (url: string) => fetch(url, { headers: { 'x-api-key': 'validation_key1' } }).then(res => res.json())
    const URL = `http://localhost:3001/api/users?page=${page}`
    const { data, error, isLoading } = useSWR<User[]>(URL, fetcher)

    //render ui
    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{borderRadius: 0 , minHeight:"100vh"}}>
                <Container maxWidth={'xl'} sx={{ paddingBottom: 2 }}>
                    <Navbar toggleTheme={toggleTheme} />
                    <Pagination setIndexPage={setPage} />
                    <Paper elevation={3} sx={{ marginTop: 5 , padding:5}}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',height:'80%'}} >
                                {!isLoading ? data?.map((user)=>(
                                <Grid key={user.id} item xs={4}>
                                    <Item sx={{height:'200px'}}>
                                        <Typography>{user.name}</Typography>
                                        <Typography>{user.email}</Typography>
                                    </Item>
                                </Grid>
                                )): 'ta carregando'}
                            </Grid>
                        </Box>
                    </Paper>
                </Container>
            </Paper>
        </ThemeProvider>
    )
}