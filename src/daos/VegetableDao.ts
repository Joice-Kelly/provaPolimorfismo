import { join } from 'path';
import { Vegetable } from './../models/Vegetable';
import { readFileSync } from 'fs';

export class VegetableDAO{
  protected _vegetables: Vegetable[]
  protected _strContent: string

  constructor(filename: string){
    const fileName = join(__dirname, '..', 'data', filename)
    this._strContent = readFileSync(fileName, 'utf-8')
    this._vegetables = []
}

  recoveryVegetableByID(id: number): Vegetable | undefined{
    const vegetable = this._vegetables.find((c) => c.id === id)
    return vegetable
  }

  recoveryVegetablesByPartialName(name: string): Vegetable | undefined{
    const vegetable = this._vegetables.find((c) => c.name.toLowerCase() === name.toLowerCase())
    return vegetable
  }

  recoveryVegetablesByBenefit(benefits: string): Vegetable | undefined{
    const normalizedBenefit = benefits.toLowerCase()
    const vegetable = this._vegetables.find((c)=> c.benefits.toLowerCase().includes(normalizedBenefit))
    return vegetable
  }
}
