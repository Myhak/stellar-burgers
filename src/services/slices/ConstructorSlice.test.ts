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

const imgUrl = (id: string, suffix = '') =>
  `https://code.s3.yandex.net/react/code/${id}${suffix}.png`.trim();

const BUN = {
  id: BUN_ID,
  _id: BUN_ID,
  name: BUN_NAME,
  type: 'bun' as const,
  proteins: 15,
  fat: 16,
  carbohydrates: 17,
  calories: 100,
  price: 1000,
  image: imgUrl('bun-01'),
  image_mobile: imgUrl('bun-01', '-mobile'),
  image_large: imgUrl('bun-01', '-large')
};

const MAIN = {
  id: MAIN_ID,
  _id: MAIN_ID,
  name: MAIN_NAME,
  type: 'main' as const,
  proteins: 25,
  fat: 26,
  carbohydrates: 27,
  calories: 200,
  price: 2000,
  image: imgUrl('meat-03'),
  image_mobile: imgUrl('meat-03', '-mobile'),
  image_large: imgUrl('meat-03', '-large')
};

const SAUCE = {
  id: SAUCE_ID,
  _id: SAUCE_ID,
  name: SAUCE_NAME,
  type: 'sauce' as const,
  proteins: 35,
  fat: 36,
  carbohydrates: 37,
  calories: 300,
  price: 3000,
  image: imgUrl('sauce-04'),
  image_mobile: imgUrl('sauce-04', '-mobile'),
  image_large: imgUrl('sauce-04', '-large')
};

describe('Проверка экшена добавления ингредиентов', () => {
  test('Добавляем булочку', () => {
    const newState = reducer(
      constructorInitialState,
      addIngredient({ ...BUN })
    );
    const bun = newState.constructor.bun;

    expect(bun).toEqual({
      ...BUN,
      id: expect.any(String)
    });
  });

  test('Добавляем основной ингредиент', () => {
    const newState = reducer(
      constructorInitialState,
      addIngredient({ ...MAIN })
    );
    const ingredients = newState.constructor.ingredients;

    expect(newState.constructor.bun).toBeNull();
    expect(ingredients).toHaveLength(1);
    expect(ingredients[0]).toEqual({
      ...MAIN,
      id: expect.any(String)
    });
  });

  test('Добавляем соус', () => {
    const newState = reducer(
      constructorInitialState,
      addIngredient({ ...SAUCE })
    );
    const ingredients = newState.constructor.ingredients;

    expect(newState.constructor.bun).toBeNull();
    expect(ingredients).toHaveLength(1);
    expect(ingredients[0]).toEqual({
      ...SAUCE,
      id: expect.any(String)
    });
  });
});

describe('Проверка экшена удаления ингредиентов', () => {
  const startState = {
    ...constructorInitialState,
    constructor: {
      bun: { ...BUN },
      ingredients: [{ ...MAIN }, { ...SAUCE }]
    }
  };

  test('Удаляем основной ингредиент', () => {
    const newState = reducer(startState, removeIngredient({ id: MAIN_ID }));
    expect(newState.constructor.ingredients).toHaveLength(1);
    expect(newState.constructor.ingredients[0].name).toBe(SAUCE_NAME);
    expect(newState.constructor.bun?.name).toBe(BUN_NAME);
  });

  test('Удаляем соус', () => {
    const newState = reducer(startState, removeIngredient({ id: SAUCE_ID }));
    expect(newState.constructor.ingredients).toHaveLength(1);
    expect(newState.constructor.ingredients[0].name).toBe(MAIN_NAME);
    expect(newState.constructor.bun?.name).toBe(BUN_NAME);
  });

  test('Удаляем несуществующий ингредиент', () => {
    const newState = reducer(
      startState,
      removeIngredient({ id: 'non-existent' })
    );
    expect(newState.constructor.ingredients).toHaveLength(2);
    expect(newState.constructor.bun?.name).toBe(BUN_NAME);
  });
});

describe('Проверка экшена изменения порядка ингредиентов', () => {
  const startState = {
    ...constructorInitialState,
    constructor: {
      bun: { ...BUN },
      ingredients: [{ ...MAIN }, { ...MAIN }, { ...SAUCE }]
    }
  };

  test('Перемещаем ингредиент вниз (индекс 0 → 1)', () => {
    const newState = reducer(startState, moveDownIngredient(0));
    const names = newState.constructor.ingredients.map((ing) => ing.name);
    expect(names).toEqual([MAIN_NAME, MAIN_NAME, SAUCE_NAME]);
  });

  test('Перемещаем ингредиент вверх (индекс 2 → 1)', () => {
    const newState = reducer(startState, moveUpIngredient(2));
    const names = newState.constructor.ingredients.map((ing) => ing.name);
    expect(names).toEqual([MAIN_NAME, SAUCE_NAME, MAIN_NAME]);
  });

  test('Булочка не изменяется при перемещении ингредиентов', () => {
    const newState = reducer(startState, moveDownIngredient(1));
    expect(newState.constructor.bun?.name).toBe(BUN_NAME);
    expect(newState.constructor.bun?.price).toBe(1000);
  });
});
