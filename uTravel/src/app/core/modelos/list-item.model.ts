export class ListItem {
    name: string;
    id: string;
    date: Date;

    constructor(name: string, id: string, date: Date = new Date()) {
        this.name = name;
        this.id = id;
        this.date = date;
    }
}
