import React from 'react';
import {City} from "./City";
import {BanknotesType, MoneyType} from "./App";

type CountryPropsType = {
    data: Array<MoneyType>
    setFilter:  (filter: BanknotesType) =>  void// setFilter -это гоузчик, у которого всегда в руках товар
    // filter: BanknotesType
}

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        props.setFilter("All")
    }

    const setDollars = () => {
        props.setFilter('Dollars')
    }

    const setRUBLS = () => {
        props.setFilter('RUBLS')
    }


    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setDollars}>Dollars</button>
            <button onClick={setRUBLS}>RUBLS</button>
            <City data={props.data}/>

        </div>
    );
};

