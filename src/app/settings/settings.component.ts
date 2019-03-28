import { Component, OnInit } from "@angular/core";
import {SettingsService} from "~/app/settings/settings.service";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    public hello: string;
    constructor(private settingsService: SettingsService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.hello = this.settingsService.craeteDoc();
    }

}
