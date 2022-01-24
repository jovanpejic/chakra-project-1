import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ChakraProvider } from '@chakra-ui/provider';
import { Flex } from '@chakra-ui/react';

const MyChart = () => {
  const data = [{name: 'Jan', amt: 0},{name: 'Feb', amt: 2500},  {name: 'Apr', amt: 2000}, {name: 'May', amt: 400}, {name: 'Jun', amt: 1600}, {name: 'Jul', amt: 1700}, {name: 'Aug', amt: 1500}, {name: 'Sep', amt: 100}, {name: 'Oct', amt: 1500}, {name: 'Nov', amt: 2400}, {name: 'Dec', amt: 2440},];       
  
  return (
        <ResponsiveContainer width="100%" height="33%">
          <LineChart width={400} height={400} data={data} dot={false}>
            <Line type="monotone" dataKey="amt" stroke="#b57295" strokeWidth={3} />
            
            <XAxis dataKey='name' />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            
          </LineChart>
        </ResponsiveContainer>
  )
};

export default MyChart;


