import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType;
    key:number,
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <Wrapper>

            <Banknote key={props.key} color={props.money.banknotes === "Dollars" ? "green" : "red"}>
                <span>{props.money.banknotes}</span>
                <span>{props.money.number}</span>
                <span>{props.money.value}</span>
            </Banknote>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: lightgrey;
  border: 3px solid  grey;
  width: 300px;
`

const Banknote = styled.li`  
  background-color: ${props => {
    if (props.color === "green") {
    return "green"
  } else {return "pink"}
}};
`