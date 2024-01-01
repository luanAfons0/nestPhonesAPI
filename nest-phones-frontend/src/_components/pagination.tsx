import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack spacing={2} sx={{marginTop:2,display:'flex',flexDirection:'row-reverse',}}>
      <Pagination count={10} />
    </Stack>
  );
}