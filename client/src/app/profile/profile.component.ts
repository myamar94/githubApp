import { Component, OnInit } from '@angular/core';
import {GitserviceService} from '../services/gitservice.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username:string;
  user = [];
  repos= [];
  constructor(private gitService: GitserviceService) {

   }

  ngOnInit() {
  }

onSearch(){
  this.gitService.getUserProfile(this.username).subscribe(data =>{
   
      this.user = data;
      
    
  });

  this.gitService.getRepos(this.username).subscribe(repos =>{

    this.repos = repos;
  })
}
  
}
