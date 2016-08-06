import * as d3 from "d3";

export default class Chart {
    
    private elements: Array<Element>;

    constructor(elements: string|Element|NodeList, schema: Object) {
        this.elements = Chart.parseTarget(elements);
    }

    /**
     *
     */
    private static parseTarget(elements: string|Element|NodeList): Array<Element> {
        if (typeof elements === "string") return Array.from(document.querySelectorAll(elements));
        if (typeof elements === "NodeList") return Array.from(<NodeListOf<Element>>elements);
        if (elements instanceof Element) return [elements];
        throw new TypeError("Invalid target to initialize chart on.");
    }

    /**
     * 
     */
    private static parseGraphData(data: Object): Object {
        return {

        };
    }
}