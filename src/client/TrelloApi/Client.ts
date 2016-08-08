import { default as Board, BoardResponse } from "./Board";

declare const Trello: any;


export default class TrelloClient {
    public isAuthorized: Boolean = false;

    constructor() {}

    public authorize(): Promise<void> {
        return new Promise<void>((resolve: () => void, reject: () => void) => {
            Trello.authorize({
                name: "Trello Burndown",
                persist: false,
                success: () => {
                    this.isAuthorized = true;
                    resolve();
                },
                error: TrelloClient.error.bind(reject, "Could not authorize."),
            });
        });
    }

    public getBoards(): Promise<Board[]> {
        return new Promise<Board[]>((resolve: (boards: Board[]) => void, reject: () => void) => {
            Trello.get("/member/me/boards", ((boards: BoardResponse[]) => {
                resolve(boards.map((board: BoardResponse) => new Board(board)));
            }), TrelloClient.error.bind(reject));
        });
    }

    private static error(reject: ()=>void, message: string): void {
        console.error(message);
        if (reject) reject();
    }
}