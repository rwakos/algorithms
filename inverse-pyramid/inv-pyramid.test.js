const inv_pyramid = require('./inv-pyramid');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('Inverse Pyramid is a function', () => {
    expect(typeof inv_pyramid).toEqual('function');
});

test('Inverse Pyramid called with n = 1', () => {
    inv_pyramid(1);
expect(console.log.mock.calls[0][0]).toEqual('#');
expect(console.log.mock.calls.length).toEqual(1);
});

test('Inverse Pyramid called with n = 2', () => {
    inv_pyramid(2);
expect(console.log.mock.calls[0][0]).toEqual(' #');
expect(console.log.mock.calls[1][0]).toEqual('##');
expect(console.log.mock.calls.length).toEqual(2);
});

test('Inverse Pyramid called with n = 9', () => {
    inv_pyramid(9);
expect(console.log.mock.calls[0][0]).toEqual('        #');
expect(console.log.mock.calls[1][0]).toEqual('       ##');
expect(console.log.mock.calls[2][0]).toEqual('      ###');
expect(console.log.mock.calls[3][0]).toEqual('     ####');
expect(console.log.mock.calls[4][0]).toEqual('    #####');
expect(console.log.mock.calls[5][0]).toEqual('   ######');
expect(console.log.mock.calls[6][0]).toEqual('  #######');
expect(console.log.mock.calls[7][0]).toEqual(' ########');
expect(console.log.mock.calls[8][0]).toEqual('#########');
expect(console.log.mock.calls.length).toEqual(9);
});