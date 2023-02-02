import React, { useState, useEffect } from 'react';
import './App.css';
import { Flex, Text, Box, Button, } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react"

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Flex direction="column" align="center" p={4}>
            <Text fontWeight="bold" mb={4}>
                Users List
            </Text>
            {users.map(user => (
                <Box key={user.id} mb={4}>
                    <Table variant='striped'>
                        <Thead>
                            <Tr>
                                <Th pr={40}>NAME</Th>
                                <Th pr={40}>USERNAME</Th>
                                <Th pr={40}>CITY</Th>
                                <Th >ACTION</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>{user.name}</Td>
                                <Td>({user.username})</Td>
                                <Td>{user.address.city}</Td>
                                <Td><Button
                                    onClick={() => setSelectedUser(user)}
                                    aria-label={`View details for ${user.name}`}>
                                    View details
                                </Button></Td>
                            </Tr>  </Tbody></Table>

                    {selectedUser && selectedUser.id === user.id && (
                        <Box mt={4} p={4} bg={'#9FC'}>
                            <Text>
                                <b>Email:</b> {user.email}, <span className='info'><b>Phone:</b> {user.phone}</span>
                            </Text>
                            <Text>
                                <b>Website:</b> {user.website}
                            </Text>
                            <Text>
                                <b>Address:</b> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                            </Text>
                            <Text>
                                <b>Company:</b> {user.company.name},<span className='info'><b>Company info:</b> {user.company.bs}</span>
                            </Text>
                        </Box>
                    )}
                </Box>
            ))}
        </Flex>
    );
};

export default UserList;