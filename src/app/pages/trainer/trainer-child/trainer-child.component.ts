import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trainer-child',
  templateUrl: './trainer-child.component.html',
  styleUrls: ['./trainer-child.component.css']
})
export class TrainerChildComponent implements OnInit {

	@Input() trainers;
	@Output() removetrainer = new EventEmitter<number>();

 	 constructor() { }

  	ngOnInit() {
	}

	delete(i){
		this.removetrainer.emit(i);
	}

}
