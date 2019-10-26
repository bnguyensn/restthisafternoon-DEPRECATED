const tagMap = {
  javascript: '🟨',
  keyboard: '⌨️',
  life: '🌱',
  opensource: '👪',
  python: '🐍',
  react: '⚛️',
  reading: '📚',
  system: '⚙️',
  webdev: '🌐',
};

export default function tagToIcon(tagString) {
  return tagMap[tagString] || tagString;
}
