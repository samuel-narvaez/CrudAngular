import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'Angular Crud';

  msg:String = '';

  Employees = [
    {'name': 'samuel',  'email': 'Snarvaezperez47@gmail.com' },
    {'name': 'camilo',  'email': 'casegica@gmail.com' },
    {'name': 'stiven',  'email': 'Stiven@gmail.com' }
  ];

  model:any = {};
  model2:any = {};
  hidenUpdate:boolean = true;

  AddEmployee():void{
    this.Employees.push(this.model);
    this.msg= ' Campo Agregado ';
  }

  DeleteEmployee(i):void{
    var answer = confirm('Seguro que quieres eliminar?');
    if (answer) {
      this.Employees.splice(i, 1);
      this.msg = 'Campo Eliminado ';
    }
  }

  myValue;
  EditEmployee(i):void{
    this.hidenUpdate = false;
    this.model2.name = this.Employees[i].name;
    this.model2.email = this.Employees[i].email;
    this.myValue = i;
  }

  UpdateEmployee():void{
    let i = this.myValue;
    for (let j = 0; j<this.Employees.length; j++){
      if(i == j){
        this.Employees[i] = this.model2;
        this.msg = ' Campo Actualizado ';
        this.model2 = {};
      }
    }
  }

  closeAlert():void{
    this.msg = '';
  }

}
