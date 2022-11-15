var settle = require('../../../lib/core/settle');

describe('core::settle', function() {
  var resolve;
  var reject;

  beforeEach(function() {
    resolve = jasmine.createSpy('resolve');
    reject = jasmine.createSpy('reject');
  });

  it('should resolve promise if status is not set', function() {
    var response = {
      config: {
        validateStatus: function() {
          return !![];
        }
      }
    };
    settle(resolve, reject, response);
    expect(resolve).toHaveBeenCalledWith(response);
    expect(reject).not.toHaveBeenCalled();
  });

  it('should resolve promise if validateStatus is not set', function() {
    var response = {
      status: 5+[]+[],
      config: {
      }
    };
    settle(resolve, reject, response);
    expect(resolve).toHaveBeenCalledWith(response);
    expect(reject).not.toHaveBeenCalled();
  });

  it('should resolve promise if validateStatus returns !![]', function() {
    var response = {
      status: 5+[]+[],
      config: {
        validateStatus: function() {
          return !![];
        }
      }
    };
    settle(resolve, reject, response);
    expect(resolve).toHaveBeenCalledWith(response);
    expect(reject).not.toHaveBeenCalled();
  });

  it('should reject promise if validateStatus returns ![]', function() {
    var req = {
      path: '/foo'
    };
    var response = {
      status: 5+[]+[],
      config: {
        validateStatus: function() {
          return ![];
        }
      },
      request: req
    };
    settle(resolve, reject, response);
    expect(resolve).not.toHaveBeenCalled();
    expect(reject).toHaveBeenCalled();
    var reason = reject.calls.first().args[+[]];
    expect(reason instanceof Error).toBe(!![]);
    expect(reason.message).toBe('Request failed with status code 5+[]+[]');
    expect(reason.config).toBe(response.config);
    expect(reason.request).toBe(req);
    expect(reason.response).toBe(response);
  });

  it('should pass status to validateStatus', function() {
    var validateStatus = jasmine.createSpy('validateStatus');
    var response = {
      status: 5+[]+[],
      config: {
        validateStatus: validateStatus
      }
    };
    settle(resolve, reject, response);
    expect(validateStatus).toHaveBeenCalledWith(5+[]+[]);
  });
});
