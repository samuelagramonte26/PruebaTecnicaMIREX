import React, { useContext, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    TextField,
    IconButton,
    Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { usePagination } from '@mui/lab';
import { EmpresasContext } from '@/context/empresas';
import { useRouter } from 'next/router';
import { useNotifications } from '@/hooks/useNotiffications';

export const TableCompany = () => {

    const { Empresas: data, deleteCompany, handleEdit } = useContext(EmpresasContext)
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const router = useRouter()

    const { confirm } = useNotifications()

    const filteredData = data.length > 0 ? data.filter((row) =>
        row.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : []

    const { items } = usePagination({
        count: Math.ceil(filteredData.length / rowsPerPage),
    });


    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <TextField
                label="Buscar"
                variant="outlined"
                size="small"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" />,
                }}
                style={{ marginBottom: 16 }}
            />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Direccion</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>RNC</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.address}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell>{row.rnc}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleEdit(row)}>
                                            <EditIcon color='warning' />
                                        </IconButton>
                                        <IconButton onClick={() => confirm(() => deleteCompany(row.id))}>
                                            <DeleteIcon color='error' />
                                        </IconButton>
                                        <a href={`/empresas/${row.id}`}>
                                            <IconButton >
                                                <VisibilityIcon color='info' />
                                            </IconButton>
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                {...items}
            />
        </div>
    );
};


