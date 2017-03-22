import test from 'ava'

import './router.js'



test('foo', t => {
    t.is('foo', 'foo');
});

test('bar', t => {
    t.is('bar', 'bar');
});

test('shoud fail', t => {
    t.fail();
});

