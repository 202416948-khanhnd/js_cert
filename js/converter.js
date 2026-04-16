// UI components
const input = document.getElementById("markdown-input");
const output = document.getElementById("html-output");
const preview = document.getElementById("preview");

// RegExp for heading (1 - 3), bold, italic, image, anchor, quote
const hre = /^(#{1,3})\s(.*)$/gm,
  bre = /(\*\*|__)(.*?)\1/g,
  ire = /([*_])(.*?)\1/g,
  are = /!\[(.*)]\((.*)\)/g,
  lre = /\[(.*)]\((.*)\)/g,
  qre = /^>\s(.*)$/gm;

// no params
// return string
// accepts Markdown, then return conversion in text
const convertMarkdown = () => {
  const value = input.value;
  return value
    .replace(hre, (_match, hNum, text) => {
      const hLv = hNum.length;
      return `<h${hLv}>${text}</h${hLv}>`;
    })
    .replace(bre, (_match, bold, text) => `<strong>${text}</strong>`)
    .replace(ire, (_match, italic, text) => `<em>${text}</em>`)
    .replace(are, (_match, alt, src) => `<img alt="${alt}" src="${src}">`)
    .replace(lre, (_match, text, url) => `<a href="${url}">${text}</a>`)
    .replace(qre, (_match, text) => `<blockquote>${text}</blockquote>`);
};

// input event trigger
// append conversion to output's text, preview's HTML
input.addEventListener("input", () => {
  const value = convertMarkdown();
  output.innerText = value;
  preview.innerHTML = value;
});
