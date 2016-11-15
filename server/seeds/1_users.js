exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        name: 'annabaldwin',
        username: 'annab',
        email: 'anna@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 47.6062,
        Long: -122.3321
      },
      {
        name: 'amybriggs',
        username: 'amyb',
        email: 'amy@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.0455,
        Long: -105.2839
      },
      {
        name: 'alihobbs',
        username: 'alih',
        email: 'ali@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.0455,
        Long: -105.2839
      },
      {
        name: 'Leesah Mah',
        username: 'Leesah-1',
        email: 'leesah@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.014984,
        Long: -105.270546
      },
      {
        name: 'Todd Brown',
        username: 'Todd-1',
        email: 'todd@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.881832,
        Long: -87.623177
      },
      {
        name: 'Dave Caldwell',
        username: 'Dave-1',
        email: 'dave@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.71085,
        Long: -105.08
      },
      {
        name: 'Racine',
        username: 'Racine-1',
        email: 'racine@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.9194707,
        Long: -88.078353
      },
      {
        name: 'Scotty Kummer',
        username: 'Kummer-1',
        email: 'kummer@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.881832,
        Long: -87.623177
      },
      {
        name: 'Andrea',
        username: 'Andrea-1',
        email: 'andrea@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.9777778,
        Long: -105.131389
      },
      {
        name: 'Philipp Blume',
        username: 'Philipp-1',
        email: 'philipp@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.116421,
        Long: -88.243385
      },
      {
        name: 'User-1',
        username: 'User-1-1',
        email: 'user1@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.7430494,
        Long: -92.722412
      },
      {
        name: 'User-2',
        username: 'User-2-1',
        email: 'user2@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.585258,
        Long: -105.084419
      },
      {
        name: 'User-3',
        username: 'User-3-1',
        email: 'user3@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 26.142,
        Long: -81.7948
      },
      {
        name: 'Greg',
        username: 'Greg-1',
        email: 'greg@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.9434,
        Long: -105.1844
      },
      {
        name: 'User-4',
        username: 'User-4-1',
        email: 'user4@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.014984,
        Long: -105.270546
      },
      {
        name: 'Sumudu',
        username: 'Sumudu-1',
        email: 'sumudu@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 12.3714,
        Long: -1.5197
      },
      {
        name: 'Sunny',
        username: 'Sunny-1',
        email: 'sunny@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 29.7457,
        Long: -95.7405
      },
      {
        name: 'Heather',
        username: 'Heather-1',
        email: 'heather@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 43.161,
        Long: -77.6109
      },
      {
        name: 'Susan Emerson',
        username: 'Susan-1',
        email: 'susan@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 38.9693,
        Long: -77.0789
      },
      {
        name: 'Kyle',
        username: 'Kyle-1',
        email: 'kyle@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 42.8679,
        Long: -71.4948
      },
      {
        name: 'Chuck Ruddy',
        username: 'Chuck-1',
        email: 'chuck@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 26.3108,
        Long: -80.2532
      },
      {
        name: 'User-5',
        username: 'User-5-1',
        email: 'user5@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 30.4383,
        Long: -84.2807
      },
      {
        name: 'Craig Briggs',
        username: 'Craig-1',
        email: 'craig@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 35.1954,
        Long: -79.4695
      },
      {
        name: 'Diana Hubbard',
        username: 'Diana-1',
        email: 'diana@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 42.2808,
        Long: -83.743
      },
      {
        name: 'User-7',
        username: 'User-7-1',
        email: 'user7@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 26.142,
        Long: -81.7948
      },
      {
        name: 'Ethan',
        username: 'Ethan-1',
        email: 'ethan@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.885,
        Long: -87.7845
      },
      {
        name: 'Virginia Pinard',
        username: 'Ginny-1',
        email: 'ginny@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 43.2081,
        Long: -71.5376
      },
      {
        name: 'User-8',
        username: 'User-8-1',
        email: 'user8@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.3083,
        Long: -72.9279
      },
      {
        name: 'User-9',
        username: 'User-9-1',
        email: 'user9@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 42.5348,
        Long: -71.0438
      },
      {
        name: 'User-10',
        username: 'User-10-1',
        email: 'user10@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.9203,
        Long: -87.6433
      },
      {
        name: 'User-11',
        username: 'User-11-1',
        email: 'user11@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.8781,
        Long: -87.6298
      },
      {
        name: 'User-12',
        username: 'User-12-1',
        email: 'user12@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.9996,
        Long: -75.273
      },
      {
        name: 'Betty Lee',
        username: 'Betty-1',
        email: 'betty@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.8781,
        Long: -87.6298
      },
      {
        name: 'Sarah',
        username: 'Sarah-1',
        email: 'sarah@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.7294,
        Long: -86.2463
      },
      {
        name: 'Katja Fox',
        username: 'Katja-1',
        email: 'katja@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 43.5852,
        Long: -71.2095
      },
      {
        name: 'User-13',
        username: 'User-13-1',
        email: 'user13@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.8004,
        Long: -87.6038
      },
      {
        name: 'User-14',
        username: 'User-14-1',
        email: 'user14@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 43.5914,
        Long: -71.1611
      },
      {
        name: 'User-15',
        username: 'User-15-1',
        email: 'user15@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.8133,
        Long: -88.0216
      },
      {
        name: 'User-16',
        username: 'User-16-1',
        email: 'user16@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 42.0724,
        Long: -87.8206
      },
      {
        name: 'User-17',
        username: 'User-17-1',
        email: 'user17@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.1164,
        Long: -88.2434
      },
      {
        name: 'User-18',
        username: 'User-18-1',
        email: 'user18@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.9203,
        Long: -87.6433
      },
      {
        name: 'Jennifer Latham',
        username: 'Jenny-1',
        email: 'jenny@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.7679,
        Long: -92.7382
      },
      {
        name: 'Melissa',
        username: 'Melissa-1',
        email: 'Melissa@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.0955,
        Long: -105.3951
      },
      {
        name: 'Aimee Holtsclaw',
        username: 'Aimee-1',
        email: 'aimee@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 35.7796,
        Long: -78.6382
      },
      {
        name: 'Kathleen Supove',
        username: 'Kathy-1',
        email: 'kathy@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.6773,
        Long: -74.0094
      },
      {
        name: 'Susan Doyle-Lindrud',
        username: 'Susan-2',
        email: 'susan1@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.6868,
        Long: -74.558
      },
      {
        name: 'User-19',
        username: 'User-19-1',
        email: 'user19@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 49.3982,
        Long: -7.5603
      },
      {
        name: 'Lauren',
        username: 'Lauren-1',
        email: 'lauren@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.7558,
        Long: -104.9681
      },
      {
        name: 'User-20',
        username: 'User-20',
        email: 'user20.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.1573,
        Long: -105.009
      },
      {
        name: 'User-21',
        username: 'User-21',
        email: 'user21@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 44.9519,
        Long: -94.8823
      },
      {
        name: 'Tracey',
        username: 'Tracey-1',
        email: 'tracey@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.8734,
        Long: -87.6507
      },
      {
        name: 'User-22',
        username: 'User-22-1',
        email: 'user22@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.0455,
        Long: -105.2839
      },
      {
        name: 'Allison',
        username: 'Allison-1',
        email: 'allison@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.1911,
        Long: -106.8175
      },
      {
        name: 'Ryan Borowski',
        username: 'Ryan-1',
        email: 'ryan@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.8163,
        Long: -105.12
      },
      {
        name: 'User-23',
        username: 'User-23-1',
        email: 'user23@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.7458,
        Long: -99.035
      },
      {
        name: 'Michelle Miller',
        username: 'michelle-1',
        email: 'michelle@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.1643,
        Long: -105.164
      },
      {
        name: 'Sam',
        username: 'sam-1',
        email: 'sam@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.014984,
        Long: -105.270546
      },
      {
        name: 'User-24',
        username: 'user-24-1',
        email: 'user24@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.7353,
        Long: -99.1678
      },
      {
        name: 'Lauren',
        username: 'Lauren-2',
        email: 'lauren2@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.014984,
        Long: -105.270546
      },
      {
        name: 'Brennan',
        username: 'Brennan-1',
        email: 'brennan@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.585258,
        Long: -105.084419
      },
      {
        name: 'Mattie',
        username: 'Mattie-1',
        email: 'mattie@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 43.0519,
        Long: -89.0757
      },
      {
        name: 'User-25',
        username: 'User-25-1',
        email: 'user25@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.8781,
        Long: -87.6298
      },
      {
        name: 'Ben',
        username: 'Ben-1',
        email: 'ben@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 438.5816,
        Long: -121.4944
      },
      {
        name: 'Kristin',
        username: 'Kristin-1',
        email: 'kristin@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.014984,
        Long: -105.270546
      },
      {
        name: 'Jo Baldwin',
        username: 'Jo-1',
        email: 'jo@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.7353,
        Long: -99.1678
      },
      {
        name: 'Amy',
        username: 'Amy-2',
        email: 'amy2@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.014984,
        Long: -105.270546
      },
      {
        name: 'Matthew',
        username: 'Matthew-1',
        email: 'matthew1@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.8781,
        Long: -87.6298
      },
      {
        name: 'Mike',
        username: 'Mike-1',
        email: 'mike1@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.7353,
        Long: -99.1678
      },
      {
        name: 'User-26',
        username: 'User-26-1',
        email: 'user26@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.8367,
        Long: -105.0372
      },
      {
        name: 'Billy Bob',
        username: 'Billy-1',
        email: 'billy1@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.9434,
        Long: -105.1844
      },
      {
        name: 'Elana Kopelevich',
        username: 'Elana-1',
        email: 'elana@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.7392,
        Long: -104.9903
      },
      {
        name: 'Ernie',
        username: 'Ernie-1',
        email: 'ernie@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.8367,
        Long: -105.0372
      },
      {
        name: 'User-27',
        username: 'User-27-1',
        email: 'user27@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.8781,
        Long: -87.6298
      },
      {
        name: 'Gordon Graham',
        username: 'Gordon-1',
        email: 'gordon@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.014984,
        Long: -105.270546
      },
      {
        name: 'Lindsay',
        username: 'Lindsay-1',
        email: 'lindsay@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.014984,
        Long: -105.270546
      },
      {
        name: 'Michaela Cantral',
        username: 'Michaela-1',
        email: 'michaela@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 41.4863,
        Long: -96.3439
      },
      {
        name: 'Cole Reschke',
        username: 'Cole-1',
        email: 'cole@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.6782,
        Long: -73.9442
      },
      {
        name: 'User-28',
        username: 'User-28-1',
        email: 'user28@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.969,
        Long: -104.9155
      },
      {
        name: 'User-29',
        username: 'User-29-1',
        email: 'user29@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.6993,
        Long: -99.0817
      },
      {
        name: 'Benjamin Fox',
        username: 'Benjamin-1',
        email: 'benjamin@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 40.014984,
        Long: -105.270546
      },
      {
        name: 'User-30',
        username: 'User-30-1',
        email: 'user30@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.3398,
        Long: -74.5752
      },
      {
        name: 'Marci Dosovitz',
        username: 'Marci-1',
        email: 'marci@gmail.com',
        hash: '$2a$08$c/GOc6lQtUx7kV6GvyfAf.SMnu3.MMwzZBdvQ8JqHtCB1VPunjVzu',
        Lat: 39.3398,
        Long: -74.5752
    }])

});

}
