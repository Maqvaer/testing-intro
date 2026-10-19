const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test.todo("'Наушники' возвращает товар с ID 1");
   test('"Наушники" возвращает товар с ID 1',() => {
    const result = searchProducts(products, 'Наушники');
    expect(result).toStrictEqual([products[0]]);
  })

  test.todo("'Чистый код' возвращает товар с ID 6");
    test('"Чистый код" возвращает товар с ID 6',() => {
    const result = searchProducts(products, 'Чистый код');
    expect(result).toStrictEqual([products[5]]);
  })
  test.todo("'Настольная лампа' возвращает товар с ID 4");
  test('"Настольная лампа" возвращает товар с ID 4',() => {
    const result = searchProducts(products, 'Настольная лампа');
    expect(result).toStrictEqual([products[3]]);
  })
  test.todo("'javascript' возвращает товар с ID 3");
  test('"javascript" возвращает товар с ID 3',() => {
    const result = searchProducts(products, 'javascript');
    expect(result).toStrictEqual([products[2]]);
  })
  test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test('"ЧЕХОЛ" возвращает товар с ID 5',() => {
    const result = searchProducts(products, 'ЧЕХОЛ');
    expect(result).toStrictEqual([products[4]]);
  })
  test.todo("'наушники' возвращает товар с ID 1");
  test('"наушники" возвращает товар с ID 1',() => {
    const result = searchProducts(products, 'наушники');
    expect(result).toStrictEqual([products[0]]);
  })
  test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test('" " возвращает товары с ID [1, 2, 3, 4, 5, 6]',() => {
    const result = searchProducts(products, ' ');
    expect(result).toStrictEqual(products);
  })
  test.todo("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test('"   " возвращает товары с ID [1, 2, 3, 4, 5, 6]',() => {
    const result = searchProducts(products, '   ');
    expect(result).toStrictEqual(products);
  })
  test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test('"\\t\\n" возвращает товары с ID [1, 2, 3, 4, 5, 6]',() => {
    const result = searchProducts(products, '\t\n');
    expect(result).toStrictEqual(products);
  })
});
