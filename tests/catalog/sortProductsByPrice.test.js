const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test.todo("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]");
  test('все товары c "asc" сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const result = sortProductsByPrice(products, 'asc');
    expect(result).toStrictEqual(products.filter(({ id }) => [3, 6, 5, 4, 2, 1].includes(id)).sort((a, b) => a.price - b.price));
  });
  test.todo('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]');
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const result = sortProductsByPrice(products);
    expect(result).toStrictEqual(products.filter(({ id }) => [3, 6, 5, 4, 2, 1].includes(id)).sort((a, b) => a.price - b.price));
  });
  test.todo("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]");
  test('товары [1, 3, 4] c "asc" сортируются как [3, 4, 1]', () => {
    const selectedProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    const result = sortProductsByPrice(selectedProducts, 'asc');
    expect(result).toStrictEqual(selectedProducts.sort((a, b) => a.price - b.price));
  });
  test.todo("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]");
  test('все товары c "desc" сортируются как [1, 2, 4, 5, 6, 3]', () => {
    const result = sortProductsByPrice(products, 'desc');
    expect(result).toStrictEqual(products.filter(({ id }) => [1, 2, 4, 5, 6, 3].includes(id)).sort((a, b) => b.price - a.price));
  });
  test.todo("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]");
  test('товары [3, 1, 4] c "desc" сортируются как [1, 4, 3]', () => {
    const selectedProducts = products.filter(({ id }) => [3, 1, 4].includes(id));
    const result = sortProductsByPrice(selectedProducts, 'desc');
    expect(result).toStrictEqual(selectedProducts.sort((a, b) => b.price - a.price));
  });
  test.todo("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]");
  test('товары [5, 2, 6] c "desc" сортируются как [2, 5, 6]', () => {
    const selectedProducts = products.filter(({ id }) => [5, 2, 6].includes(id));
    const result = sortProductsByPrice(selectedProducts, 'desc');
    expect(result).toStrictEqual(selectedProducts.sort((a, b) => b.price - a.price));
  });
  test.todo("'asc' не меняет исходный массив [1, 3, 4]");
  test('asc не меняет исходный массив [1, 3, 4]', () => {
    const selectedProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    const result = sortProductsByPrice(selectedProducts, 'asc');
    expect(result).toStrictEqual(selectedProducts.sort((a, b) => a.price - b.price));
  });
  test.todo("'desc' не меняет исходный массив [1, 3, 4]");
  test('desc не меняет исходный массив [1, 3, 4]', () => {
    const selectedProducts = products.filter(({ id }) => [1, 3, 4].includes(id));
    const result = sortProductsByPrice(selectedProducts, 'desc');
    expect(result).toStrictEqual(selectedProducts.sort((a, b) => b.price - a.price));
  });
  test.todo('направление по умолчанию не меняет исходный массив всех товаров');
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const result = products;
    sortProductsByPrice(products);
    expect(products).toStrictEqual(result);
  });
});
