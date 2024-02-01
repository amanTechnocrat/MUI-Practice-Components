import React from 'react'
import { TableCell,TableContainer,Table,TableHead,TableBody,TableRow,Paper } from '@mui/material'

const arr = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	},
    {
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

const MuiTAble = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:"300px"}}>
        <Table aria-lable="simple table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {arr.map((val,ind)=>{
                    return(
                        <TableRow key={ind}>
                            <TableCell>{val.color}</TableCell>
                            <TableCell>{val.value}</TableCell>
                            <TableCell>{val.color}</TableCell>
                            <TableCell>{val.value}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MuiTAble