const rectangleArea = require('..');

describe('Funkcja rectangleArea', () => {
  it('powinna zwracać liczbę', async () => {
    const result = rectangleArea(1, 1);

    expect(typeof result).toBe('number');
  });

  it('powinna zwrócić poprawne pole prostokąta', async () => {
    expect(rectangleArea(2, 2)).toBe(4);
    expect(rectangleArea(-5, -10)).toBe(50);
    expect(rectangleArea(1, 0)).toBe(0);
    expect(rectangleArea(100, 100)).toBe(10000);
    expect(rectangleArea(-10, 10)).toBe(-100);
  });

  it('powinna zwrócić wartość NaN gdy parametry są nieprawidłowe', async () => {
    expect(rectangleArea('a', 'b')).toBe(NaN);
    expect(rectangleArea(1, 'b')).toBe(NaN);
    expect(rectangleArea(undefined, [])).toBe(NaN);
    expect(rectangleArea({}, {})).toBe(NaN);
  });
});
