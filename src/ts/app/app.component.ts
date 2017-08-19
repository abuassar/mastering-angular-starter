import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray, FormBuilder } from "@angular/forms";

@Component({
    selector: "main",
    template: require("./app.component.html"),
})
export class AppComponent {

    public profileForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.profileForm = this.fb.group({
            firstNameInput: [""],
            lastNameInput: [""],
            addressGroups: this.fb.array([
                this.fb.group({
                    streetInput: [""],
                    cityInput: [""],
                    stateInput: [""],
                    zipCodeInput: [""],
                }),
            ]),
        });
    }

    public addAddressGroup() {
        const fa = this.profileForm.controls["addressGroups"] as FormArray;

        fa.push(new FormGroup({
            streetInput: new FormControl(""),
            cityInput: new FormControl(""),
            stateInput: new FormControl(""),
            zipCodeInput: new FormControl(""),
        }));
    }

    /**
     * save
     */
    public save() {
        console.log(this.profileForm.value);
    }
}
