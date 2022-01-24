import React, { Component, useState } from 'react'
import { AvatarGroup, ChakraProvider, Flex, Heading, Stack, Image, Link, Icon, Text, Avatar, Box, IconButton, Table, Thead, Tr, Th, Tbody, Td, Divider, InputGroup, InputLeftElement, Input, Button } from '@chakra-ui/react'
import Logo from "./assets/piggy-logo-white.png"
import { FiPlus, FiCreditCard, FiBell, FiCalendar, FiChevronDown, FiChevronsUp, FiDollarSign, FiHome, FiPackage, FiPieChart, FiSearch} from "react-icons/fi"
import './App.css'
import avatar from "./assets/2496.jpeg"
import avatar_2 from "./assets/avatar-2.jpeg"
import avatar_3 from "./assets/avatar-3.png"
import avatar_4 from "./assets/avatar-4.jpeg"
import MyChart from './MyChart'
import amazon from './assets/amazon.png'
import starbucks from './assets/starbucks.svg'
import youtube from './assets/youtube.png'


function App() {
  const [display, setDisplay] = useState('hide');
  const [value, changeValue] = useState(1)

  return (
    <ChakraProvider>
      <Stack 
        display='flex'
        flexDir='row'
        h={[null, null, "100vh"]}
        flexDir={["column", "column", "row"]}
        maxW="2000px"
        >
            {/*Column 1 */}
            <Flex
              w={["100%", "100%", "10%", "15%", "15%"]}
              flexDir='column'
              alignItems='center'
              backgroundColor='#020202'
              color='#fff'>
                <Flex flexDir="column" justifyContent='space-between' h={[null, null, "100vh"]}>
                    <Flex flexDir="column" as="nav">
                        <Image src={Logo} alignSelf='center' w={["25%", "25%", "50%", "50%", "50%",]} mt="20px" mb="100px"></Image>
                        <Flex flexDir={["row", "row", "column", "column", "column"]}
                            align={["center", "center", "center", "flex-start", "flex-start"]}
                            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                            justifyContent="center">
                          <Flex className='sideBar-items' ml={['0%', '0%', '5%', '25%', '25%']}
                            >
                            <Link display={["none", "none", "flex", "flex", "flex"]}>
                              <Icon as={FiHome} fontSize='2xl' className="active-icon" />
                            </Link>
                            <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
                              <Text className='active' ml={['0','0','20%','20%','20%']}>
                                Home
                              </Text>
                            </Link>
                          </Flex>
                          <Flex className='sideBar-items' ml={['5%', '5%', '5%', '25%', '25%'] }
                            mt={['0%', '0', '15%', '15%', '15%']}
                            >
                            <Link display={["none", "none", "flex", "flex", "flex"]}
                            >
                              <Icon as={FiPieChart} fontSize='2xl'/>
                            </Link>
                            <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
                              <Text ml={['0','0','20%','20%','20%']}>
                                Credit
                              </Text>
                            </Link>
                          </Flex>
                          <Flex className='sideBar-items' ml={['5%', '5%', '5%', '25%', '25%']}
                            mt={['0%', '0', '15%', '15%', '15%']}>
                            <Link display={["none", "none", "flex", "flex", "flex"]}>
                              <Icon as={FiDollarSign} fontSize='2xl' />
                            </Link>
                            <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
                              <Text ml={['0','0','20%','20%','20%']}>
                                Wallet
                              </Text>
                            </Link>
                          </Flex>
                          <Flex className='sideBar-items' justifyContent='center' alignItems='center'
                            ml={['5%', '5%', '5%', '25%', '25%']}
                            mt={['0%', '0', '15%', '15%', '15%']}
                            
                            
                            >
                          
                            <Link display={["none", "none", "flex", "flex", "flex"]}>
                              <Icon as={FiPackage} fontSize='2xl' />
                            </Link>
                            <Link _hover={{textDecor: 'none'}} display={["flex", "flex", "none", "flex", "flex"]}>
                              <Text ml={['0','0','20%','20%','20%']}>
                                Service
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
            <Flex 
              w={["100%", "100%", "60%", "60%", "55%"]} 
              p="3%" mb={2} flexDir='column' overflow='auto' minH='100vh' backgroundColor='#fff'>
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
                  w={["100%", "100%", "30%"]}
                  backgroundColor='#F5F5F5' 
                  flexDir='column' 
                  overflow='auto'
                  minW={[null, null, "300px", "300px", "400px"]}>
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
                  <Heading letterSpacing="tight">My Cards</Heading>
                {value == 1 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, #B57295, #29259A)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$5,750.20</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiCreditCard} />
                                    <Text>Rise.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 1289</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">12/23</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={FiCreditCard} />
                            </Flex>
                        </Flex>
                    </Box>
                  }
                  {value == 2 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, #B57224, #29253B)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$2,250.20</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiCreditCard} />
                                    <Text>Rise.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 1439</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">12/23</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={FiCreditCard} />
                            </Flex>
                        </Flex>
                    </Box>
                  }
                  {value == 3 &&
                    <Box
                        borderRadius="25px"
                        mt={4}
                        w="100%"
                        h="200px"
                        bgGradient="linear(to-t, #D77295, #69259A)"
                    >
                        <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
                            <Flex justify="space-between" w="100%" align="flex-start">
                                <Flex flexDir="column">
                                    <Text color="gray.400">Current Balance</Text>
                                    <Text fontWeight="bold" fontSize="xl">$4,250.20</Text>
                                </Flex>
                                <Flex align="center">
                                    <Icon mr={2} as={FiCreditCard} />
                                    <Text>Rise.</Text>
                                </Flex>
                            </Flex>
                            <Text mb={4}>**** **** **** 2734</Text>
                            <Flex align="flex-end" justify="space-between">
                                <Flex>
                                    <Flex flexDir="column" mr={4}>
                                        <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                                        <Text fontSize="lg">12/23</Text>
                                    </Flex>
                                    <Flex flexDir="column">
                                        <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                                        <Text fontSize="lg">***</Text>
                                    </Flex>
                                </Flex>
                                <Icon as={FiCreditCard} />
                            </Flex>
                        </Flex>
                    </Box>
                  }
                  <Flex justifyContent='center' mt={2}>
                    <Button bgColor={value == 1 ? "gray.600": 'gray.400'} onClick={()=> changeValue(1)} size='xs' mx={1} />
                    <Button bgColor={value == 2 ? "gray.600": 'gray.400'} onClick={()=> changeValue(2)} size='xs' mx={1}/>
                    <Button bgColor={value == 3 ? "gray.600": 'gray.400'} onClick={()=> changeValue(3)} size='xs' mx={1}/>
                  </Flex>
                  <Flex flexDir="column" my={4}>
                    <Flex justify="space-between" mb={2}>
                        <Text>Balance</Text>
                        <Text fontWeight="bold">$140.42</Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text>Credit Limit</Text>
                        <Text fontWeight="bold">$150.00</Text>
                    </Flex>
                    <Flex mt='10%'>
                      <AvatarGroup size="md" max={3}>
                          <Avatar src={avatar_2} />
                          <Avatar src={avatar_3} />
                          <Avatar src={avatar_4} />
                          <Avatar src={avatar_4} />
                          <Avatar src={avatar_4} />
                          <Avatar src={avatar_4} />
                      </AvatarGroup>
                      <Avatar icon={<FiPlus />} ml={2} color="#fff" bgColor="gray.300" />
                    </Flex>
                    
                </Flex>
                <Text color="gray" mt={10} mb={2}>Card number</Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FiCreditCard color="gray.700" />}
                    />
                    <Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
                </InputGroup>
                <Text color="gray" mt={4} mb={2}>Sum</Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FiDollarSign color="gray.700" />}
                    />
                    <Input type="number" placeholder="130.00" />
                </InputGroup>
                <Button mt={4} bgColor="blackAlpha.900" color="#fff" p={7} borderRadius={15}>Send money</Button>
            </Flex>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
