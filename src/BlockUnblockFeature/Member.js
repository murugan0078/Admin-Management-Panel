import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
`;

const Name = styled.h3`
  margin-bottom: 10px;
`;

const Email = styled.p`
  margin-bottom: 5px;
`;

const Info = styled.p`
  margin-bottom: 5px;
`;

const BlockButton = styled.button`
  padding: 10px;
  background-color: ${({ blocked }) => (blocked ? '#dc3545' : '#28a745')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Member = ({ member, onBlockToggle }) => {
  const handleBlockToggle = () => {
    onBlockToggle(member.id);
  };

  return (
    <Container>
      <Name>{member.name}</Name>
      <Email>{member.email}</Email>
      <Info>{member.address}</Info>
      <Info>{member.organization}</Info>
      <Info>{member.designation}</Info>
      <Info>{member.contact}</Info>
      <BlockButton blocked={member.blocked} onClick={handleBlockToggle}>
        {member.blocked ? 'Unblock' : 'Block'}

      </BlockButton>
    </Container>
  );
};

export default Member;
