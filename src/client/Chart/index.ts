import * as d3 from "d3";

interface Schema {
    heading: String;
}

interface Plot {
    color: String | null;
}


export default class Chart {
    
    public elements: Array<Element>;
    public schema: Schema;
    public plot: Array<Plot>;

    constructor(elements: string | Element | NodeList, schema: Schema, plot: Array<Plot>) {
        this.elements = Chart.parseTarget(elements);
        this.schema = schema;
        this.plot = plot;
    }

    /**
     *
     */
    private static parseTarget(elements: string | Element | NodeList): Array<Element> {
        if (typeof elements === "string") return Array.from(document.querySelectorAll(elements));
        if (typeof elements === "NodeList") return Array.from(<NodeListOf<Element>>elements);
        if (elements instanceof Element) return [elements];
        throw new TypeError("Invalid target to initialize chart on.");
    }
}