import { Component } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent {

  userSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes:null
  }
  subscriptionTypes: Observable<string[]> | undefined;
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
   this.subscriptionTypes = this.dataService.getSubscripitionTypes();
  }

  onSubmit(form: NgForm): void {
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result => {
        return console.log(' sucesso: ', result);
      },
      error => console.log('error: ', error)
    )
  }

  onBluer(form: NgForm) {
    console.log('onBluer: ', form.valid);
  }
}
