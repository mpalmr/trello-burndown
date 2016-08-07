import "./chart.scss";
import * as d3 from "d3";

interface Graph {
    markers: Array<Marker>;
    label: string;
    color: String | undefined;
}

interface Marker {
    x: Number;
    y: Number;
}

interface Options {
    heading: String;
}


export default class Chart {
    public element: Element;
    public graphs: Array<Graph>;
    public options: Options;

    constructor(element: Element, graphs: Array<Graph>, options: Options) {
        this.element = element;
        this.graphs = graphs;
        this.options = options;
    }
}