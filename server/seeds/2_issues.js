exports.seed = function(knex) {
  return knex('issues').del()
    .then(() => {
      return knex('issues').insert([{
        issue: 'immigration'
      },
      {
        issue: 'climate'
      },
      {
        issue: 'marriage-equality'
      }]);
    });
};
