import { MainLayout } from '@/components'
import { EmpresasContext } from '@/context/empresas'
import { Clientes } from '@/interfaces'
import { Box,Typography, Divider, List, ListItem, ListItemText, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'


interface props {
    id: string
}

const CompanyPage: NextPage<props> = () => {

    const router = useRouter();
  
    const id = router.query.id;
    const empresa = (useContext(EmpresasContext)).Empresas.find(x => `${x.id}` === id)
    const rows: Clientes[] = empresa?.clients || [];

    return (
        <MainLayout title={`Empresa`}>
            <Box >
          
                <Typography id="transition-modal-title" display='flex' justifyContent='center' variant="h4" component="h2">
                    Empresa
                </Typography>
                <Divider />
                <Box sx={{ mt: 2, mb: 2 }}>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Id:"
                            />
                            <Typography>{empresa?.id}</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Nombre:"
                            />
                            <Typography>{empresa?.name}</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Direccion:"
                            />
                            <Typography>{empresa?.address}</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Telefono:"
                            />
                            <Typography>{empresa?.phone}</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="RNC:"
                            />
                            <Typography>{empresa?.rnc}</Typography>
                        </ListItem>
                       
                    </List>
                    <Typography variant='h4' align='center'>Clientes</Typography>
                    
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="right">Nombre</TableCell>
                                    <TableCell align="right">Direccion</TableCell>
                                    <TableCell align="right">Identificacion</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.address}</TableCell>
                                        <TableCell align="right">{row.identification}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </MainLayout>
    )
}

export default CompanyPage


