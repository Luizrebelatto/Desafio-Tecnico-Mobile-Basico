import React, { useEffect, useState } from 'react';
import { Wrapper, FlatList } from './Budgets/styles'

import api from './Services/api';
import Budgets from './Budgets';

export default function App() {
    const [dataBudge, setDataBudge] = useState([]);

    useEffect(() => {

        async function loadBudge() {
            const response = await api.get('/');

            setDataBudge(response.data);
        }

        loadBudge();

    }, []);


    return (
        <Wrapper>
            <FlatList
                data={dataBudge}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Budgets data={item} />}
            />
        </Wrapper>
    );
}

