import * as TrelloApi from "./TrelloApi";
import Chart from "./Chart";

document.addEventListener("DOMContentLoaded", function () {
    console.log(TrelloApi.Board);
    function doStuff(thing: TrelloApi.Board): void {
        console.log(thing);
    }
    // TrelloApi.authorize().then((): Promise<Array<TrelloApi.Board>> => TrelloApi.Board.get()
    //     .then((boards: Array<TrelloApi.Board>): void => {
    //         console.log(boards);
    //     }));
});