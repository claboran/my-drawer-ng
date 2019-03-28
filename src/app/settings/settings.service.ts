import {Injectable} from "@angular/core";
import {Couchbase} from "nativescript-couchbase-plugin";

@Injectable({
    providedIn: "root"
})
export class SettingsService {
    private _db = new Couchbase('settings-db');
    private docid: any;
    constructor() {
    }

    craeteDoc(): string {
        this.docid  = this._db.createDocument({
            "firstname": "O",
            "lastname": "Fortune",
            "address": {
                "country": "Trinidad and Tobago"
            },
            "twitter": "https://www.twitter.com/triniwiz"
        });
        return this._db.getDocument(this.docid)['lastname'];
    }
}
