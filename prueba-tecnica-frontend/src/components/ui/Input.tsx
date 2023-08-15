import { Grid, TextField, Typography } from "@mui/material"
import { ChangeEvent } from "react"

interface props{
    onInput?:()=>void
    requerido:boolean
    label:string
    type:string
    placeholder?:string
    name:string
    value:string
    onChange:(e: string | ChangeEvent<any>) => void;
    onBlur:(e: any) => void | void;
    error?:string
  
}

export const Input = ({onInput=()=>{},requerido,label='',type='',placeholder='',name='',value='',onChange=()=>{},onBlur,error} : props) => {
    return (
        <Grid
            item
            xs={12}
            sm={12}
            md={12}
            xl={12}
            sx={{ mt: 2 }}
        >
            <TextField
                required={requerido}
                label={label}
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                fullWidth
                onChange={onChange}
                onBlur={onBlur}
               
                onInput={onInput}
            />
            <Grid  item
             xs={12}
             sm={12}
             md={12}
             xl={12}
             sx={{ mt: 1 }}
            >
           <Typography  color='red'>{error && error}</Typography>

            </Grid>
        </Grid >
    )
}
