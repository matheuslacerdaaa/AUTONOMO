import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
import axios from 'axios';

const Example = () => {
  const [data, setData] = useState([
    { name: 'Vendas', value: 0 },
    { name: 'Despesas', value: 0 }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vendasResponse = await axios.get('http://localhost:3069/totalvendas');
        const despesasResponse = await axios.get('http://localhost:3069/totaldespesas');

        const vendas = vendasResponse.data.total_vendas;  
        const despesas = despesasResponse.data.total_despesas;

        setData([
          { name: 'Vendas', value: vendas },
          { name: 'Despesas', value: despesas }
        ]);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            <Cell key="Vendas" fill="#82ca9d" />
            <Cell key="Despesas" fill="#FF8042" />
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
