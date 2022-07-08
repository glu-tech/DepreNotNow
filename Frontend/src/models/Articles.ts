export class Articles{
    constructor(key:number, title:string, content:string, img:string, link:string) {
        this.key = key;
        this.title = title;
        this.content = content;
        this.img = img;
        this.link = link;
    }

    key:number;
    title:string;
    content:string;
    img:string;
    link:string;
}