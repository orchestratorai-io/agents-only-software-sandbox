// Turns a title into a URL slug. Known gap: accented letters are dropped
// instead of being folded to plain ASCII (see the open issue).
export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
