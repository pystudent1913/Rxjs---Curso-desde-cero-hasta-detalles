import { Observable, Observer } from 'rxjs';

/**
 * SEGUNDA CLASE
 * 
 * Subscripcion de observables 
 */


// Este observer lo podemos mandar a la subscripcion 
// Y le dira de que forma proceder con los datos que van llegando
const observer: Observer<any> = {
  next: value => console.log('next => ', value),
  error: err => console.warn('err => ', err),
  complete: () => console.info('completado')
}



const obs$ = new Observable<string>( subs => {
  subs.next( 'shania' );

  subs.next('shania 2');

  subs.next('shania 3');

  subs.next('shania 4');

  // Generamos un error 
  // const a = undefined;
  // a.nombre = 3;

  subs.complete();

  subs.next('shania 5');
});

obs$.subscribe( observer );

// obs$.subscribe( 
//   next => console.log('next => ', next),
//   error => console.warn('error => ', error),
//   () => console.info('complete')
// );

