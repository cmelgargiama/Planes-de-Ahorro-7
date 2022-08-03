import Button from 'react-bootstrap/Button';
import React, {Component, useEffect, useMemo, useState} from 'react';
import { useMatch } from 'react-router-dom';
import { getSeguros } from '../services/seguros';
import {useTable} from 'react-table';
import tw from 'twin.macro';
import Sidenav from '../components/sidenav';

/*const Table = tw.table`
table-fixed
text-base
text-gray-900`;

const TableHead = tw.thead`
p-2
`;

const TableRow = tw.tr`
border
border-gray-500
p-2
`
const TableHeader = tw.th`
border
border-gray-500
p-2`;

const TableBody = tw.td`
border
border-gray-500
p-5`;*/


function Seguros(props){

const [seguros, setSeguros] = useState([]);

/*llamada a api*/
getSeguros()
.then(data => { 
    const seguros = data.data;
    //console.log(seguros)
    setSeguros(seguros)
},[])
//console.log(seguros)



/*Columnas tabla*/
const columns = useMemo( () => [{
Header : "Id" ,
accesor: "id ",
}
],[]);

const segurosData = useMemo(
    ()=>[...seguros], [seguros],
)

const segurosColumns = useMemo(() =>
 seguros[0]
  ? Object.keys(seguros[0])
  .filter((key)=> key !== " rating")
  .map((key)=>{
    return{ Header:key, accessor:key};
    })
: [], 
[seguros]);

const tableInstance = useTable({columns:segurosColumns, data:segurosData});

const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;


useEffect( ()=>{
    getSeguros()
},[])


/*DATATABLE*/
    return(<Sidenav>
    <div class="seguros-body">
         <div class="seguros-title">
        <h3>Gestión de Seguros</h3>
    </div>
    <div class="seguros-form">
        <br/>
        <form action="" class="seguros_estado">
        
        <input type="radio" name="seguros_estado" id="radio"/><label>INTERESADOS</label>
        <input type="radio" name="seguros_estado" id="radio"/><label>CONTRATADOS</label>
        <input type="radio" name="seguros_estado" id="radio"/><label>NO CONTRATADOS</label>
        <input type="radio" name="seguros_estado" id="radio"/><label >EN GESTIÓN</label>
        <br/>
        </form>
    
    <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup)=>
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                               {column.render("Header")} 
                            </th>
                        ))}
                    </tr>)}
                </thead>
                    <tbody {...getTableBodyProps()}>
                            {rows.map((row)=>{
                            prepareRow(row);
                            return <tr {...row.getRowProps()}>
                            {row.cells.map((cell,idx)=>(
                            <td {...cell.getCellProps()}>
                                {cell.render("Cell")}
                            </td>
                            ))}
                            </tr>
                            })}
                            
                    </tbody>
            </table>
            </div>
            
            <br/>
            <div className="d-flex flex-row">
            
            <Button variant="light" className="left">Nueva</Button>
            <Button variant="light" className="left">Modificar</Button>
                <br/>
            <Button variant="light" className="right">Excel</Button>
            <Button variant="light" className="right">Salir</Button>
            </div>

            </div>
            </Sidenav>)
        
}




export default Seguros