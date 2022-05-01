import formatTelephoneNumber from '../formatTelephoneNumber';

// ??? Не пойму, почему линтер ругается на test и expect. Что не так?

test.each([
  ['8 (000) 000 00 00', '+70000000000'],
  ['+7 (000) 000 00 00', '+70000000000'],
  ['+86 (000) 000 00 00', '+860000000000'],
  ['8 000 000-00-00', '+70000000000'],
  ['+7 000 000 0000', '+70000000000'],
  ['+86 000 000 00 00', '+860000000000'],
])('should format recieved telephone number to standart one', (number, expected) => {
  const result = formatTelephoneNumber(number);
  expect(result).toBe(expected);
});

test.each([
  ['8 (000)0000000', 'Этот номер не распознан'],
  ['+7(000)00000 00', 'Этот номер не распознан'],
  ['+86-(000)-000-00-00', 'Этот номер не распознан'],
  ['8 000-000-00-00', 'Этот номер не распознан'],
  ['+70000000000', 'Этот номер не распознан'],
  ['+86 000 000-00-000', 'Этот номер не распознан'],
])('should throw error about invalid number', (number, expected) => {
  /* function checkErrorNumber() {
    formatTelephoneNumber(number);
  }
  expect(checkErrorNumber).toThrowError(new Error(expected)); */
  // Оборачиваю formatTelephoneNumber() в функцию, чтобы поймать ошибку
  expect(() => formatTelephoneNumber(number)).toThrowError(new Error(expected));
});
