import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activateRoute.params
      //   .pipe(
      //     switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
      //     tap(console.log)
      //   )
      .subscribe(({ id }) => {
        console.log(id);
      });
  }
}
