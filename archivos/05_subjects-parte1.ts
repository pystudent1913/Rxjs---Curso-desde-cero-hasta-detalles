import { Observable, Observer, Subject } from 'rxjs';

/**
 * QUINTA CLASE
 * 
 * Subject parte 1
 * 
 */


const observer: Observer<any> = {
  next: value => console.log('next => ', value),
  error: err => console.warn('err => ', err),
  complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>( subs => {

  const intervalRef = setInterval( () => {
    subs.next( Math.random() );
  }, 1000)

  return () => clearInterval( intervalRef );
});

/**
 * 1.- Casteo multiple: distribuye la informacion a todos los lugares que hayan sido inscritos
 * 2.- Tambien es un observer
 * 3.- Tambien tiene next, error, complete
 */

const subject$ = new Subject();

intervalo$.subscribe( subject$ );


// const subs1 = intervalo$.subscribe(rnd => {
//   console.log('random1 -> ', rnd);
// });
// const subs2 = intervalo$.subscribe(rnd => {
//   console.log('random2 -> ', rnd);
// });

const subs1 = subject$.subscribe(rnd => {
  console.log('random1 -> ', rnd);
});
const subs2 = subject$.subscribe(rnd => {
  console.log('random2 -> ', rnd);
});








