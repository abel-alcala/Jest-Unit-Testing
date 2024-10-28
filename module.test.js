import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected = 2;
    const got = mut.div(6, 3);
    expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected = 0.5;
    const got = mut.div(5, 10);
    expect(got).toBe(expected);
});

test('containsNumbers - string with letters only', () => {
    expect(mut.containsNumbers("hello")).toBe(false);
});

test('containsNumbers - string with letters and spaces', () => {
    expect(mut.containsNumbers("hello world")).toBe(false);
});

test('containsNumbers - string with special characters only', () => {
    expect(mut.containsNumbers("!@#$%^&*()")).toBe(false);
});

test('containsNumbers - string with spaces only', () => {
    expect(mut.containsNumbers("     ")).toBe(false);
});

test('containsNumbers - string with one number', () => {
    expect(mut.containsNumbers("abc123")).toBe(true);
});

test('containsNumbers - empty string', () => {
    expect(mut.containsNumbers("")).toBe(false);
});
