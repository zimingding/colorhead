module.exports = convert;

const directions = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
const distances = ['FEET', 'STEP', 'MILE', 'KILOMETER'];

function convert(text) {
  const result = [];
  const textUpper = text.toUpperCase();

  directions.forEach( d => {
    if (textUpper.includes(d))
      result.push({
        type: 'directions', 
        offset: textUpper.indexOf(d),
        length: d.length,
        value: text.substring(textUpper.indexOf(d), textUpper.indexOf(d) + d.length)
      });
  });

  distances.forEach(d => {
    if (textUpper.includes(d)) {
      const offset = textUpper.substring(0, textUpper.indexOf(d)-1).lastIndexOf(' ') + 1;
      const length = textUpper.indexOf(d) + d.length - offset;
      result.push({
        type: 'distances',
        offset: offset,
        length: length,
        value: text.substring(offset, offset + length),
      });
    }
  });
  return result;
}