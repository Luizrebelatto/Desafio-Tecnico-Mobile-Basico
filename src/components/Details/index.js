import React from 'react';
import { Wrapper, ModalArea, Button, ButtonText, ModalText, AreaContent, TitleContent } from './styles'

export default function ModalBudget(props) {
    return (
        <Wrapper>

            <ModalArea>

                <Button onPress={props.back}>
                    <ButtonText>Voltar</ButtonText>
                </Button>

                <AreaContent>
                    <TitleContent>Vendedor:</TitleContent>
                    <ModalText>{props.dataBudge.seller}</ModalText>
                </AreaContent>

                <AreaContent>
                    <TitleContent>Cliente:</TitleContent>
                    <ModalText>{props.dataBudge.customer}</ModalText>
                </AreaContent>

                <AreaContent>
                    <TitleContent>Descrição:</TitleContent>
                    <ModalText>{props.dataBudge.description}</ModalText>
                </AreaContent>

                <AreaContent>
                    <TitleContent>Valor:</TitleContent>
                    <ModalText>{props.dataBudge.value}</ModalText>
                </AreaContent>

            </ModalArea>

        </Wrapper>
    )
}
