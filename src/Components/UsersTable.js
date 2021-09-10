import React from 'react'
import MaterialTable from 'material-table';
import {useEffect,useState} from 'react';
import axios from 'axios';  
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { forwardRef } from 'react';

import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const columns = [
    {title: 'id', field: 'id',editable: 'never'},
 {title: 'name', field: 'name'},
 {title: 'username', field: 'username'},
 {title: 'email', field: 'email'},
 {title: 'address', field: 'address'},
 {title: 'phone', field: 'phone'},
 {title: 'website', field: 'website'},
 {title: 'company', field: 'company'},
  ];

function UsersTable() {
const [user_data,setuser_data]=useState([]);
    useEffect(() => {
           async function fetchusers (){
            const response =
            await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response.data);
          var newArr = response.data.map(function(val) {          
            return {
              id: val.id,
              name: val.name,
              username: val.username,
              email: val.email,
              address: val.address.street + ' ' + val.address.suite + ' ' + val.address.city + ' ' + val.address.zipcode ,
              phone: val.phone,
              website: val.website,          
              company: val.company.name + ' ' +val.company.catchPhrase + ' ' + val.company.bs,          
          
            };
        });
        console.log('newarr');
        // Onewarr
        console.log(newArr[0]['name']);
        setuser_data(newArr);
        console.log(user_data);
          };


      fetchusers();
  
  
   
      
  
    }, [])
 
    return (
        <div>
        {user_data.length>0?
            <MaterialTable columns={columns} data={user_data} title='Users Data' 
            icons={tableIcons}
        
            editable={{
          
                onRowAddCancelled: rowData => console.log('Row adding cancelled'),
                onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                             setuser_data([...user_data, newData]);
        
                            resolve();
                        }, 1000);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {

                            const dataUpdate = [...user_data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            console.log(oldData.tableData.name)

                            console.log("hellolnkhkh");

                            console.log(dataUpdate)
                            console.log(index)

                            setuser_data(dataUpdate);
                            // console.log(user_data)
        
                            resolve();
                        }, 1000);
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...user_data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setuser_data(dataDelete);
        
                            resolve();
                        }, 1000);
                    })
            }}
            
            />:
            <div></div>}
      </div>
    )
}


export default UsersTable

