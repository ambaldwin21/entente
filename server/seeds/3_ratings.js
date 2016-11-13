exports.seed = function(knex) {
  return knex('ratings').del()
    .then(() => {
      return knex('ratings').insert([{
        user_id: '1',
        issue_id: '1',
        rating: '9'
      },
      {
        user_id: '1',
        issue_id: '2',
        rating: '9'
      },
      {
        user_id: '1',
        issue_id: '3',
        rating: '9'
      },
      {
        user_id: '3',
        issue_id: '1',
        rating: '8'
      },
      {
        user_id: '3',
        issue_id: '2',
        rating: '6'
      },
      {
        user_id: '3',
        issue_id: '3',
        rating: '4'
      },
      {
        user_id: '2',
        issue_id: '1',
        rating: '2'
      },
      {
        user_id: '2',
        issue_id: '2',
        rating: '7'
      },
      {
        user_id: '2',
        issue_id: '3',
        rating: '5'
      }]);
    });
};
