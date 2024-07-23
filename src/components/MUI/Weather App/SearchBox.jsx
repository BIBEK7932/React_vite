import TextField from '@mui/material/TextField';
export default function SearchBox(){

    return(
       <div className='SearchBox'>
        <form >
        <TextField id="outlined-basic" label="City Name" variant="outlined" required />

        </form>
       </div>
    )
}