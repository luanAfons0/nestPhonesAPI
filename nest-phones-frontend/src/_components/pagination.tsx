import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useSWR from 'swr';
import { Paper } from '@mui/material';

type User = {
  name: string,
  id: string,
  email: string
}

export default function PaginationControlled({ setIndexPage }: { setIndexPage: any}) {

  //fetch data
  const fetcher = (url: string) => fetch(url, { headers: { 'x-api-key': 'validation_key1' } }).then(res => res.json())
  const URL = `http://localhost:3001/api/users`
  const { data, error, isLoading } = useSWR<number>(URL, fetcher)

  //pagination system
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setIndexPage(value)
  };

  return (
    <Stack spacing={2} sx={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 2 }}>
      <Paper elevation={3} sx={{ padding: 1 }}>
        <Pagination count={data} page={page} onChange={handleChange} />
      </Paper>
    </Stack>
  );
}