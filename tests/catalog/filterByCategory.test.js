const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');


describe('filterByCategory', () => {
  test.todo("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test('"all" возвращает товары с ID [1, 2, 3, 4, 5, 6]',() => {
    const resultAll = filterByCategory(products, 'all');
    expect(resultAll).toStrictEqual(products);
  })
  test.todo("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]");
   test('undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]',() => {
    const resultUndefined = filterByCategory(products, undefined);
    expect(resultUndefined).toStrictEqual(products);
  })
  test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]',() => {
    const result = filterByCategory(products, '');
    expect(result).toStrictEqual(products);
  })
  test.todo("'electronics' возвращает товары с ID [1, 2]");
    test('"electronics" возвращает товары с ID [1, 2]',() => {
    const resultElectronics = filterByCategory(products, 'electronics');
    let resultProduct = [];
    resultProduct.push(products[0]);
    resultProduct.push(products[1]);
    expect(resultElectronics).toStrictEqual(resultProduct);
  })
  test.todo("'books' возвращает товары с ID [3, 6]");
   test('"books" возвращает товары с ID [3, 6]',() => {
    const resultBooks = filterByCategory(products, 'books');
    let resultProduct = [];
    resultProduct.push(products[2]);
    resultProduct.push(products[5]);
    expect(resultBooks).toStrictEqual(resultProduct);
  })
  test.todo("'home' возвращает товары с ID [4, 5]");
  test('"home" возвращает товары с ID [4, 5]',() => {
    const resultHome = filterByCategory(products, 'home');
    let resultProduct = [];
    resultProduct.push(products[3]);
    resultProduct.push(products[4]);
    expect(resultHome).toStrictEqual(resultProduct);
  })
  test.todo("'clothes' возвращает пустой массив");
  test('"clothes" возвращает пустой массив',() => {
    const result = filterByCategory(products, 'clothes');
    expect(result).toStrictEqual([]);
  })
  test.todo("'toys' возвращает пустой массив");
    test('"toys" возвращает пустой массив',() => {
    const result = filterByCategory(products, 'toys');
    expect(result).toStrictEqual([]);
  })
  test.todo("'sports' возвращает пустой массив");
  test('"sports" возвращает пустой массив',() => {
    const result = filterByCategory(products, 'sports');
    expect(result).toStrictEqual([]);
  })
});
