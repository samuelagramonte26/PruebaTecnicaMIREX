import { MainLayout, TableCompany } from "@/components"
import { Button, Grid, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined"



const EmpresasPage = () => {
   
    return (
        <MainLayout title="Empresas">
            <Grid container justifyContent='center' spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">Mantenimiento empresas</Typography>
                </Grid>

                <Grid item  >
                    <Grid xs={2} sx={{ marginBottom: 2,marginTop:5, justifyContent:'start' }}>
                        <Button
                            startIcon={<AddIcon />}
                            
                            variant="outlined"
                        >
                            Agregar
                        </Button>
                    </Grid>
                    <Grid>
                        <TableCompany />
                    </Grid>
                </Grid>
            </Grid>
        </MainLayout>
    )
}

export default EmpresasPage