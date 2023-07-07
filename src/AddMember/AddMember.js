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

const AddMember = () => {
    const [membersString, setMembersString] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [organization, setOrganization] = useState('');
    const [designation, setDesignation] = useState('');
    const [contact, setContact] = useState('');

    const handleAddMember = (e) => {
        e.preventDefault();
        // Generate member ID
        const memberID = generateMemberID();
        // Create member object
        const newMember = {
            id: memberID,
            name,
            email,
            address,
            organization,
            designation,
            contact,
        };
        // Update membersString with new member string
        const updatedMembersString =
            membersString + JSON.stringify(newMember) + '\n';
        setMembersString(updatedMembersString);
        // Clear form fields
        setName('');
        setEmail('');
        setAddress('');
        setOrganization('');
        setDesignation('');
        setContact('');
    };

    const generateMemberID = () => {
        // Generate a random string of 3 characters
        const randomString = Math.random().toString(36).substring(2, 5).toUpperCase();
        // Generate a random 3-digit number
        const randomNumber = Math.floor(Math.random() * 900) + 100;
        // Combine the string and number to create the member ID
        return randomString + randomNumber;
    };

    return (
        <Form onSubmit={handleAddMember}>
            <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
            />
            <Button type="submit">Add Member</Button>
            <textarea
                value={membersString}
                rows={10}
                style={{ marginTop: '10px' }}
                readOnly
            />
        </Form>
    );
};

export default AddMember;
