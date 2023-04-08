import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
})
export class NewMemberComponent implements OnInit {
  menber = { name: '', surname: '', phone: '' };

  constructor(private api: ApiService, private appComponent: AppComponent) {}

  ngOnInit() {}

  save() {
    this.api.saveNewMember(this.menber).subscribe(
      (data) => {
        // mombers nome da tabela no banco

        this.appComponent.menbers.push(data);
      },
      (error) => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }
}
