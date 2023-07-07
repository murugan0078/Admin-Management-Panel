import React from 'react';
import './App.css';
import AddMember from './AddMember/AddMember';
import Login from './LoginFeature/Login';
import MemberList from './SortingAndSearch/MemberList';
import EditMember from './EditMember/EditMember';
import Member from './BlockUnblockFeature/Member';

const membersData = [

  {
    id: 'ABC111',
    name: 'Thiru',
    email: 'thiru71988@gmail.com',
    address: '123 Street',
    organization: 'ABC Company',
    designation: 'Assosiate Softwere Engineer',
    contact: '1234567890',
    blocked: false,
  },
  {
    id: 'ABC112',
    name: 'Murugan',
    email: 'murugan.t0078@gmail.com',
    address: '156 Street',
    organization: 'XYZ Company',
    designation: 'Engineer',
    contact: '7010298854',
    blocked: false,
  },
  {
    id: 'ABC113',
    name: 'Kishore',
    email: 'Kishor007@gmail.com',
    address: '167 Street',
    organization: 'EFG Company',
    designation: 'Developer',
    contact: '7010295654',
    blocked: false,
  },
  {
    id: 'ABC114',
    name: 'King',
    email: 'King007@gmail.com',
    address: '168 Street',
    organization: 'HIJ Company',
    designation: 'Developer',
    contact: '7010295654',
    blocked: false,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Admin Management Panel</h1>
      <h1>Login (Use Below Email And Password for the Validation)  </h1>
      <h4>Static Email:example@example.com</h4>
      <h4>Static Password:password </h4>
      <Login />

      <h1>Add a Member (Output:Visit Text Box) </h1>
      <AddMember />

      <h1>Sorting And Static Search </h1>
      <MemberList members={membersData} />

      <h1>Edit Member(Output:Visit console) </h1>
      <EditMember member={membersData[0]} />

      <h1>Block & Unblock Feature (Output:Visit console) </h1>
      <Member member={membersData[0]} onBlockToggle={(memberId) => console.log(memberId)} />

    </div>
  );
}

export default App;
