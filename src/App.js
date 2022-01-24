import React, { Component, useState } from 'react'
import { ChakraProvider, Flex, Heading, Stack, Image, Link, Icon, Text, Avatar, Box, IconButton, Table, Thead, Tr, Th, Tbody, Td, Divider, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import Logo from "./assets/piggy-logo-white.png"
import {FiBell, FiCalendar, FiChevronDown, FiChevronsUp, FiDollarSign, FiHome, FiPackage, FiPieChart, FiSearch} from "react-icons/fi"
import './App.css'
import avatar from "./assets/2496.jpeg"
import MyChart from './MyChart'
import amazon from './assets/amazon.png'
import starbucks from './assets/starbucks.svg'
import youtube from './assets/youtube.png'


function App() {
  const [display, setDisplay] = useState('hide');


  return (
    <ChakraProvider>
      <Stack 
        display='flex'
        flexDir='row'
        h='100vh'
        >
            {/*Column 1 */}
            <Flex
              w="15%"
              flexDir='column'
              alignItems='center'
              backgroundColor='#020202'
              color='#fff'>
                <Flex flexDir="column" justifyContent='space-between' h='100vh'>
                    <Flex flexDir="column" as="nav">
                        <Image src={Logo} alignSelf='center' w="50%" mt="20px" mb="100px"></Image>
                        <Flex flexDir="column" align='flex-start' justifyContent='center' ml="25%">
                          <Flex className='sideBar-items'>
                            <Link>
                              <Icon as={FiHome} fontSize='2xl' className="active-icon" />
                            </Link>
                            <Link _hover={{textDecor: 'none'}}>
                              <Text className='active'>
                                Home
                              </Text>
                            </Link>
                          </Flex>
                          <Flex className='sideBar-items'>
                            <Link>
                              <Icon as={FiPieChart} fontSize='2xl' />
                            </Link>
                            <Link _hover={{textDecor: 'none'}}>
                              <Text>
                                Credit
                              </Text>
                            </Link>
                          </Flex>
                          <Flex className='sideBar-items'>
                            <Link>
                              <Icon as={FiDollarSign} fontSize='2xl' />
                            </Link>
                            <Link _hover={{textDecor: 'none'}}>
                              <Text>
                                Wallet
                              </Text>
                            </Link>
                          </Flex>
                          <Flex className='sideBar-items'>
                            <Link>
                              <Icon as={FiPackage} fontSize='2xl' />
                            </Link>
                            <Link _hover={{textDecor: 'none'}}>
                              <Text>
                                Services
                              </Text>
                            </Link>

                          </Flex>

                        </Flex>
                    </Flex>


                </Flex>
                <Flex flexDir='column' alignItems='center' mb={10} mt={5}>
                  <Avatar my={2} src={avatar}/>
                  <Text>&#123;jovan&#125;</Text>
                </Flex>
              </Flex>
            {/*Column 2 */}
            <Flex w='55%' p="3%" mb={2} flexDir='column' overflow='auto' minH='100vh' backgroundColor='#fff'>
              <Heading fontWeight='normal' mb={4} letterSpacing='tight' >Welcome back, <Flex fontWeight='bold' display='inline-flex'>Jovan</Flex>
              </Heading>              
              <Text color='gray' fontSize='sm'>My Balance:</Text>
              <Text mb={2} color='black' fontWeight='bold'fontSize='2xl'>$5,500.00</Text>
              
              <MyChart />
              <Flex justifyContent="space-between" mt={8}>
                <Flex align='flex-end'>
                  <Heading as='h2' size='lg' letterSpacing='tight'>Transactions</Heading>
                  <Text fontSize='sm' color='gray' ml={4}>Apr 2021</Text>
                </Flex>
                <IconButton icon={<FiCalendar />} />
              </Flex>
              <Flex flexDir='column'>
                <Flex overflow='auto'>
                  <Table variant='unstyled' mt={4} size='sm'>
                    <Thead>
                      <Tr color='gray'>
                        <Th>Name of transaction</Th>
                        <Th>Category</Th>
                        <Th isNumeric>Cashback</Th>
                        <Th isNumeric>Amount</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Flex align='center'>
                            <Avatar size='sm' mr={2} src={amazon} backgroundColor='white' border='none' />
                            <Flex flexDir='column'>
                              <Heading size='sm' letterSpacing='tight'>Amazon</Heading>
                              <Text fontSize='sm' color='gray'> Apr 24, 2021 at 1:40pm</Text>
                            </Flex>
                          </Flex>
                        </Td>
                        <Td>Electronic Devices</Td>
                        <Td isNumeric>+$2</Td>
                        <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$242</Text>.00</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Flex align='center'>
                            <Avatar size='sm' mr={2} src={starbucks} backgroundColor='white' border='none' />
                            <Flex flexDir='column'>
                              <Heading size='sm' letterSpacing='tight'>Starbucks</Heading>
                              <Text fontSize='sm' color='gray'> Apr 24, 2021 at 1:40pm</Text>
                            </Flex>
                          </Flex>
                        </Td>
                        <Td>Cafe and restaurant</Td>
                        <Td isNumeric>+$23</Td>
                        <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$32</Text>.00</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Flex align='center'>
                            <Avatar size='sm' mr={2} src={youtube} border='none' backgroundColor='white' />
                            <Flex flexDir='column'>
                              <Heading size='sm' letterSpacing='tight'>Youtube</Heading>
                              <Text fontSize='sm' color='gray'> Apr 22, 2021 at 13:50pm</Text>
                            </Flex>
                          </Flex>
                        </Td>
                        <Td>Social Media</Td>
                        <Td isNumeric>+$4</Td>
                        <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$121</Text>.00</Td>
                      </Tr>
                      {display == 'show' && 
                      <>
                      <Tr>
                        <Td>
                          <Flex align='center'>
                            <Avatar size='sm' mr={2} src={amazon} backgroundColor='white' border='none' />
                            <Flex flexDir='column'>
                              <Heading size='sm' letterSpacing='tight'>Amazon</Heading>
                              <Text fontSize='sm' color='gray'> Apr 24, 2021 at 1:40pm</Text>
                            </Flex>
                          </Flex>
                        </Td>
                        <Td>Electronic Devices</Td>
                        <Td isNumeric>+$2</Td>
                        <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$242</Text>.00</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Flex align='center'>
                            <Avatar size='sm' mr={2} src={starbucks} backgroundColor='white' border='none' />
                            <Flex flexDir='column'>
                              <Heading size='sm' letterSpacing='tight'>Starbucks</Heading>
                              <Text fontSize='sm' color='gray'> Apr 24, 2021 at 1:40pm</Text>
                            </Flex>
                          </Flex>
                        </Td>
                        <Td>Cafe and restaurant</Td>
                        <Td isNumeric>+$23</Td>
                        <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$32</Text>.00</Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Flex align='center'>
                            <Avatar size='sm' mr={2} src={youtube} border='none' backgroundColor='white' />
                            <Flex flexDir='column'>
                              <Heading size='sm' letterSpacing='tight'>Youtube</Heading>
                              <Text fontSize='sm' color='gray'> Apr 22, 2021 at 13:50pm</Text>
                            </Flex>
                          </Flex>
                        </Td>
                        <Td>Social Media</Td>
                        <Td isNumeric>+$4</Td>
                        <Td isNumeric><Text fontWeight='bold' display='inline-table'>-$121</Text>.00</Td>
                      </Tr>
                      
                      
                      
                      
                      </>}
                    </Tbody>

                  </Table>

                </Flex>
                <Flex align='center'>
                  <Divider />
                  <IconButton 
                    onClick={()=> {
                      if (display == 'show' ) {
                        setDisplay('none')
                      } else {
                        setDisplay('show')
                      }
                    }}
                    icon={display== 'show' ? <FiChevronsUp /> : <FiChevronDown />} />
                  <Divider />
                </Flex>
                
              </Flex>
              
              

            </Flex>
            {/*Column 3 */}
            <Flex p='3%' 
                  w='35%' 
                  backgroundColor='#F5F5F5' 
                  flexDir='column' 
                  overflow='auto'>
                  <Flex alignContent='center'>
                      <InputGroup bgColor='#fff' mb={4} border='none' borderColor='#fff' borderRadius='10px' mr={2}>
                        <InputLeftElement pointerEvents='none' children={<FiSearch color='gray' />} />
                        <Input type='number' placeholder='Search' borderRadius='10px' />
                      </InputGroup>
                      <IconButton icon={<FiBell />} fontSize='sm' bgColor='#fff' borderRadius='50%' p='10px' />
                      <Flex
                        w={30}
                        h={25}
                        bgColor='#b57295'
                        borderRadius='50%'
                        color='#fff'
                        align='center'
                        justify='center'
                        ml='-3'
                        mt='-2'
                        zIndex='100'
                        fontSize='xs'

                        >
                          2
                        </Flex>
                  </Flex>
                  <Heading fontSize='xl' letterSpacing='tight'>My Cards</Heading>
            </Flex>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
