import * as d3 from "d3";

interface Schema {
    heading: String;
}

interface Graph {
    markers: Array<Marker>;
    label: string;
    color: String | null;
}

interface Marker {
    x: Number,
    y: Number,
}


export default class Chart {
    public element: Element;
    public schema: Schema;
    public graphs: Array<Graph>;

    constructor(element: Element, schema: Schema, graphs: Array<Graph>) {
        this.element = element;
        this.schema = schema;
        this.graphs = graphs;
    }

    private get width(): Number {
        return this.element.clientWidth;
    }

    private get height(): Number {
        return this.element.clientHeight;
    }
}