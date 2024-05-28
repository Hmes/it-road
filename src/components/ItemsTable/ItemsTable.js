import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Create, RemoveRedEye, DeleteOutline } from '@mui/icons-material'
import { postUrl } from '../../App';


export default function ItemsTable({items, setDisplay, setSelectedItem, refreshItems}) {
  const showDetail = (item) => {
    console.info('item::', item)
    setDisplay('detail')
    setSelectedItem(item)
  }

  const handleDelete = (item) => {
    let deleteText = 'Are you sure you want to delete the item?'
    if (window.confirm(deleteText)) {
      deleteItem(item)
    }
  }

  const deleteItem = (item) => {
    fetch(`${postUrl}/${item.id}`, {
      method: 'DELETE'
    })
    .then((res) => refreshItems())
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Body</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="left">{item.body}</TableCell>
              <TableCell align="left">
                <div className="d-flex">
                  <button className="btn-action" onClick={() => showDetail(item)}><RemoveRedEye /></button>
                  <button className="btn-action"><Create /></button>
                  <button className="btn-action" onClick={() => handleDelete(item)}><DeleteOutline /></button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
