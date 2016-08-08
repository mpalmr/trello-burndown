import "./chart.scss";
import * as d3 from "d3";

interface Graph {
    markers: Marker[];
    label: string;
    color?: string;
}

interface Marker {
    x: number;
    y: number;
}

interface Options {
    heading: string;
}


export default class Chart {
    public element: Element;
    public graphs: Graph[];

    constructor(element: Element, graphs: Graph[], options?: Options) {
        this.element = element;
        this.graphs = graphs;
    }
}