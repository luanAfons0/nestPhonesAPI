import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({ setIndexPage }: { setIndexPage: any }) {

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setIndexPage(value)
  };

  return (
    <Stack spacing={2} sx={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 2 }}>
      <Pagination count={5} page={page} onChange={handleChange} />
    </Stack>
  );
}