import * as chart from "./Chart";
declare const Trello: any;

document.addEventListener("DOMContentLoaded", function () {

    Trello.authorize({
        type: "popup",
        name: "Trello Burndown",
        success: onAuthorizationSuccess,
    });

    function onAuthorizationSuccess(): void {

    }
});