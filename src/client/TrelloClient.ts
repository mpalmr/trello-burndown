export default class TrelloClient {
    public isAuthorized: Boolean = false;

    constructor() {
        
    }

    // public authorize(): Promise {
    //     return new Promise ((resolve, reject) => {
    //         Trello.authorize({
    //             name: "Trello Burndown",
    //             persist: false,
    //             success: this.authSuccess,
    //             error: TrelloClient.authError,
    //         }); 
    //     });
    // }

    // private authSuccess(): void {
    //     this.isAuthorized = true;
    // }

    // private static authError(): void {
    //     console.error("Could not authorize user");
    // }
}