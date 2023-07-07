import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #e9e9e9;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  cursor: pointer;
`;

const TableCell = styled.td`
  padding: 10px;
`;

const MemberList = ({ members }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSort = (field) => {
        if (field === sortField) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    };

    const filteredMembers = members.filter((member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedMembers = sortField
        ? filteredMembers.sort((a, b) => {
            const fieldA = a[sortField].toLowerCase();
            const fieldB = b[sortField].toLowerCase();
            if (fieldA < fieldB) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (fieldA > fieldB) {
                return sortOrder === 'asc' ? 1 : -1;
            }
            return 0;
        })
        : filteredMembers;

    return (
        <div>
            <SearchInput
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader onClick={() => handleSort('name')}>
                            Name {sortField === 'name' && <span>{sortOrder}</span>}
                        </TableHeader>
                        <TableHeader onClick={() => handleSort('email')}>
                            Email {sortField === 'email' && <span>{sortOrder}</span>}
                        </TableHeader>
                        <TableHeader onClick={() => handleSort('address')}>
                            Address {sortField === 'address' && <span>{sortOrder}</span>}
                        </TableHeader>
                        <TableHeader onClick={() => handleSort('organization')}>
                            Organization {sortField === 'organization' && <span>{sortOrder}</span>}
                        </TableHeader>
                        <TableHeader onClick={() => handleSort('designation')}>
                            Designation {sortField === 'designation' && <span>{sortOrder}</span>}
                        </TableHeader>
                        <TableHeader onClick={() => handleSort('contact')}>
                            Contact {sortField === 'contact' && <span>{sortOrder}</span>}
                        </TableHeader>
                    </TableRow>
                </TableHead>
                <tbody>
                    {sortedMembers.map((member) => (
                        <TableRow key={member.id}>
                            <TableCell>{member.name}</TableCell>
                            <TableCell>{member.email}</TableCell>
                            <TableCell>{member.address}</TableCell>
                            <TableCell>{member.organization}</TableCell>
                            <TableCell>{member.designation}</TableCell>
                            <TableCell>{member.contact}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default MemberList;
