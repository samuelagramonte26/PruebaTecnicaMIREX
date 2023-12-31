import { useContext, useState } from 'react'
import { Input, MainLayout, ModalForm, TableCompany } from "@/components"
import { Button, Grid, Typography, CircularProgress } from "@mui/material"
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined"
import { EmpresasContext } from "@/context/empresas"
import { Formik } from 'formik'
import { CancelSharp, Save } from "@mui/icons-material";
import { Company } from '@/interfaces'



const EmpresasPage = () => {
    const { handleSave, showform, setShowForm, initialForm, handleClose } = useContext(EmpresasContext)

    const validateFform = ({ name, address, phone, rnc }: Company) => {
        const error = {} as Company;

        if (name?.trim().length === 0 || !name)
            error.name = 'El campo nombre es requerido!'
        if (address?.trim().length === 0 || !address)
            error.address = 'El campo direccion es requerido!'
        if (phone?.trim().length === 0 || !phone)
            error.phone = 'El campo telefono es requerido!'
        if (rnc?.trim().length === 0 || !rnc)
            error.rnc = 'El campo RNC es requerido!'

        return error;
    }

    return (
        <MainLayout title="Empresas">
            <Grid container justifyContent='center' >
                <Grid item xs={12} mt={10} lg={8}>
                    <Typography variant="h4" align="center">Mantenimiento empresas</Typography>
                </Grid>

                <Grid item xs={12}  lg={8}>
                    <Grid xs={2} sx={{ marginBottom: 2, justifyContent: 'start' }}>
                        <Button
                            startIcon={<AddIcon />}
                            onClick={() => setShowForm(true)}
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
            <ModalForm show={showform} setShow={setShowForm} title='Empresa'>
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
                                    label="telefono"
                                    type="text"
                                    placeholder="Ej: 000-000-0000"
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.phone}
                                />
                                <Input
                                    label="RNC"
                                    type="text"

                                    name='rnc'
                                    value={values.rnc}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    requerido
                                    error={errors.rnc}
                                />


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

export default EmpresasPage