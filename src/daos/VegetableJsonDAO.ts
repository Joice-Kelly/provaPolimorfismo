import { Vegetable } from './../models/Vegetable';
import { VegetableDAO } from './VegetableDao';


export class VegetableJsonDAO extends VegetableDAO{
  constructor() {
    super('vegetables.json')
    const objs: Vegetable[] = JSON.parse(this._strContent)
    this._vegetables = objs
  }
}