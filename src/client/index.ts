import * as TrelloApi from "./TrelloApi";
import Chart from "./Chart";

document.addEventListener("DOMContentLoaded", function () {
    let user: TrelloApi.Member|null = null;
    let boards: TrelloApi.Board[]|null = null;

    TrelloApi.authorize().then(() => Promise.all([
        TrelloApi.Board.get(),
        TrelloApi.Member.get(),
    ]).then((results: [TrelloApi.Board[], TrelloApi.Member]) => {
        results.forEach((a: TrelloApi.Board[]|TrelloApi.Member) => {
            if (Array.isArray(a)) boards = a;
            else user = a;
        });
        console.log(user, boards);
    }));
});