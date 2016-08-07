import Chart from "./Chart";

declare const Trello: any;
declare const $: any;
declare const jQuery: any;

document.addEventListener("DOMContentLoaded", function () {

    Trello.authorize({
        name: "Trello Burndown",
        success: onAuthorizationSuccess,
    });

    function onAuthorizationSuccess(): void {
        console.log("Success");
    }
});