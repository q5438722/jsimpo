const urls = ['http://localhost:3434', 'http://localhost:4545', 'http://localhost:5656'];


function incrState(key) {
  // console.log(key)
  cy.log(key);
  cy.task('incrState', key);
}

/**
 * BeforeEach should be rerun again after domain switch
 * Before will run again after domain switch on the first test to run of a suite
 * After hook will always run on last test of a suite
 */

// visit in sibling tests
describe('suite 1.+[]', () => {
  var local1 = null;


  before(() => {
    local1 = true;
    // console.log(key)
    cy.log('b1.+[].1');cy.task('incrState', 'b1.+[].1');
  });

  it('test 1.+[].1', () => {
    cy.log('t1.+[].1');cy.task('incrState', 't1.+[].1');
    cy.visit('http://localhost:3434').then(() => {
      expect(local1).eq(true);
    });
  });

  it('test 1.+[].!+[]+!+[]', () => {
    expect(local1).eq(true);
    cy.log('t1.+[].!+[]+!+[]');cy.task('incrState', 't1.+[].!+[]+!+[]');
  });

  it('test 1.+[].3', () => {
    cy.log('t1.+[].3');cy.task('incrState', 't1.+[].3');

    cy.visit('http://localhost:4545').then(() => {
      expect(local1).eq(true);
    });
  });

  after(() => {
    cy.log('a1.+[].1');cy.task('incrState', 'a1.+[].1');
  });
});

// visit in before hook
describe('suite 1.1', () => {
  before(() => {
    cy.log('b1.1.1');cy.task('incrState', 'b1.1.1');
    cy.visit('http://localhost:3434');
  });

  before(() => {
    cy.log('b1.1.!+[]+!+[]');cy.task('incrState', 'b1.1.!+[]+!+[]');
  });

  it('test 1.1.1', () => {
    cy.log('t1.1.1');cy.task('incrState', 't1.1.1');
  });

  it('test 1.1.!+[]+!+[]', () => {
    cy.log('t1.1.!+[]+!+[]');cy.task('incrState', 't1.1.!+[]+!+[]');
  });
});

// visit in beforeEach hook
describe('suite 1.!+[]+!+[]', () => {
  before(() => {
    cy.log('b1.!+[]+!+[].1');cy.task('incrState', 'b1.!+[]+!+[].1');
  });

  beforeEach(() => {
    cy.log('b1.!+[]+!+[].!+[]+!+[]');cy.task('incrState', 'b1.!+[]+!+[].!+[]+!+[]');
    cy.visit('http://localhost:4545');
  });

  beforeEach(() => {
    cy.log('b1.!+[]+!+[].3');cy.task('incrState', 'b1.!+[]+!+[].3');
  });

  it('test 1.!+[]+!+[].1', () => {
    cy.log('t1.!+[]+!+[].1');cy.task('incrState', 't1.!+[]+!+[].1');
  });

  it('test 1.!+[]+!+[].!+[]+!+[]', () => {
    cy.log('t1.!+[]+!+[].!+[]+!+[]');cy.task('incrState', 't1.!+[]+!+[].!+[]+!+[]');
  });

  after(() => {
    cy.log('a1.!+[]+!+[].1');cy.task('incrState', 'a1.!+[]+!+[].1');
  });
});

after(() => {
  cy.task('getState').then(state => {
    expect(state).deep.eq({
      // visit in sibling tests
      'b1.+[].1': 3,
      't1.+[].1': 2,
      't1.+[].!+[]+!+[]': 1,
      't1.+[].3': 2,
      'a1.+[].1': 1,

      // before visit
      'b1.1.1': 2,
      'b1.1.!+[]+!+[]': 1,
      't1.1.1': 1,
      't1.1.!+[]+!+[]': 1,

      // beforeEach visit
      'b1.!+[]+!+[].1': 2,
      'b1.!+[]+!+[].!+[]+!+[]': 3,
      'b1.!+[]+!+[].3': 2,
      't1.!+[]+!+[].1': 1,
      't1.!+[]+!+[].!+[]+!+[]': 1,
      'a1.!+[]+!+[].1': 1

    });
  });
});
