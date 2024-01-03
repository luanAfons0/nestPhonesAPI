import { Box, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import Link from "next/link";

// custom style for users
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '200px',
    height: '150px',
    color: theme.palette.text.secondary,
}));

// function to get random color
const randomColor = (max: number) => {
    const num = Math.floor(Math.random() * max)
    switch (num) {
        case 0:
            return '#e57373'

        case 1:
            return '#d32f2f'

        case 2:
            return '#ffb74d'

        case 3:
            return '#f57c00'

        case 4:
            return '#4fc3f7'

        case 5:
            return '#0288d1'

        case 6:
            return '#81c784'

        case 7:
            return '#388e3c'

        default:
            return '#0288d1'
    }
}


export default function UserCard({ user, handleOpen }: { user: { id: string, name: string, email: string }, handleOpen: any }) {
    return (
        <Item onClick={handleOpen}>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 1 }}>
                <Box sx={{ backgroundColor: randomColor(8), borderRadius: '50%', width: '50px', height: '50px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 'xxx-large', padding: 1 }}>
                    <Typography>{user.name.slice(0, 1).toUpperCase()}</Typography>
                </Box>
            </Box>
            <Typography>{user.name}</Typography>
            <Typography>{user.email}</Typography>
        </Item>
    )
}