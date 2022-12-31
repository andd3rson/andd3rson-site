import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "./projects.service";
import { Project } from "./project.model";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  gitProject: Project[] = [];
  constructor(private proj: ProjectsService) {
    proj.getGitHubRepository().subscribe((res: Project[]) => {
      this.gitProject = res;
      
    });
  }

  ngOnInit() {}
}
