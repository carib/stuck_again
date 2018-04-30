export default class goshDOMNodes {
  constructor(nodes) {
    this.node          = (nodes.length > 1) ? null : nodes[0];
    this.nodes         = nodes;
    this.cells         = {};
    this.occupiedCells = new Set();
  }

  each(callback) {
    this.nodes.forEach(callback);
  }

  on(e, action) {
    this.each(node => {
      node.addEventListener(e, action);
      const eventStore = `event-${e.toLowerCase()}`;
      if (!node[eventStore]) node[eventStore] = [];
      node[eventStore].push(action);
    });
  }

  off(e) {
    this.each(node => {
      const eventStore = `event-${e.toLowerCase()}`;
      if (node[eventStore]) {
        node[eventStore].forEach(action => {
          node.removeEventListener(e, action)
        });
      }
      node[eventStore] = [];
    });
  }

  html(string) {
    if (!string) return this.nodes[0].innerHTML;
    this.nodes.map(el => (el.innerHTML += ` ${string}`));
  }

  empty() {
    this.nodes.map(el => (el.innerHTML = ""));
  }

  append(content) {
    if (typeof content === 'string') {
      this.html(content);
    }
    else if (content instanceof HTMLElement) {


// NOTE: NEEDS TO BE 'appendChild'(?) FOR DOMRECT???
      this.append(content.outerHTML);
    }
    else if (content instanceof goshDOMNodes) {
      Object.values(content)[0].map(el => this.append(el));
    }
  }

  attr(attribute, value) {
    const matches = [];
    Object.values(this.nodes).filter(node => {
      if (node.getAttributeNames().includes(attribute)) {
        matches.push(node);
      }
    });
    if (!value && matches.length) {
      return matches[0].getAttribute(attribute);
    }
    matches.map(match => {
      let currentAttr = match.getAttribute(attribute);
      match.setAttribute(attribute, (currentAttr += ` ${value}`));
    });
    return matches;
  }

  data(suffix, value) {
    const label = `data-${suffix}`;
    if (this.node) {
      if (value) this.node.setAttribute(label, value);
      return this.node.getAttribute(label);
    }
    if (!value) return this.attr(label);
    this.each(node => node.setAttribute(label, value));
  }

  addClass(className) {
    const classes = className.split(' ');
    classes.forEach(klass => this.attr('class', klass));
  }

  removeClass(className) {
    const remAll = (!className);
    this.each(node => {
      let classes = (remAll) ? node.getAttribute('class') : className;
      classes.split(' ').forEach(klass => node.classList.remove(klass));
    });
  }

  toggleClass(className) {
    this.each(node => node.classList.toggle(toggleClass));
  }

  children() {
    let childNodes = [];
    this.each(node => {
      childNodes = childNodes.concat(Array.from(node.children));
    });
    return g(childNodes);
  }

  parent() {
    let parentNodes = [];
    this.each(node => {
      if (!parentNodes.includes(node.parentNode)) {
        parentNodes = parentNodes.concat(node.parentNode);
      }
    });
    return g(parentNodes);
  }

  find(selector) {
    let found = [];
    this.each(node => {
      const nodeArray = Array.from(node.querySelectorAll(selector))
      found = found.concat(nodeArray);
    });
    return found;
  }

  remove() {
    this.each(node => g(node).empty());
    this.parent().empty();
  }

  pos() {
    const { x, y } = g.etXY(this);
    const { width, height } = this.node.getBoundingClientRect();
    return { x: x, y: y,
             w: width, h: height };
  }

  moveTo(x, y) {
    const node = this.node;
    g.oToXY(node, x, y)
  }

  // mapOccupiedCells() {
  //   const { node, cells, occupiedCells } = this;
  //   const { x, y, w, h } = this.pos();
  //   const x2 = x
  //   return this.pos();
  // }
  // addCells(cellCoords) {
  //   this.cells[cellCoords] = new Set();
  //   console.log(this);
  // }
}
