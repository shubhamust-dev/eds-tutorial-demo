export default function decorate(block) {
  const [imageRow, ...rows] = block.children;
  const contentRow = rows.pop();
  const [altRow] = rows;
  const picture = imageRow?.querySelector('picture');
  const image = picture?.querySelector('img');
  const content = contentRow?.firstElementChild;
  const altText = altRow?.textContent.trim();
  if (image && altText) image.alt = altText;

  block.replaceChildren();

  if (picture) block.append(picture);

  if (content) {
    content.classList.add('hero-content');
    block.append(content);
  }
}
