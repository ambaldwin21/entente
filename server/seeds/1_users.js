exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        name: 'annabaldwin',
        username: 'annab',
        email: 'anna@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        location: '68845'
      },
      {
        name: 'amybriggs',
        username: 'amyb',
        email: 'amy@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        location: '60637'
      },
      {
        name: 'alihobbs',
        username: 'alih',
        email: 'ali@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        location: '80304'
      }]);
    });
};
