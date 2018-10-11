export default function (element, bindings) {
  if (!bindings.args === 'position') return;
  Object.keys(bindings.modifiers).forEach((key) => {
    element.style[key] = '5px';
  });
  element.style.position = 'absolute';
}
