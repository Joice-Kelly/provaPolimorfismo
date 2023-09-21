import { Vegetable } from './../models/Vegetable';
import { VegetableDAO } from './VegetableDao';


export class VegetableCsvDAO extends VegetableDAO{
  constructor(){
    super('vegetables.csv');
    const arr = this._strContent.split('\n').slice(1)
    arr.forEach((c) => {
      const values = c.split(',')
      const vegetable: Vegetable = {
        id: parseInt(values[0]),
        name: values[1],
        imageURL: values[2],
        benefits: values[3],
      }
      this._vegetables.push(vegetable)
    })
  }
}