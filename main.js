function Generator_Color() {
  let color = '#';
  let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let span = document.querySelector('h1 span');

function editing_var_in_css(val) {
  let r = document.querySelector(':root');
  r.style.setProperty('--G_color', val);
  span.innerHTML = val;
}
editing_var_in_css(Generator_Color());

span.addEventListener('click', () => {
  navigator.clipboard.writeText(span.textContent);
});

document.querySelector('button').addEventListener('click', () => {
  editing_var_in_css(Generator_Color());
});