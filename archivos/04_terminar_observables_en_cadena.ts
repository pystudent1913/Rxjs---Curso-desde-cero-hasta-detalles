import { Observable, Observer } from 'rxjs';

/**
 * CUARTA CLASE
 * 
 * Terminar observables en cadena 
 * 
 */


const observer: Observer<any> = {
  next: value => console.log('next => ', value),
  error: err => console.warn('err => ', err),
  complete: () => console.info('completado')
}


const intervalo$ = new Observable<number>( subs => {

  let contador = 0;
  // Crear un contador 1,2,3,4,5

  const intervalo = setInterval( () => {
    //cada segundo
    contador++;
    subs.next(contador)
  }, 1000);


  setTimeout(() => {
    subs.complete()
  }, 2550)

  return () => {
    clearInterval(intervalo);
    console.log('intervalo destruido')
  }
})
 
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

// encadenar subscripciones
subs1
  .add( subs2 )
  .add( subs3 );


setTimeout(() => {
  
  subs1.unsubscribe();

}, 3000);





