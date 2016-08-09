declare const Trello: any;

export default class Member {
    public id: number;
    public username: string;
    public email?: string;
    public fullName?: string;
    public initials: string;
    public status: string;
    public profileUrl: string;
    private confirmed: boolean;
    private orgIds: string[];

    constructor(member: MemberResponse) {
        this.id = member.id;
        this.username = member.username;
        this.email = member.email;  
        this.fullName = member.name;
        this.initials = member.initials;
        this.status = member.status;
        this.profileUrl = member.url;
        this.confirmed = member.confirmed;
        this.orgIds = member.idOrganizations;
    }

    public static get(): Promise<Member> {
        return new Promise<Member>((resolve: (members: Member) => void, reject: () => void) => {
            Trello.get("/members/me", ((response: MemberResponse) => {
                resolve(new Member(response));
            }));
        });
    }
}


interface MemberResponse {
    id: number;
    username: string;
    email?: string;
    name?: string;
    initials: string;
    status: string;
    url: string;
    confirmed: boolean;
    idOrganizations: string[];
}