import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserCard from './usercard';
import { Grid, Paper } from '@mui/material';
import useSWR from 'swr';

// user type
type User = {
  name: string,
  id: string,
  email: string,
  phone_number: string
}

// dark mode
const setMode = (mode: string) => {
  return mode == 'light' ? 'black' : 'white'
}

export default function PhoneModal({ user, mode }: { user: User, mode: string }) {

  // modal action
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)

  };
  const handleClose = () => setOpen(false);

  //random color
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

  // style of modal
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    height: '30%',
    bgcolor: 'background.paper',
    boxShadow: 12,
    color: setMode(mode),
    border: 'none',
    p: 4,
    maxHeight: '80vh'
  };

  // style letter name
  const ballName = { backgroundColor: randomColor(8), borderRadius: '50%', width: '50px', height: '50px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 'xxx-large', padding: 1 }

  //fetch data
  const fetcher = (url: string) => fetch(url, { headers: { 'x-api-key': 'validation_key1' } }).then(res => res.json())
  const URL = `http://localhost:3001/api/users/${user.id}/phone_numbers`
  const { data, error, isLoading } = useSWR<User[]>(URL, fetcher)

  return (
    <Grid key={user.id} item sx={{ padding: 1 }}>
      <UserCard user={user} handleOpen={handleOpen}></UserCard>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          {isLoading ? 'ta carregando' : data?.map((user) => {
            if (data.length === 0)
              return 'nao tem nada'
            else {
              <Paper elevation={3} sx={{ padding: 1, margin: 1 }}>
                <Box sx={ballName}>
                  <Typography>{user.name.slice(0, 1).toUpperCase()}</Typography>
                </Box>
                <Typography>{user.name}</Typography>
                <Typography>{user.phone_number}</Typography>
              </Paper>
            }
          })}
        </Box>
      </Modal>
    </Grid>
  );
}
