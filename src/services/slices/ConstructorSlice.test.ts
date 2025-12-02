import reducer, {
  addIngredient,
  removeIngredient,
  moveDownIngredient,
  moveUpIngredient,
  constructorInitialState
} from './ConstructorSlice';

const BUN_NAME = 'Фиолетовая булочка';
const MAIN_NAME = 'Синяя котлета';
const SAUCE_NAME = 'Соус голубенький';

const BUN_ID = '1';
const MAIN_ID = '2';
const SAUCE_ID = '3';

const BUN_IMAGE = 'https://code.s3.yandex.net/react/code/bun-01.png  ';
const BUN_IMAGE_MOBILE =
  'https://code.s3.yandex.net/react/code/bun-01-mobile.png  ';
const BUN_IMAGE_LARGE =
  'https://code.s3.yandex.net/react/code/bun-01-large.png  ';

const MAIN_IMAGE = 'https://code.s3.yandex.net/react/code/meat-03.png  ';
const MAIN_IMAGE_MOBILE =
  'https://code.s3.yandex.net/react/code/meat-03-mobile.png  ';
const MAIN_IMAGE_LARGE =
  'https://code.s3.yandex.net/react/code/meat-03-large.png  ';

const SAUCE_IMAGE = 'https://code.s3.yandex.net/react/code/sauce-04.png  ';
const SAUCE_IMAGE_MOBILE =
  'https://code.s3.yandex.net/react/code/sauce-04-mobile.png  ';
const SAUCE_IMAGE_LARGE =
  'https://code.s3.yandex.net/react/code/sauce-04-large.png  ';

const mockBun = () => ({
  id: BUN_ID,
  _id: BUN_ID,
  name: BUN_NAME,
  type: 'bun',
  proteins: 15,
  fat: 16,
  carbohydrates: 17,
  calories: 100,
  price: 1000,
  image: BUN_IMAGE,
  image_mobile: BUN_IMAGE_MOBILE,
  image_large: BUN_IMAGE_LARGE
});

const mockMain = () => ({
  id: MAIN_ID,
  _id: MAIN_ID,
  name: MAIN_NAME,
  type: 'main',
  proteins: 25,
  fat: 26,
  carbohydrates: 27,
  calories: 200,
  price: 2000,
  image: MAIN_IMAGE,
  image_mobile: MAIN_IMAGE_MOBILE,
  image_large: MAIN_IMAGE_LARGE
});

const mockSauce = () => ({
  id: SAUCE_ID,
  _id: SAUCE_ID,
  name: SAUCE_NAME,
  type: 'sauce',
  proteins: 35,
  fat: 36,
  carbohydrates: 37,
  calories: 300,
  price: 3000,
  image: SAUCE_IMAGE,
  image_mobile: SAUCE_IMAGE_MOBILE,
  image_large: SAUCE_IMAGE_LARGE
});

describe('Проверка экшена добавления ингредиентов', () => {
  test('Добавляем булочку', () => {
    const newState = reducer(constructorInitialState, addIngredient(mockBun()));
    const bun = newState.constructor.bun;
    expect(bun).toEqual({
      id: expect.any(String),
      _id: BUN_ID,
      name: BUN_NAME,
      type: 'bun',
      proteins: 15,
      fat: 16,
      carbohydrates: 17,
      calories: 100,
      price: 1000,
      image: BUN_IMAGE,
      image_mobile: BUN_IMAGE_MOBILE,
      image_large: BUN_IMAGE_LARGE
    });
  });

  test('Добавляем основной ингредиент', () => {
    const newState = reducer(
      constructorInitialState,
      addIngredient(mockMain())
    );
    const main = newState.constructor.ingredients;
    expect(newState.constructor.bun).toBeNull();
    expect(main).toHaveLength(1);
    expect(main).toEqual([
      {
        id: expect.any(String),
        _id: MAIN_ID,
        name: MAIN_NAME,
        type: 'main',
        proteins: 25,
        fat: 26,
        carbohydrates: 27,
        calories: 200,
        price: 2000,
        image: MAIN_IMAGE,
        image_mobile: MAIN_IMAGE_MOBILE,
        image_large: MAIN_IMAGE_LARGE
      }
    ]);
  });

  test('Добавляем соус', () => {
    const newState = reducer(
      constructorInitialState,
      addIngredient(mockSauce())
    );
    const souse = newState.constructor.ingredients;
    expect(newState.constructor.bun).toBeNull();
    expect(souse).toHaveLength(1);
    expect(souse).toEqual([
      {
        id: expect.any(String),
        _id: SAUCE_ID,
        name: SAUCE_NAME,
        type: 'sauce',
        proteins: 35,
        fat: 36,
        carbohydrates: 37,
        calories: 300,
        price: 3000,
        image: SAUCE_IMAGE,
        image_mobile: SAUCE_IMAGE_MOBILE,
        image_large: SAUCE_IMAGE_LARGE
      }
    ]);
  });
});

describe('Проверка экшена удаления ингредиентов', () => {
  const startState = {
    ...constructorInitialState,
    constructor: {
      bun: mockBun(),
      ingredients: [{ ...mockMain() }, { ...mockSauce() }]
    }
  };

  test('Удаляем основной ингредиент', () => {
    const newState = reducer(startState, removeIngredient({ id: MAIN_ID }));

    expect(newState.constructor.ingredients).toHaveLength(1);
    expect(newState.constructor.ingredients[0].name).toBe(SAUCE_NAME);
    expect(newState.constructor.bun!.name).toBe(BUN_NAME);
  });

  test('Удаляем соус', () => {
    const newState = reducer(startState, removeIngredient({ id: SAUCE_ID }));

    expect(newState.constructor.ingredients).toHaveLength(1);
    expect(newState.constructor.ingredients[0].name).toBe(MAIN_NAME);
    expect(newState.constructor.bun!.name).toBe(BUN_NAME);
  });

  test('Удаляем несуществующий ингредиент', () => {
    const newState = reducer(startState, removeIngredient({ id: '' }));

    expect(newState.constructor.ingredients).toHaveLength(2);
    expect(newState.constructor.bun!.name).toBe(BUN_NAME);
  });
});

describe('Проверка экшена изменения порядка ингредиентов', () => {
  const startState = {
    ...constructorInitialState,
    constructor: {
      bun: mockBun(),
      ingredients: [{ ...mockMain() }, { ...mockMain() }, { ...mockSauce() }]
    }
  };

  test('Перемещаем ингредиент вниз', () => {
    const newState = reducer(startState, moveDownIngredient(0));

    expect(newState.constructor.ingredients.map((ing) => ing.name)).toEqual([
      MAIN_NAME,
      SAUCE_NAME
    ]);
  });

  test('Перемещаем ингредиент вверх', () => {
    const newState = reducer(startState, moveUpIngredient(2));

    expect(newState.constructor.ingredients.map((ing) => ing.name)).toEqual([
      MAIN_NAME,
      SAUCE_NAME
    ]);
  });

  test('Булочка не изменяется при перемещении ингредиентов', () => {
    const newState = reducer(startState, moveDownIngredient(1));

    expect(newState.constructor.bun!.name).toBe(BUN_NAME);
    expect(newState.constructor.bun!.price).toBe(1000);
  });
});
