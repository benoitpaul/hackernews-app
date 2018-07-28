const asyncTypes = {
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
};

export const createAsyncTypes = typeString =>
  Object.values(asyncTypes).reduce((acc, curr) => {
    acc[curr] = `${typeString}_${curr}`
    return acc
  }, {});

export const createAction = (type, payload = {}) => 
    ({ type, ...payload });