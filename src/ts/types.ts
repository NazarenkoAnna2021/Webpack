export type TStatistic = {
    data: {
        "location": {
            "__CLASS__": string,
            "area": Array<string>,
            "display_name": string
        },
        "month": {
            "2021-10": number,
            "2021-05": number,
            "2021-01": number,
            "2021-12": number,
            "2021-02": number,
            "2021-06": number,
            "2021-11": number,
            "2021-08": number,
            "2021-03": number,
            "2021-07": number,
            "2021-09": number,
            "2021-04": number
        },
        "__CLASS__": string
    }
};
export type TData = {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
        borderWidth: number;
    }[];
}
export type TDom = {
    grafic: HTMLCanvasElement;
    where: HTMLSelectElement;
}
