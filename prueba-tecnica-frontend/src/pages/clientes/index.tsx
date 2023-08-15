import { useContext, useState } from 'react'
import { Input, MainLayout, ModalForm, TableClientes } from "@/components"
import { Button, Grid, Typography, CircularProgress, TextField, MenuItem } from "@mui/material"
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined"

import { Formik } from 'formik'
import { CancelSharp, Save } from "@mui/icons-material";
import { Clientes } from '@/interfaces'
import { ClientesContext } from '@/context/clientes'
import { EmpresasContext } from '@/context/empresas'




const ClientesPage = () => {
    const { handleSave, showform, setShowForm, initialForm, handleClose } = useContext(ClientesContext)
    const {Empresas} = useContext(EmpresasContext);

    const validateFform = ({ name, address, identification, companyId }: Clientes) => {
        const error = {} as Clientes;

        if (name?.trim().length === 0 || !name)
            error.name = 'El campo nombre es requerido!'
        if (address?.trim().length === 0 || !address)
            error.address = 'El campo direccion es requerido!'
        if (identification?.trim().length === 0 || !identification)
            error.identification = 'El campo identificacion es requerido!'
        if (!companyId)
            error.companyId = 'El campo empresa es requerido!'

        return error;
    }

    return (
        <MainLayout title="Clientes">
            <Grid container justifyContent='center' >
                <Grid item xs={12} mt={10} lg={8}>
                    <Typography variant="h4" align="center">Mantenimiento Clientes</Typography>
                </Grid>

                <Grid item xs={12}  lg={8}>
                    <Grid  sx={{ marginBottom: 2, justifyContent: 'start' }}>
                        <Button
                            startIcon={<AddIcon />}
                            onClick={() => setShowForm(true)}
                            variant="outlined"
                        >
                            Agregar
                        </Button>
                    </Grid>
                    <Grid>
                        <TableClientes />
                    </Grid>
                </Grid>
            </Grid>
            <ModalForm show={showform} setShow={setShowForm} title='Cliente'>
                <Formik
                    initialValues={{ ...initialForm }}
                    validate={validateFform}
                    onSubmit={handleSave}
                >
                    {({ values, isSubmitting, errors, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container
                            >
                                <Input
                                    requerido
                                    label="Nombre"
                                    type="text"
                                    placeholder="Ej: Induvan"
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors?.name}
                                />
                                <Input
                                    requerido
                                    label="Direccion"
                                    type="text"
                                    name='address'
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.address}
                                />
                                <Input
                                    requerido
                                    label="Identificaion"
                                    type="text"
                                  
                                    name='identification'
                                    value={values.identification}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.identification}
                                />
                               <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            xl={12}
                            sx={{ mt: 2 }}
                        >
                            <TextField
                                fullWidth
                                id="outlined-select-currency"
                                select
                                label="Empresa"
                                value={values.companyId}
                                onChange={handleChange}
                                name='companyId'
                                helperText="Por favor selecciona una empresa!"
                                onBlur={handleBlur}

                            >
                                {Empresas.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {`${option.name}`}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Grid item
                                xs={12}
                                sm={12}
                                md={12}
                                xl={12}
                                sx={{ mt: 1 }}
                            >
                                <Typography  color='red'>{errors && errors.companyId}</Typography>

                            </Grid>
                        </Grid>

                            </Grid>
                            <Grid container sx={{ mt: 2, padding: 2 }} spacing={2}>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    color="primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? <CircularProgress /> : (<Typography>
                                        <Save />
                                        Guardar
                                    </Typography>)}

                                </Button>
                                <Button
                                    onClick={handleClose}
                                    color='error'
                                    sx={{ spacing: 2 }}
                                >
                                    <CancelSharp />
                                    Cancelar
                                </Button>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </ModalForm>
        </MainLayout>
    )
}

export default ClientesPage