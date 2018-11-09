let __value = 42;
const isomorthicFetch = jest.fn(() => __value);
isomorthicFetch.__setValue = v => __value = v;
export default isomorthicFetch;