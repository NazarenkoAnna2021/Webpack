import { TData } from "../types";

export const COLOR = {
    RED: 'rgba(255, 99, 132, 1)' as string,
    NONECOLOR: 'rgba(0, 0, 0, 0)' as string
}
export const data: TData = {
    labels: [
        "2021-10",
        "2021-05",
        "2021-01",
        "2021-12",
        "2021-02",
        "2021-06",
        "2021-11",
        "2021-08",
        "2021-03",
        "2021-07",
        "2021-09",
        "2021-04"
    ],
    datasets: [{
        label: 'Salary',
        data: [31000, 34000],
        borderColor: 'rgba(0, 0, 0, 0)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }]
};