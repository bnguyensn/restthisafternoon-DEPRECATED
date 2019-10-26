export function capitalizeSentence(s) {
  return s
    .split(' ')
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(' ');
}
