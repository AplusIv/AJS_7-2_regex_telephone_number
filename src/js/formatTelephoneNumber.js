export default function formatTelephoneNumber(number) {
  // console.log(number.match(/^(\+?\d{1,2}) \(?(\d{3})\)? (\d{3})[ -](\d{2})[ -](\d{2})$/));
  if (number.match(/^(\+?\d{1,2}) \(?(\d{3})\)? (\d{3})[ -](\d{2})[ -]?(\d{2})$/)) {
    return number.replace(/^(\+?\d{1,2}) \(?(\d{3})\)? (\d{3})[ -](\d{2})[ -]?(\d{2})$/, ($1, $2, $3, $4, $5, $6) => ((`${$2}`.length === 1) ? `+7${$3}${$4}${$5}${$6}` : `${$2}${$3}${$4}${$5}${$6}`));
  }
  throw new Error('Этот номер не распознан');
}
