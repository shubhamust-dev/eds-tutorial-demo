export default function decorate(block) {
  const [imageRow, contentRow] = block.children;

  imageRow?.classList.add('teaser-image');
  contentRow?.classList.add('teaser-content');
}
