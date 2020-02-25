import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  users: any[] = [
    {
      name: 'Luis',
      firstLastName: 'Gordillo',
      secondLastName: 'Carrillo',
      position: 'FrontEnd',
      country: 'COL',
      City: 'Bucaramanga',
      phoneNumber: 3166214644,
      email: 'lgordillo@cecropia',
      websiteURL: 'lgordillo.wix.com',
      skype: 'luisskype123',
      skills: ['HTML', 'CSS', 'JS', 'Angular', 'Ionic'],
      yearsExperience: 0,
      languajes: [
                  {name: 'English', lvl: 'B2'},
                 ],
      certifications: ['XXI Congreso', 'Certificacion XSD', 'Certificacion XSD'],
      referral: 'UNAB'
    },
    {
      name: 'Maria',
      firstLastName: 'Diaz',
      secondLastName: 'Daza',
      position: 'BackEnd',
      country: 'CR',
      City: 'Cartago',
      phoneNumber: 3166214644,
      email: 'maria@cecropia',
      websiteURL: 'maria.wix.com',
      skype: 'luisskype123',
      skills: ['HTML', 'CSS', 'NodeJS', 'Python', 'Git'],
      yearsExperience: 5,
      languajes: [
                  {name: 'English', lvl: 'A2'},
                 ],
      certifications: ['XXI Congreso', 'Certificacion XSD', 'Certificacion XSD'],
      referral: 'UNAB'
    }
  ];

  constructor() { }

  getData() {
    return this.users;
  }
}
