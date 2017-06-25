import { Component, OnInit, Input } from '@angular/core';
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
  repos:any;
  @Input() username:string;

  constructor(private _githubService: GithubService) { 
  	this.user = false;
  }

  ngOnInit() {
  }

  searchUser(){

  	this._githubService.updateUser(this.username);
  	
  	this._githubService.getUser().subscribe(user=>{
  			this.user = user;
  	});

  	this._githubService.getRepos().subscribe(repos=>{
  		this.repos = repos;
  	});
  		
  }

}
