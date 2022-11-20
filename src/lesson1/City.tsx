import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";

type CityPropsType = {
    data: Array<MoneyType>
}

export const City = (props: CityPropsType) => {


    // const mappedMoney = props.data.map((el: MoneyType, index) => (
    //     <CurrentBankomat
    //         key={index}
    //         money={el}
    //     />
    // ))

    const mappedMoney = props.data.map((el: MoneyType, index) => (
        <CurrentBankomat
            money={el}
        key={index}/>
    ))


    return (
        <div>
            <div>{mappedMoney}</div>
        </div>
    );
};
