import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;

  constructor(private _githubService: GithubService) { 
  		this._githubService.getUser().subscribe(user=>{
  			this.user = user;
  		});
  }

  ngOnInit() {
  }

}
