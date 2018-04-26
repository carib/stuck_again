// HELPERS
class goshDOM {
  en(tagName, attrOptions) {
    let defaults = {
      id: '',
      parent: '',
    };
    const options = Object.assign({}, defaults, attrOptions);
    const newElement = document.createElement(tagName);
    newElement.id = options['id'];
    g.rab(options.parent)['id'].appendChild(newElement);
    return newElement;
  }
  rab(element) {
    const elMatch = {
      class: document.getElementsByClassName(element),
      tag: document.getElementsByTagName(element),
      id: document.getElementById(element),
    };
    return elMatch
  }

}
var g = new goshDOM()

// var root = document.getElementById('root');
var root = g.rab('root')['id'];

function stageInit() {
  const stageOptions = {
    id: 'stage',
    parent: 'root'
  };
  const stage = g.en('div', stageOptions);
}

stageInit();
