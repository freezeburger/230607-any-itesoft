import { BehaviorSubject } from "rxjs";


export interface ReactiveServicePattern<DataDescription>{

  /**
   * dataSource$ is the main way to present operations results
   *
   * @example
   *
   * dataSource$.subscribe(data => console.log(data))
   */
  dataSource$:BehaviorSubject<DataDescription>;
}
