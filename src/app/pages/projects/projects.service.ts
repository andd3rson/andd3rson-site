import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  gitHub = "https://api.github.com/users/andd3rson/repos";
  constructor(private http: HttpClient) { 
    
  }
  
  getGitHubRepository(): Observable<Project[]>{
    return this.http.get<Project[]>(this.gitHub)
  }
}
