import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

const CONTACTS = [
  {
    title: "E-mail me",
    description: "andersonconceiicao@outlook.com",
    classNAme: ""
  },
  {
    title: "Sociais Medias",
    description: null,
    urls: [
      {
        path: "https://www.linkedin.com/in/anderson-d-3280711b4/",
        icon: "linkedin"
      },
      {
        path: "https://github.com/andd3rson",
        icon: "github",
      },
      {
        path: "https://www.instagram.com/andd3rson/",
        icon: "instagram",
      },
    ],
    classNAme: ""
  },
  {
    title: "Call me",
    description: "+61 0404 069 145",
    classNAme: "fa-sharp fa-solid fa-location-dot"
  },
  {
    title: "My address",
    description: "888 Collins St. Docklands",
  },
];

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  contactsCards = CONTACTS;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      message: ["", [Validators.required, Validators.maxLength(200)]],
    });
  }

  handlerEmail() {
    console.log(this.form.value);
  }
}
