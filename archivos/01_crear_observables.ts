import { Observable } from 'rxjs';

/**
 * PRIMERA CLASE
 * 
 * Creacion de observables 
 */


// primera forma de crear un observable
// const obs$ = Observable.create()

// Esta es la mas comun y la que usaremos
const obs$ = new Observable<string>( subs => {
  subs.next( 'shania' );

  subs.next('shania 2');

  subs.next('shania 3');

  subs.next('shania 4');

  subs.complete();

  subs.next('shania 5');
});

// la forma recomendable de hacer un observable
// const obs1$ = new Observable<string>(subs => {
// })
// Es con tipados


// funciona
// obs$.subscribe(response => {
//   console.log(response)
// });

// con ECMASCRIPT6 
obs$.subscribe( console.log )

