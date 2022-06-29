import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To do List Universidade MV';
  list:any[]=[];

  addTask(item:string)
  {
    console.warn(item);
    this.list.push({id:this.list.length,name:item})
    console.log(this.list);
  }
  removeTask(id:number)
  {
    this.list=this.list.filter(item=>item.id !== id);
  }
}
