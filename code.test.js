const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = {'foo': {'boo': 7},
    'boo': {'foo': 3, 'bar': 2},
    'bar': {'boo': 4}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'bar')) == JSON.stringify(['foo', 'boo', 'bar']));

var graph = {'foo': {'boo': 7, 'd': 4},
    'boo': {'e': 3},
    'd': {'bar': 4},
    'e': {'foo': 1},
    'bar': {'foo': 2}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'bar')) == JSON.stringify(['foo', 'd', 'bar']));

var graph = {'foo': {},
    'bar': {'foo': 1}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'bar')) == '[]');

var graph = {'foo': {},
    'bar': {'foo': 1}};
assert(JSON.stringify(augmentingPath(graph, 'foo', 'foo')) == JSON.stringify(['foo']));

var graph = {'first': {'second': 4, 'fifth': 8},
    'second': {'fourth': 3, 'first': 2},
    'third': {'fifth': 1},
    'fourth': {'third': 6, 'second': 2},
    'fifth': {'first': 12}};
assert(JSON.stringify(augmentingPath(graph, 'first', 'third')) == JSON.stringify(['first', 'second', 'fourth', 'third']));

var graph = {'first': {'second': 3, 'third':5},
    'second': {'first': 2, 'fourth': 7},
    'third': {'second': 1, 'fourth':8},
    'fourth': {'third': 6}};
assert(JSON.stringify(augmentingPath(graph, 'first', 'fourth')) == JSON.stringify(['first', 'second', 'fourth']));
