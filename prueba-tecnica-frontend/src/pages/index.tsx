import { MainLayout } from '@/components'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const HomePage = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <Grid container sx={{justifyContent:'center'}} spacing={ 2 }>
       <Grid item xs={12} >
       <Typography  align='center' variant='h3'>Bienvenidos</Typography>
       </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }} onClick={()=>router.push('/empresas')}>
            <CardActionArea >
              <CardMedia
                component="img"
                height="250"
                image="/empresas.png"
                alt="green iguana"
                style={{ maxWidth: "100%" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mantenimiento Empresas
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
        <Card sx={{ maxWidth: 400 }} onClick={()=>router.push('/clientes')}>
            <CardActionArea>            
              <CardMedia
                component="img"
                height="250"
                image="/clientes.png"
                alt="green iguana"
                style={{ maxWidth: "100%" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mantenimiento Clientes
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
    </MainLayout>
  )
}

export default HomePage