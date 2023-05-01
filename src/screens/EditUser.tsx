import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { users } from '../resources/Users.ts';
import { Container, Grid, Divider, Paper,  Table, TableContainer, TableHead, TableRow, TableCell, TableBody} from '@mui/material';
import { NavLink, useParams, useSearchParams } from "react-router-dom";


function EditUser() {

    const {id} = useParams();
    const user = users.find(user => user.id.toString() === id);

    if(!user){
        return (
            <div className="container">
                <h1>User not found</h1>
            </div>
        );
    }

    const { name, role, address, salary } = user;
    return(

        <Container maxWidth="xl"> 
        
        <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12} md={12}>
                <h1>Insert new data for {name} </h1>
            </Grid>
            <Divider/>
            <Grid item xs={12}>
                <h4>Insert Id:</h4>
                <TextField id="ids" label="id" variant="outlined" defaultValue={id}/>
            </Grid>
            <Grid item xs={12}>
                <h4>Insert name:</h4>
                <TextField id="name" label="name" variant="outlined" defaultValue={name}/>
            </Grid>
            <Grid item xs={12}>
                <h4>Insert role:</h4>
                <TextField id="role" label="role" variant="outlined" defaultValue={role}/>
            </Grid>
            <Grid item xs={12}>
                <h4>Insert address:</h4>
                <TextField id="address" label="address" variant="outlined" defaultValue={address} />
            </Grid>
            <Grid item xs={12}>
                <h4>Insert salary:</h4>
                <TextField id="salary" label="salary" variant="outlined" defaultValue={salary} />
            </Grid>
            <Grid item xs={1}>
                <NavLink to={`/`} className="btn btn-success">Aceptar</NavLink>
            </Grid>
            <Grid item xs={11}>
                <NavLink to={ '/users'} className="btn btn-danger">Cancelar</NavLink>
            </Grid>
        </Grid>
        </Container>
    )
}
export default EditUser