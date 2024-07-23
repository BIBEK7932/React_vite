import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
let handleClick = ()=>{
    alert("Clicked")
}
export default function MuiButton(){
    return(
        <>
      
      <Stack direction="row" spacing={2}>
      <Button variant='contained' onClick={handleClick} color="info">Hi Welcome</Button>
        <Button variant='contained' disabled  color='error' size="small">Disbled</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
        </Stack>
        </>
    )
}