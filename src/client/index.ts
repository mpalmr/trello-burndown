import TrelloApi from "./TrelloApi";
import Chart from "./Chart";

document.addEventListener("DOMContentLoaded", function () {
    TrelloApi.client.authorize()
        .then(() => TrelloApi.client.getBoards()
            .then((boards: Object[]) =>
        {
            console.log(boards);
        }));
});