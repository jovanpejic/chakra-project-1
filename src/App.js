import React, { Component } from 'react'
import { ChakraProvider, Flex, Heading, Stack, Image, Link, Icon, Text, Avatar, Box } from '@chakra-ui/react'
import Logo from "./assets/piggy-logo-white.png"
import {FiDollarSign, FiHome, FiPackage, FiPieChart} from "react-icons/fi"
import './App.css'
import avatar from "./assets/2496.jpeg"
import MyChart from './MyChart'


function App() {
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
              
              <MyChart alignSelf="justify-left" />
              

            </Flex>
            {/*Column 3 */}
            <Flex p='3%' w='35%' backgroundColor='#F5F5F5' flexDir='column' overflow='auto'>Column</Flex>

      
      </Stack>
    </ChakraProvider>
  );
}

export default App;
