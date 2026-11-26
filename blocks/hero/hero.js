export default function decorate(block) {
  const rows = [...block.children];
  const [imageRow] = rows;
  const contentRow = rows[rows.length - 1];
  const altRow = rows.length > 2 ? rows[1] : undefined;
  const picture = imageRow?.querySelector('picture');
  const image = picture?.querySelector('img');
  const content = contentRow?.firstElementChild;
  const altText = altRow?.textContent.trim();
console.log(contentRow, content, altText);
  if (image && altText) image.alt = altText;

  block.replaceChildren();

  if (picture) block.append(picture);

  if (content) {
    content.classList.add('hero-content');
    block.append(content);
  }
}
