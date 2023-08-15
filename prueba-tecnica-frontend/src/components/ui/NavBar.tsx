import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router";
import { CSSProperties } from "react";

const style:CSSProperties ={
  margin:20,
fontWeight:'bold',
color:'white',
  textDecoration:'none',
  fontSize:18
}

export const NavBar = () => {
  const { asPath,push} = useRouter();
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item >
            <Typography style={{cursor:'pointer'}} onClick={()=>push('/')} variant="h6">Prueba tecnica MIREX</Typography>
          </Grid>
          <Grid item>
          <Link href='/empresas' style={ asPath === '/empresas' ? style :{color:'white',margin:20,textDecoration:'none'}}>Empresas</Link>
            <Link href='/clientes' style={ asPath === '/clientes' ? style :{color:'white',margin:20,textDecoration:'none'}}>Clientes</Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}