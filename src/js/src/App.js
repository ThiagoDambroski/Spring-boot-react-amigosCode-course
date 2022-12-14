import './App.css';
import Container from './Conteiner';
import {getAllStudents} from './client'
import { render } from '@testing-library/react';
import { Component } from 'react';
import{
  Table
}from 'antd';

class App extends Component {

  state = {
    students: []
  }

  componentDidMount(){
    this.fetchStudents();
  }

  fetchStudents = () => {
    getAllStudents()
    .then(res => res.json()
    .then(students => {
      console.log(students);
      this.setState({
        students
      });
    }));
  }


  render() {

    const { students} = this.state;

    if(students && students.length){
      const columns = [
        {
          title: 'Student Id',
          dataIndex: 'studentId',
          key: 'studentId'
        },
        {
          title: 'Frist name',
          dataIndex: 'firstName',
          key: 'firstName'
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName'
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender'
        },
      ];

        return (
        <Container>
          <Table dataSource={students} columns={columns} pagination={false} rowKey ='StudentId'/>
        </Container>
        );

      
      }
      return <h1>No Students found</h1>
    }

   
     
  };
  


export default App;
