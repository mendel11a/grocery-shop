import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import LineChart from "../components/LineChart";
import Header from "../components/Header";
import DateInput from "../components/DateInput";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer";

const Container = styled.div`
    height: 100%;
    widht: 100%;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const Home = () => {
    const [transactions, setTransactions] = useState([]);
    const [fromDate, setFromDate] = useState("2021-06-01");
    const [toDate, setToDate] = useState("2021-12-31");

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        const res = await axios.get(
            `/transactions?from=${fromDate}&to=${toDate}`
        );
        setTransactions(res.data);
    };

    return (
        <Container>
            <Header from={fromDate} to={toDate} />
            <Wrapper>
                <DateInput
                    text="From"
                    type="date"
                    value={fromDate}
                    setData={setFromDate}
                />
                <DateInput
                    text="To"
                    type="date"
                    value={toDate}
                    setData={setToDate}
                />
                <FilterButton fetchTransactions={fetchTransactions} />
            </Wrapper>
            <LineChart transactions={transactions} />
            <Footer />
        </Container>
    );
};

export default Home;
