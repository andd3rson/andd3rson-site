import { Component, OnInit } from "@angular/core";

const PERSONAL_DATA = [
  {
    field: "Name",
    describe: "Anderson da Conceição",
  },
  {
    field: "Nationality",
    describe: "Brazilian",
  },
  {
    field: "Age",
    describe: "28",
  },

  {
    field: "E-mail",
    describe: "andersonconceiicao@gmail.com",
  },
  {
    field: "Phone",
    describe: "+61 0404 069 145",
  },
  {
    field: "City",
    describe: "Melbourne",
  },
  {
    field: "Ocupation",
    describe: "Available",
  },
];
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  personal = PERSONAL_DATA;
  introduction = [
    {
      title: "Software developer - .NET | Angular 2+",
      describe: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    },
    {
      title: "",
      describe: `It'll after personal information, describin what I'm doing actualy.  when an unknown printer 
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b
    ut also the leap into electronic typesetting, remaining essentially unchanged. `,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
