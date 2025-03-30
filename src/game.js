export default function healthRating(characters) {
  return characters.sort((a, b) => (a.health > b.health ? -1 : 1));
}
