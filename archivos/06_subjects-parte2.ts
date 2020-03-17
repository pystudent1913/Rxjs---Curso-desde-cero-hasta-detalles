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

  return () => {
    console.log('intervale destruido')
    clearInterval( intervalRef );
  }
});

/**
 * 1.- Casteo multiple: distribuye la informacion a todos los lugares que hayan sido inscritos
 * 2.- Tambien es un observer
 * 3.- Tambien tiene next, error, complete
 */

const subject$ = new Subject();

const subscription = intervalo$.subscribe( subject$ );


// const subs1 = intervalo$.subscribe(rnd => {
//   console.log('random1 -> ', rnd);
// });
// const subs2 = intervalo$.subscribe(rnd => {
//   console.log('random2 -> ', rnd);
// });

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);


setTimeout( () => {
  subject$.next(10);

  // Aunque le haga complete a este subject el observable PADRE u ORIGEN 
  // no se completeara como tal porque solo completas el subject
  subject$.complete();
  
  // Aqui si veriamos la limpieza del observable
  subscription.unsubscribe();
}, 2000);

/***
 * 
 * COLD OBSERVABLE
 * 
 * Cuando la data es producida por el observable en si misma es considerado "Cold observable"
 * 
 * HOT OBSERVABLE
 * 
 * Cuando la data es producida fuera del observable es llamado "Hot observable"
 * 
 */





