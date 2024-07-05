import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import "../style.css"

function createData(
  jobTitle: string,
  date: string,
  noappls: number,
  status: string,
) {
  return { jobTitle, date, noappls, status};
}

const rows = [
  createData('Developer', '19-May-2024', 6, 'open' ),
  createData('Nurse', '19-Jun-2024', 6, 'open' ),
  createData('Developer ', '19-May-2024', 6, 'open' ),
  createData('Nurse', '19-Jun-2024', 6, 'open' ),
  createData('Developer', '19-May-2024', 6, 'open' ),
  createData('Nurse', '19-Jun-2024', 6, 'open' ),
  createData('Developer', '19-May-2024', 6, 'open' ),
  createData('Nurse', '19-Jun-2024', 6, 'open' ),
  createData('Developer', '19-May-2024', 6, 'open' ),
  createData('Nurse', '19-Jun-2024', 6, 'open' ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Card} className='overflow-y-auto tabularview'>
      <Table aria-label="simple table">
        <TableHead className='tablehead'>
          <TableRow>
            <TableCell align="left">Job Title</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">No. of Applicants</TableCell>
            <TableCell align="left">Status/Stage</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.jobTitle}
            >
              <TableCell className='jobtitlecolumn' align="left">{row.jobTitle}</TableCell>
              <TableCell className='datecolumn' align="left">{row.date}</TableCell>
              <TableCell className='datecolumn' align="left">{row.noappls}</TableCell>
              <TableCell className='datecolumn' align="left">{row.status}</TableCell>
              <TableCell className='datecolumn' align="left"><button>View</button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}