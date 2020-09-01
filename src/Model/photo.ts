import {Component} from '@angular/core'

export class Photo{
    private url : string;

    public getUrl () : string{
        return this.url;
    }

    public setUrl(lien : string){
        this.url = lien;
    }
}