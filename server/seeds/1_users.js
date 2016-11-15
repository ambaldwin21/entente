exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        name: 'annabaldwin',
        username: 'annab',
        email: 'anna@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '68845'
      },
      {
        name: 'amybriggs',
        username: 'amyb',
        email: 'amy@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60637'
      },
      {
        name: 'alihobbs',
        username: 'alih',
        email: 'ali@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80304'
      },
      {
        name: 'Leesah Mah',
        username: 'Leesah-1',
        email: 'leesah@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80304'
      },
      {
        name: 'Todd Brown',
        username: 'Todd-1',
        email: 'todd@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60076'
      },
      {
        name: 'Dave Caldwell',
        username: 'Dave-1',
        email: 'dave@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80228'
      },
      {
        name: 'Racine',
        username: 'Racine-1',
        email: 'racine@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60139'
      },
      {
        name: 'Scotty Kummer',
        username: 'Kummer-1',
        email: 'kummer@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60653'
      },
      {
        name: 'Andrea',
        username: 'Andrea-1',
        email: 'andrea@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80027'
      },
      {
        name: 'Philipp Blume',
        username: 'Philipp-1',
        email: 'philipp@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '61820'
      },
      {
        name: 'User-1',
        username: 'User-1-1',
        email: 'user1@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '50112'
      },
      {
        name: 'User-2',
        username: 'User-2-1',
        email: 'user2@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80526'
      },
      {
        name: 'User-3',
        username: 'User-3-1',
        email: 'user3@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '34110'
      },
      {
        name: 'Greg',
        username: 'Greg-1',
        email: 'greg@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80027'
      },
      {
        name: 'User-4',
        username: 'User-4-1',
        email: 'user4@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80302'
      },
      {
        name: 'Sumudu',
        username: 'Sumudu-1',
        email: 'sumudu@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: 'Ouagadougou'
      },
      {
        name: 'Sunny',
        username: 'Sunny-1',
        email: 'sunny@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '77450'
      },
      {
        name: 'Heather',
        username: 'Heather-1',
        email: 'heather@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '14620'
      },
      {
        name: 'Susan Emerson',
        username: 'Susan-1',
        email: 'susan@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '20815'
      },
      {
        name: 'Kyle',
        username: 'Kyle-1',
        email: 'kyle@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '03054'
      },
      {
        name: 'Chuck Ruddy',
        username: 'Chuck-1',
        email: 'chuck@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '33076'
      },
      {
        name: 'User-5',
        username: 'User-5-1',
        email: 'user5@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '32303'
      },
      {
        name: 'Craig Briggs',
        username: 'Craig-1',
        email: 'craig@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '28374'
      },
      {
        name: 'Diana Hubbard',
        username: 'Diana-1',
        email: 'diana@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '48103'
      },
      {
        name: 'User-6',
        username: 'User-6-1',
        email: 'user6@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '61821'
      },
      {
        name: 'User-7',
        username: 'User-7-1',
        email: 'user7@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '34110'
      },
      {
        name: 'Ethan',
        username: 'Ethan-1',
        email: 'ethan@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60302'
      },
      {
        name: 'Virginia Pinard',
        username: 'Ginny-1',
        email: 'ginny@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '03303'
      },
      {
        name: 'User-8',
        username: 'User-8-1',
        email: 'user8@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '06511'
      },
      {
        name: 'User-9',
        username: 'User-9-1',
        email: 'user9@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '11940'
      },
      {
        name: 'User-10',
        username: 'User-10-1',
        email: 'user10@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60614'
      },
      {
        name: 'User-11',
        username: 'User-11-1',
        email: 'user11@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60637'
      },
      {
        name: 'User-12',
        username: 'User-12-1',
        email: 'user12@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '19096'
      },
      {
        name: 'Betty Lee',
        username: 'Betty-1',
        email: 'betty@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60630'
      },
      {
        name: 'Sarah',
        username: 'Sarah-1',
        email: 'sarah@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '46637'
      },
      {
        name: 'Katja Fox',
        username: 'Katja-1',
        email: 'katja@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '03894'
      },
      {
        name: 'User-13',
        username: 'User-13-1',
        email: 'user13@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60615'
      },
      {
        name: 'User-14',
        username: 'User-14-1',
        email: 'user14@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '03894'
      },
      {
        name: 'User-15',
        username: 'User-15-1',
        email: 'user15@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60515'
      },
      {
        name: 'User-16',
        username: 'User-16-1',
        email: 'user16@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60025'
      },
      {
        name: 'User-17',
        username: 'User-17-1',
        email: 'user17@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '61820'
      },
      {
        name: 'User-18',
        username: 'User-18-1',
        email: 'user18@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60614'
      },
      {
        name: 'Jennifer Latham',
        username: 'Jenny-1',
        email: 'jenny@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '50112'
      },
      {
        name: 'Melissa',
        username: 'Melissa-1',
        email: 'Melissa@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80455'
      },
      {
        name: 'Aimee Holtsclaw',
        username: 'Aimee-1',
        email: 'aimee@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '27610'
      },
      {
        name: 'Kathleen Supove',
        username: 'Kathy-1',
        email: 'kathy@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '11231'
      },
      {
        name: 'Susan Doyle-Lindrud',
        username: 'Susan-2',
        email: 'susan1@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '07920'
      },
      {
        name: 'User-19',
        username: 'User-19-1',
        email: 'user19@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: 'Germany 66849'
      },
      {
        name: 'Lauren',
        username: 'Lauren-1',
        email: 'lauren@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80205'
      },
      {
        name: 'User-20',
        username: 'User-20',
        email: 'user20.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80504'
      },
      {
        name: 'User-21',
        username: 'User-21',
        email: 'user21@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '56253'
      },
      {
        name: 'Tracey',
        username: 'Tracey-1',
        email: 'tracey@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '60607'
      },
      {
        name: 'User-22',
        username: 'User-22-1',
        email: 'user22@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80304'
      },
      {
        name: 'Allison',
        username: 'Allison-1',
        email: 'allison@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: 'Denver, CO'
      },
      {
        name: 'Ryan Borowski',
        username: 'Ryan-1',
        email: 'ryan@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80004'
      },
      {
        name: 'User-23',
        username: 'User-23-1',
        email: 'user23@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '68847'
      },
      {
        name: 'Michelle Miller',
        username: 'michelle-1',
        email: 'michelle@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80501'
      },
      {
        name: 'Sam',
        username: 'sam-1',
        email: 'sam@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80304'
      },
      {
        name: 'User-24',
        username: 'user-24-1',
        email: 'user24@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '68845'
      },
      {
        name: 'Lauren',
        username: 'Lauren-2',
        email: 'lauren2@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80304'
      },
      {
        name: 'Brennan',
        username: 'Brennan-1',
        email: 'brennan@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80521'
      },
      {
        name: 'Mattie',
        username: 'Mattie-1',
        email: 'mattie@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80304'
      },
      {
        name: 'User-25',
        username: 'User-25-1',
        email: 'user25@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80304'
      },
      {
        name: 'Ben',
        username: 'Ben-1',
        email: 'ben@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '95819'
      },
      {
        name: 'Kristin',
        username: 'Kristin-1',
        email: 'kristin@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80304'
      },
      {
        name: 'Jo Baldwin',
        username: 'Jo-1',
        email: 'jo@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '68845'
      },
      {
        name: 'Amy',
        username: 'Amy-2',
        email: 'amy2@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80305'
      },
      {
        name: 'Matthew',
        username: 'Matthew-1',
        email: 'matthew1@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80302'
      },
      {
        name: 'Mike',
        username: 'Mike-1',
        email: 'mike1@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '68845'
      },
      {
        name: 'User-26',
        username: 'User-26-1',
        email: 'user26@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80031'
      },
      {
        name: 'Billy Bob',
        username: 'Billy-1',
        email: 'billy1@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80027'
      },
      {
        name: 'Elana Kopelevich',
        username: 'Elana-1',
        email: 'elana@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: 'Denver CO'
      },
      {
        name: 'Ernie',
        username: 'Ernie-1',
        email: 'ernie@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80031'
      },
      {
        name: 'User-27',
        username: 'User-27-1',
        email: 'user27@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80304'
      },
      {
        name: 'Gordon Graham',
        username: 'Gordon-1',
        email: 'gordon@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80302'
      },
      {
        name: 'Lindsay',
        username: 'Lindsay-1',
        email: 'lindsay@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80305'
      },
      {
        name: 'Michaela Cantral',
        username: 'Michaela-1',
        email: 'michaela@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '68002'
      },
      {
        name: 'Cole Reschke',
        username: 'Cole-1',
        email: 'cole@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '11217'
      },
      {
        name: 'User-28',
        username: 'User-28-1',
        email: 'user28@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80602'
      },
      {
        name: 'User-29',
        username: 'User-29-1',
        email: 'user29@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '68847'
      },
      {
        name: 'Benjamin Fox',
        username: 'Benjamin-1',
        email: 'benjamin@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '80304'
      },
      {
        name: 'User-30',
        username: 'User-30-1',
        email: 'user30@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '82210'
      },
      {
        name: 'Marci Dosovitz',
        username: 'Marci-1',
        email: 'marci@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        location: '08221'

    }])

});

}
