import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  vegan  = "Vegan"
  private subjectKeyUp = new Subject<any>();



  constructor() { }


  ngOnInit(): void {
    this.subjectKeyUp
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value) => {

      });
  }

  onSearch($event:any){
    const value = $event.target.value;
    this.subjectKeyUp.next(value);
  }

  getRecipes(){
    //TODO Implementar el servicio para buscar la receta y también si es vegana o no
  }

}


// Tutorial DebounceTime distinctUntilChanged para searchbar
// https://www.youtube.com/watch?v=ZqQaEVHYCZY

// Tutorial para tener el radio button marcado
// https://www.youtube.com/watch?v=er8FD9V3FEU