import * as d3 from 'd3';

export default class Chart {
    
    private elements: NodeList;

    constructor(target: string|Element|NodeList) {
        this.elements = Chart.parseTarget(target);
    }

    private static parseTarget(target): NodeList {
        if (typeof target === 'string') return Array.from(document.querySelectorAll(target));
        if (typeof target === 'Node') return Array.from(target);
        if (target instanceof Element) return [target];
    }
    
    // private static BASE_CLASS: string = 'trello-burndown-chart';
    // private targetElements: NodeList;
    
    // constructor(targets:string|Element|NodeList) {
    //     this.targetElements = ;
    // }
    
    // public set targetElements(targets: string | Element | NodeList): NodeList {
        
    // }
    
    /**
    //  * 
    //  */
    // private static parseTargetElements(targets: string | Element | NodeList): Array {
    //     let elements: Array<Element>;
    //     switch (typeof targets) {
    //         case 'string': elementList = Array.from(document.querySelectorAll());
    //     }
        
    //     if (typeof targets === 'string') return document.querySelectorAll(targets);
    //     else if (typeof targets === 'string') return targets;
        
        
    //     switch (typeof targets) {
    //         case 'string': return document.querySelectorAll(targets);
    //     }
    // }
    
}