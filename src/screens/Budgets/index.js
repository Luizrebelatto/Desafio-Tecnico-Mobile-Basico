import React, { useState } from 'react';
import {
    Wrapper, Card, DataContainer, DataTitle,
    DataValue, ButtonArea, Button, ButtonText, Modal
} from './styles'


import ModalBudget from '../../components/Details';

export default function Budgets({ data }) {
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <Wrapper>
            <Card>
                <DataContainer>
                    <DataTitle>Vendedor: </DataTitle>
                    <DataValue>{data.seller}</DataValue>
                </DataContainer>

                <DataContainer>
                    <DataTitle>Cliente: </DataTitle>
                    <DataValue>{data.customer}</DataValue>
                </DataContainer>

                <DataContainer>
                    <DataTitle>Valor: </DataTitle>
                    <DataValue>{data.value}</DataValue>
                </DataContainer>

                <ButtonArea>
                    <Button onPress={() => setVisibleModal(true)}>
                        <ButtonText >LEIA MAIS</ButtonText>
                    </Button>
                </ButtonArea>
            </Card>

            <Modal transparent={true} animationType="slide" visible={visibleModal}>
                <ModalBudget dataBudge={data} back={() => setVisibleModal(false)} />
            </Modal>

        </Wrapper>
    );
}