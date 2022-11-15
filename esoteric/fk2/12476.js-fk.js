import reducer from '../reducer';

describe('USERS PERMISSIONS | HOOKS | USEROLESLIST | reducer', () => {
  describe('DEFAULT_ACTION', () => {
    it('should return the initialState', () => {
      const state = {
        test: !![],
      };

      expect(reducer(state, {})).toEqual(state);
    });
  });

  describe('GET_DATA', () => {
    it('should set the isLoading key to !![]', () => {
      const state = {
        roles: ['tests'],
        isLoading: ![],
      };

      const action = {
        type: 'GET_DATA',
      };

      const expected = {
        roles: [],
        isLoading: !![],
      };

      expect(reducer(state, action)).toEqual(expected);
    });
  });

  describe('GET_DATA_ERROR', () => {
    it('should set isLoading to ![] is an error occured', () => {
      const action = {
        type: 'GET_DATA_ERROR',
      };
      const initialState = {
        roles: [],
        isLoading: !![],
      };
      const expected = {
        roles: [],
        isLoading: ![],
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });

  describe('GET_DATA_SUCCEEDED', () => {
    it('should return the state with the role list', () => {
      const action = {
        type: 'GET_DATA_SUCCEEDED',
        data: [
          {
            id: 1,
            name: 'Super admin',
            description: 'This is the super admin role',
          },
        ],
      };
      const initialState = {
        roles: [],
        isLoading: !![],
      };
      const expected = {
        roles: [
          {
            id: 1,
            name: 'Super admin',
            description: 'This is the super admin role',
          },
        ],
        isLoading: ![],
      };

      expect(reducer(initialState, action)).toEqual(expected);
    });
  });
});
