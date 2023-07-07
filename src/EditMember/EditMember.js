import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const EditMember = ({ member }) => {
    const [memberData, setMemberData] = useState(JSON.stringify(member));

    const handleEditMember = (e) => {
        e.preventDefault();
        const editedMember = JSON.parse(memberData);
        console.log(editedMember);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMemberData((prevMemberData) => {
            const updatedMember = JSON.parse(prevMemberData);
            updatedMember[name] = value;
            return JSON.stringify(updatedMember);
        });
    };

    return (
        <Form onSubmit={handleEditMember}>
            <Input
                type="text"
                name="name"
                placeholder="Name"
                value={JSON.parse(memberData).name}
                onChange={handleInputChange}
                required
            />
            <Input
                type="email"
                name="email"
                placeholder="Email"
                value={JSON.parse(memberData).email}
                onChange={handleInputChange}
                required
            />
            <Input
                type="text"
                name="address"
                placeholder="Address"
                value={JSON.parse(memberData).address}
                onChange={handleInputChange}
                required
            />
            <Input
                type="text"
                name="organization"
                placeholder="Organization"
                value={JSON.parse(memberData).organization}
                onChange={handleInputChange}
                required
            />
            <Input
                type="text"
                name="designation"
                placeholder="Designation"
                value={JSON.parse(memberData).designation}
                onChange={handleInputChange}
                required
            />
            <Input
                type="text"
                name="contact"
                placeholder="Contact"
                value={JSON.parse(memberData).contact}
                onChange={handleInputChange}
                required
            />
            <Button type="submit">Save Changes</Button>
        </Form>
    );
};

export default EditMember;
