import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-perent',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.css']
})
export class PerentComponent {

  showdiv:boolean=false;

  showon:boolean=false;
  showon1:boolean=true;
  toggle() {
    this.showdiv= !this.showdiv;
    this.showon= !this.showon;
    this.showon1= !this.showon1;
    }

    mydate =[
      'name', 
    ];

    sname:string='';
    adddata(sname:any){
      this.mydate.push(sname.value);
      this.sname='';
    }

    input:Number = this.mydate.length
    deletelast(){
    this.mydate.splice(this.mydate.length-1,1);
    }

    deleteonmydate(itemmm:any){
      this.mydate.splice(itemmm,1)
    }

    count:number= 0;

    onadd(){
      this.count = this.count +1;
    }
    onremove(){
      this.count = this.count -1;   
    }  
}
