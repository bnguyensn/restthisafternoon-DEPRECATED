const tagMap = {
  system: '⚙️',
  react: '⚛️',
  reading: '📚',
};

export default function tagToIcon(tagString) {
  return tagMap[tagString] || tagString;
}
