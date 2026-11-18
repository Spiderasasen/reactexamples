import {useState,useEffect} from 'react'
import {useTable} from '@tanstack/react-table'
import  {UserTableDef} from './UserTableDef.js'
import {getRandUserList} from '../../services/apiServices.js'

export default function UserTable() {
    const tableDef = UserTableDef;
    const [userList,setUserList] = useState([]);

    useEffect(() => {
        getRandUserList(5).then(newUserList => {
            setUserList(newUserList)
        })
    },[])

    const tableInstance = useTable({data: userList,
        columns: tableDef
    });

    const headers = tableInstance.getHeaderGroups()[0].headers;
    console.log(tableInstance);
    console.log(headers);
    const rows = tableInstance.getRowModel().rows
    console.log(rows)

    return (
        <table>
            <thead>
            <tr>
                {headers.map(columnHeader => (
                    <th key={columnHeader.id}>{columnHeader.column.columnDef.header}</th>
                ))}
            </tr>
            </thead>

        </table>
    );

}