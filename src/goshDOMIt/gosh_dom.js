import goshDOMNodes from './gosh_dom_nodes';

const _goshDOMStats = {};
const _goshDOMLog   = {};
const _callStack    = [];
let _goshDOMKeyBindings;
let _loaded = false;

export default window.g = (arg) => {
  switch (typeof arg) {
    case 'function': (loaded) ? arg() : _callStack.push(arg);
    case 'string': return getGoshDOMNodes(arg);
    case 'object': if (arg instanceof HTMLElement) {
                      return new goshDOMNodes([arg]);
                    }
  }
};

const getGoshDOMNodes = (selector) => {
  const nodes      = document.querySelectorAll(selector);
  const nodesArray = Array.from(nodes);
  return new goshDOMNodes(nodesArray);
}

g.lom = (...objects) => Object.assign({}, ...objects);

g.rok = (entity) => (!entity.node) ? entity : entity.node;

g.ulp = (className, operation) => {
  let lastCount;
  if (!operation && !className) return _goshDOMLog;
  if (_goshDOMLog[className]) {
    lastCount = _goshDOMLog[className];
    _goshDOMLog[className] = eval(`${lastCount}${operation}1`)
  } else {
    _goshDOMLog[className] = 1;
  }
  return _goshDOMLog[className];
}

g.rab = (entityName) => {
  const elMatch = {
    class: document.getElementsByClassName(entityName),
    tag: document.getElementsByTagName(entityName),
    id: document.getElementById(entityName),
  };
  return elMatch
}

g.nr8 = (options) => {
  const defaults = { parent: 'root', tag: 'div',
                     klass: 'entity', initXY: '0,0',
                     entity: null, id: null,
                     node: null };
  options            = g.lom(defaults, options);
  let { klass, tag } = options;
  options.id         = (options.id) ? options.id : `${klass}-${g.ulp(klass, '+')}`;
  options.node       = document.createElement(tag);
  let { entity, node,
        parent, id } = options;
  node.id            = id;
  node.class         = klass;
  parent             = g.rab(parent).id
  parent.appendChild(node);
  return (entity) ? g.entity(options) : node;
}

g.entity = (options) => {
  const newEntity  = {};
  let { entity, klass,
        id, node } = options;
  entity           = new entity();
  entity.node      = node;
  entity.gD        = g(node);
  entity.id        = id;
  newEntity.node   = node;
  newEntity.gD     = entity.gD;
  newEntity.self   = entity;
  entity.init(options);
  return newEntity;
}

g.lueKeys = (keyBindings) => {
  _goshDOMKeyBindings = g.lom(_goshDOMKeyBindings, keyBindings);
}

g.etKey = (keyCode, entityId) => {
  if (!keyCode) return _goshDOMKeyBindings
  let match;
  const _nullMatch = [ '_nullKey', `No binding on key ${keyCode}` ];
  if (_goshDOMKeyBindings[entityId]) {
    match = _goshDOMKeyBindings[entityId][keyCode];
  }
  match = (!match) ? _nullMatch : match.split('.');
  return {
    id:  entityId,
    act: match[0],
    dir: match[1]
  };
}

g.oToXY = (entity, x, y) => {
  entity = g.rok(entity);
  entity.setAttribute('style', `top:${y}px;left:${x}px`);
}

g.etXY = (entity) => {
  entity = g.rok(entity);
  entity = entity.getBoundingClientRect();
  return {
    x: entity.x,
    y: entity.y
  }
}

g.etOffset = () => {
  const rect = document.body.getBoundingClientRect();
  return {
    x: rect.x + window.scrollX,
    y: rect.y + window.scrollY
  }
}

g.ridMap = (entitySelf) => {
  if (!entitySelf) return _goshDOMStats['cellGrid'];
  const { id, position, node, cellSize } = entitySelf;
  const { x, y, x2, y2, width, height, halfW, halfH } = position;
  let cells = {};
  if (/stage/.test(id)) {
    cells = entitySelf.buildCellGrid();
    cells = _goshDOMStats['cellGrid'] = g.lom(cells, _goshDOMStats);
  } else {
    let n = x2;
    let i = x2 - width;
    let first = true
    while (i < n) {
      if (i % 32 === 0 && first) {
        cells.cx = i;
        n = y2;
        i = y2 - height;
        first = false;
      };
      if (i % 32 === 0 && !first) cells.cy = i;
      i++
    }
    let { cx, cy } = cells;
    let dy1 = (y2 - Math.floor(halfH/3)) > cy;
    let dx1 = (x2 - Math.floor(halfW/3)) > cx;
    let dy2 = (y  + Math.floor(halfH/3)) < cy;
    let dx2 = (x  + Math.floor(halfW/3)) < cx;
    if (dy1 && dx1) cells.xy4  = `${cy},${cx}`;
    if (dy2 && dx1) cells.xy3  = `${cy - height},${cx}`;
    if (dy1 && dx2) cells.cxy2 = `${cy},${cx - width}`;
    if (dy2 && dx2) cells.cxy1 = `${cy - height},${cx - width}`;
    delete cells.cy
    delete cells.cx
    Object.values(cells).forEach(cell => {
      if (cell) _goshDOMStats.cellGrid[cell].add(id)
      entitySelf.occupiedCells.add(cell);
    });
  }
  return _goshDOMStats['cellGrid'];
}

g.ridOverlay = () => {
  const cells = Object.keys(_goshDOMStats['cellGrid']);
  const grid  = g.nr8({ klass: 'stage' });
  let cell;
  let x;
  let y;
  for (let i = 0; i < cells.length; i++) {
    cell = cells[i].split(',');
    x = cell[1];
    y = cell[0];
    g.nr8({ parent: 'stage-2', id: `y-${y},x-${x}` });
  }
}
