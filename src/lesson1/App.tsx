import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotesType = 'Dollars' | 'RUBLS' | 'All'
export type MoneyType = {
    banknotes: BanknotesType
    value: number
    number: string
}

let defaultMoney: Array<MoneyType> = [
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]


export const moneyFilter = (money: Array<MoneyType>, filter: BanknotesType): Array<MoneyType> => {
    if (filter === "All") {
        console.log(1, money)
        return money
    }

   console.log(2, money.filter(element => element.banknotes === filter))
    return money.filter(element => element.banknotes === filter)
}

function App() {
    const [money, setMoney] = useState<Array<MoneyType>>(defaultMoney)
    const [filter, setFilter] = useState<BanknotesType>('All')

    const filteredMoney: Array<MoneyType> = moneyFilter(money, filter)

    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilter={setFilter}  //useState передаем? Так можно было?!
               // filter={filter}       //если не будем использовать, может вообще не передавать?
            />
        </div>
    );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;
