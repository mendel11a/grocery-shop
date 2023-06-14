import React from "react";
import { Chart } from "react-google-charts";

const dataTypes= ["Date", "Income", "Outcome", "Revenue"]
const colorsTypes= ["red", "blue", "green"]

const LineChart = ({transactions}) => {
    return (
        <Chart
            width={"100%"}
            height={"600px"}
            chartType="LineChart"
            data={[
                dataTypes,
                ...transactions.map((transaction) => [
                    transaction.date.split("T")[0],
                    transaction.income,
                    transaction.outcome,
                    transaction.income - transaction.outcome,
                ]),
            ]}
            options={{
                hAxis: {
                    title: "Date",
                },
                vAxis: {
                    title: "Amount",
                },
                colors: colorsTypes,
            }}
            rootProps={{ "data-testid": "1" }}
        />
    );
};

export default LineChart;
