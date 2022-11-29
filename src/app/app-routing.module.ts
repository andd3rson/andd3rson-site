import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotfoundPageComponent } from "./shared/notfound-page/notfound-page.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((x) => x.HomeModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./pages/contact/contact.module").then((m) => m.ContactModule),
  },
  {
    path: "project",
    loadChildren: () =>
      import("./pages/projects/projects.module").then((m) => m.ProjectsModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "**",
    component: NotfoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
