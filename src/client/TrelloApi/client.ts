declare const Trello: any;

export function authorize(): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: () => void) => {
        Trello.authorize({
            name: "Trello Burndown",
            persist: false,
            success: () => {
                resolve();
            },
            error: throwTrelloError.bind(reject, "Could not authorize."),
        });
    });
}

export function throwTrelloError(reject: () => void, message: string): void {
    console.error(message);
    if (reject) reject();
}