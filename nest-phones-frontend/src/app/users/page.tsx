'use client'

import { Container, PaletteMode, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Navbar from '../../_components/navbar'
import Pagination from '../../_components/pagination'
import UsersGrid from './users';

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

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ height: '100vh', borderRadius: 0 }}>
                <Container maxWidth={'xl'} sx={{ paddingBottom: 2 }}>
                    <Navbar toggleTheme={toggleTheme} />
                    <Pagination />
                    <UsersGrid />
                </Container>
            </Paper>
        </ThemeProvider>
    )
}