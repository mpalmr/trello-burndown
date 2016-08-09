import { throwTrelloError } from "./client";
declare const Trello: any;

export default class Board {
    public id: string;
    public name: string;
    public description: string;
    public url: string;
    public status: Status;
    public date: BoardDates;
    public members: Member[];
    public background: Background;

    constructor(board: BoardResponse) {
        this.id = board.id;
        this.name = board.name;
        this.description = board.desc;
        this.url = board.url;
        this.status = {
            subscribed: board.subscribed,
            closed: board.closed,
            pinned: board.pinned,
            starred: board.starred,
        };
        this.date = {
            lastActivity: new Date(board.dateLastActivity),
            lastView: new Date(board.dateLastView),
        };
        this.members = board.memberships.map((member: MembershipsResponse) => ({
            id: member.idMember,
            type: member.memberType,
            status: {
                unconfirmed: member.unconfirmed,
                deactivated: member.deactivated,
            },
        }));
        this.background = {
            name: board.prefs.background,
            color: board.prefs.backgroundColor,
        };
        if (board.prefs.backgroundImage) this.background.image = {
            url: board.prefs.backgroundImage,
            isScaled: board.prefs.backgroundImageScaled || false,
            isTiled: board.prefs.backgroundTile || false,
        };
    }

    private static get(): Promise<void> {
        return new Promise<Board[]>((resolve: (boards: Board[]) => void, reject: () => void) => {
            Trello.get("/member/me/boards", ((boards: BoardResponse[]) => {
                resolve(boards.map((board: BoardResponse) => new Board(board)));
            }), throwTrelloError.bind(reject));
        });
    }
}


interface BoardResponse {
    id: string;
    name: string;
    desc: string;
    closed: boolean;
    pinned: boolean;
    invited: boolean;
    starred: boolean;
    subscribed: boolean;
    dateLastActivity: string;
    dateLastView: string;
    url: string;
    labelNames: Object;
    memberships: MembershipsResponse[];
    prefs: {
        background: string;
        backgroundColor: string;
        backgroundImage?: string;
        backgroundImageScaled?: boolean;
        backgroundTile?: boolean;
    };
}

interface MembershipsResponse {
    id: string;
    idMember: string;
    memberType: MemberTypes;
    unconfirmed: boolean;
    deactivated: boolean;
}

interface Member {
    id: string;
    type: MemberTypes;
    status: {
        unconfirmed: boolean;
        deactivated: boolean;
    }
}

interface Status {
    subscribed: boolean;
    closed: boolean;
    pinned: boolean;
    starred: boolean;
}

interface BoardDates {
    lastActivity: Date;
    lastView: Date;
}

interface Background {
    name: string;
    color: string;
    image?: BackgroundImage;
}

interface BackgroundImage {
    url: string;
    isScaled: boolean;
    isTiled: boolean;
}

enum MemberTypes { normal, admin }