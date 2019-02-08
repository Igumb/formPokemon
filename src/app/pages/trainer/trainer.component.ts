import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

	trainer: string = "ash";
	valor: number = 3;
	condicao: boolean = true;
	imagemPikachu: string = "https://img2.gratispng.com/20171218/938/pikachu-png-5a383edf555979.8277023715136355513496.jpg";
	buttonDisabled: boolean = true;
	wrong: string = 'Tá errado!';
	right: string = 'Tá certo!';
	trainers: any[] =[
		{ name: 'ash', birthdate: '2009-02-06' },
		{ name: 'misty', birthdate: '1999-02-06' },
		{ name: 'brock', birthdate: '1994-02-06' },
		{ name: 'gary', birthdate: '2009-02-06' }
	];
  is_show: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  getValor(){
  	return 1;
  }

  onClick(){
  	this.is_show = !this.is_show;
  }

  delete(i){
  	this.trainers.splice(i,1);
  }

}
