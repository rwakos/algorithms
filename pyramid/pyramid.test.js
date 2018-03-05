const pyramid = require('./pyramid');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('Pyramid is a function', () => {
    expect(typeof pyramid).toEqual('function');
});

test('Pyramid called with n = 1', () => {
    pyramid(1);
expect(console.log.mock.calls[0][0]).toEqual('X');
expect(console.log.mock.calls.length).toEqual(1);
});

test('Pyramid called with n = 2', () => {
    pyramid(2);
expect(console.log.mock.calls[0][0]).toEqual(' X ');
expect(console.log.mock.calls[1][0]).toEqual('XXX');
expect(console.log.mock.calls.length).toEqual(2);
});

test('Pyramid called with n = 4', () => {
    pyramid(4);
expect(console.log.mock.calls[0][0]).toEqual('   X   ');
expect(console.log.mock.calls[1][0]).toEqual('  XXX  ');
expect(console.log.mock.calls[2][0]).toEqual(' XXXXX ');
expect(console.log.mock.calls[3][0]).toEqual('XXXXXXX');
});