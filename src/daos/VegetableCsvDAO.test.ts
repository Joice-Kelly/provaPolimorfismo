import { Vegetable } from './../models/Vegetable';
import { VegetableCsvDAO } from './VegetableCsvDAO';


let vegetableDAO: VegetableCsvDAO

describe('Tests over VegetableCsvDAO', () => {
  beforeAll(() => {
    vegetableDAO = new VegetableCsvDAO()
  })

  it('should retrieve a vegetable by its id', () => {
    const vegetableID = 27
    const vegetable = vegetableDAO.recoveryVegetableByID(vegetableID)

    expect(vegetable?.name).toBe('Salsinha')
    expect(vegetable?.benefits).toContain('Ajuda emagrecer')
  })

  it('should retrieve a vegetable by its name', () => {
    const vegetableName = 'Maxixe'
    const vegetable = vegetableDAO.recoveryVegetablesByPartialName('maxixe')
    expect(vegetableName).toBeDefined();
    expect(vegetable?.name).toBe('Maxixe')
  })

  it('should retrieve a vegetable by its benefits', () => {
    const vegetableBenefit = 'Ajuda emagrecer'
    const vegetable = vegetableDAO.recoveryVegetablesByBenefit('Ajuda')
    expect(vegetableBenefit).toBeDefined()
    expect(vegetable).toBeDefined()
    expect(vegetable?.benefits.toLowerCase()).toContain('ajuda')
  })
})

