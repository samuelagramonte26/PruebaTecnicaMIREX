import React, { useState } from 'react';
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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { usePagination } from '@mui/lab';

interface Data {
    id: number;
    name: string;
    age: number;
}

const initialData: Data[] = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Michael', age: 28 },
    // ... (añade más datos)
];

const TableWithPaginationAndFilter: React.FC = () => {
    const [data, setData] = useState<Data[]>(initialData);
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredData = data.filter((row) =>
        row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                                    <TableCell>{row.age}</TableCell>
                                    <TableCell>{row.age}</TableCell>
                                    <TableCell>{row.age}</TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <EditIcon color='warning'/>
                                        </IconButton>
                                        <IconButton>
                                            <DeleteIcon color='error'/>
                                        </IconButton>
                                        <IconButton>
                                            <VisibilityIcon color='info'/>
                                        </IconButton>
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

export default TableWithPaginationAndFilter;
