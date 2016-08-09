import * as TrelloApi from "./TrelloApi";
import Chart from "./Chart";

document.addEventListener("DOMContentLoaded", function () {
    TrelloApi.authorize().then(() => TrelloApi.Board.get()
        .then((boards: TrelloApi.Board[]) => {
            console.log(boards);
        }));
});