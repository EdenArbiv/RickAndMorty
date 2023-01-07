import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

export default function LoadingButtons(props) {

  return (
    <Stack direction="row" spacing={2}  sx={{ display: 'flex', justifyContent: 'center', height: 50 , cursor: 'pointer'}}>
    {
       props.loading && props.loading ? 
      <LoadingButton loading variant="outlined" >
        Submit
      </LoadingButton>
        :
      <LoadingButton loadingIndicator="Load more" color='primary' variant="contained" onClick={props.onClick}>
        Load More
      </LoadingButton>
    }
     
    </Stack>
  );
}