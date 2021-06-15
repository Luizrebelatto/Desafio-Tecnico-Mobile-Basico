import React, { useEffect, useState } from 'react';
import { Wrapper, FlatList } from './screens/Budgets/styles'

import api from './services/api';
import Budgets from './screens/Budgets';

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

