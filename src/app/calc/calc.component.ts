import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  
  a:any;
  b:any; 
  c:number=0;
  d:String="";
  constructor() {
    console.log("Cons Called")
   }

  ngOnInit(): void {
    console.log("Init Called")
  }
  add(){
    console.log("Add()called")
    console.log("a = >",this.a)
    console.log("a = >",this.b)
    this.c=this.a+this.b
    this.d="Addition"
  }
  sub(){
    console.log("Add()called")
    console.log("a = >",this.a)
    console.log("a = >",this.b)
    this.c=this.a-this.b
    this.d="Subtraction"
  }
  Mul(){
    console.log("Add()called")
    console.log("a = >",this.a)
    console.log("a = >",this.b)
    this.c=this.a*this.b
    this.d="Multiplication"
  }
  Div(){
    console.log("Add()called")
    console.log("a = >",this.a)
    console.log("a = >",this.b)
    this.c=this.a/this.b
    this.d="Division"
  }
}
