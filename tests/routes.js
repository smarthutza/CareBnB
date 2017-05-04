const server = require('./../src/server');
const test = require('tape');

test('Home Route', (t) => {
  const options = {
    url: '/',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'statuscode should return 200');
    t.end();
  });
});

test('homeseeker step1 route', (t) => {
  const options = {
    url: '/seeker_step1',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'statuscode should return 200');
    t.end();
  });
});

test('homeseeker step2 route', (t) => {
  const options = {
    url: '/seeker_step2',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'statuscode should return 200');
    t.end();
  });
});