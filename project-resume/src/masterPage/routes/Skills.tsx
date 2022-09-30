import React from 'react';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Skills =()=>{

  const headers = [
    'ID',
    'Category',
    'Skills',
    'Description',
    'Skill Level'
  ]

  const rows = [
    { id: 0,category: 'Front-end', skill: 'React', description: 'Javascript library used to create user interface.', rating: 75 },
    { id: 1,category: 'Front-end', skill: 'Material UI', description: 'Javascript library that provides responsive design for components.', rating: 75 },
    { id: 2,category: 'Back-end', skill: 'C#', description: 'Programming language used to create endpoints on server side to communicate between front-end and database', rating: 75 },
    { id: 3,category: 'Database', skill: 'Microsoft SQL Server Management Studio', description: 'Management software to manage tables for data.', rating: 75 },
    { id: 4,category: 'Back-end', skill: 'SqlClient', description: 'C# library that allows communication between server side and database management software.', rating: 75 },
  ];
    return(
        <React.Fragment>     
        <NavigationBar/>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {
                    headers.map((header,i)=>
                      (<TableCell key={i}>{header}</TableCell>)
                    )
                  }

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row,i) => (
                  <TableRow key={i}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell >{row.category}</TableCell>
                    <TableCell >{row.skill}</TableCell>
                    <TableCell >{row.description}</TableCell>
                    <TableCell >{row.rating}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
        <Footer/> 
        </React.Fragment>
  
    )
}


export default Skills;