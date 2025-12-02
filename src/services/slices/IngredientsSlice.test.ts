import reducer, {
  ingredientsInitialState,
  getIngredientsThunk
} from './IngredientsSlice';

const PREV_ERROR_MSG = 'Предыдущая ошибка';

const INGREDIENTS_PENDING = getIngredientsThunk.pending.type;
const INGREDIENTS_FULFILLED = getIngredientsThunk.fulfilled.type;
const INGREDIENTS_REJECTED = getIngredientsThunk.rejected.type;

const mockSauce = () => ({
  id: '3',
  _id: '3',
  name: 'Соус голубенький',
  type: 'sauce',
  proteins: 35,
  fat: 36,
  carbohydrates: 37,
  calories: 300,
  price: 3000,
  image: 'https://code.s3.yandex.net/react/code/sauce-04.png  ',
  image_mobile: 'https://code.s3.yandex.net/react/code/sauce-04-mobile.png  ',
  image_large: 'https://code.s3.yandex.net/react/code/sauce-04-large.png  '
});

const mockMain = () => ({
  id: '2',
  _id: '2',
  name: 'Синяя котлета',
  type: 'main',
  proteins: 25,
  fat: 26,
  carbohydrates: 27,
  calories: 200,
  price: 2000,
  image: 'https://code.s3.yandex.net/react/code/meat-03.png  ',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png  ',
  image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png  '
});

describe('Вызов экшена Request', () => {
  test('isLoad имеет значение true, а старые ошибки сбрасываются', () => {
    const startState = {
      ...ingredientsInitialState,
      ingredientsError: PREV_ERROR_MSG
    };
    const action = { type: INGREDIENTS_PENDING };
    const newState = reducer(startState, action);

    expect(newState.isLoad).toBe(true);
    expect(newState.ingredientsError).toBe(null);
  });
});

describe('Вызов экшена Success', () => {
  const action = {
    type: INGREDIENTS_FULFILLED,
    payload: [mockSauce(), mockMain()]
  };

  test('isLoad имеет значение false', () => {
    const loadingState = {
      ...ingredientsInitialState,
      isLoad: true
    };
    const newState = reducer(loadingState, action);

    expect(newState.isLoad).toBe(false);
  });

  test('ingredients должны записываться в стор', () => {
    const newState = reducer(ingredientsInitialState, action);

    expect(newState.ingredients).toEqual([mockSauce(), mockMain()]);
    expect(newState.ingredients).toHaveLength(2);
    expect(newState.ingredients[0].name).toBe('Соус голубенький');
    expect(newState.ingredients[1].name).toBe('Синяя котлета');
  });

  test('Ошибки сбрасываются', () => {
    const errorState = {
      ...ingredientsInitialState,
      ingredientsError: PREV_ERROR_MSG,
      isLoad: true
    };
    const newState = reducer(errorState, action);

    expect(newState.ingredientsError).toBe(null);
  });

  test('Замена существующих ингредиентов', () => {
    const startState = {
      ...ingredientsInitialState,
      ingredients: [
        {
          ...mockMain(),
          id: '0',
          _id: 'old',
          name: 'Старый ингредиент',
          price: 50
        }
      ],
      isLoad: true
    };
    const newState = reducer(startState, action);

    expect(newState.ingredients).toEqual([mockSauce(), mockMain()]);
    expect(newState.ingredients).toHaveLength(2);
    expect(
      newState.ingredients.find((ing) => ing._id === 'old')
    ).toBeUndefined();
  });
});

describe('Вызов экшена Failed', () => {
  const startState = {
    ...ingredientsInitialState,
    isLoad: true
  };
  const action = {
    type: INGREDIENTS_REJECTED,
    error: { message: 'Ошибка загрузки' }
  };

  test('isLoad имеет значение false', () => {
    const newState = reducer(startState, action);

    expect(newState.isLoad).toBe(false);
  });

  test('Запись ошибки в стор', () => {
    const errorMessage = 'Network error: Failed to fetch';
    const errorAction = {
      ...action,
      error: { message: errorMessage }
    };
    const newState = reducer(ingredientsInitialState, errorAction);

    expect(newState.ingredientsError).toBe(errorMessage);
  });

  test('существующие ingredients не должны изменяться', () => {
    const stateIngredients = {
      ...startState,
      ingredients: [mockMain()]
    };

    const newState = reducer(stateIngredients, action);

    expect(newState.ingredients).toEqual(stateIngredients.ingredients);
    expect(newState.ingredients).toHaveLength(1);
  });
});
