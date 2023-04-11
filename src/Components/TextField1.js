import React from 'react'
import { TextField } from '@material-ui/core'
function TextField1() {
    return (
        <div>


            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}

export default TextField1