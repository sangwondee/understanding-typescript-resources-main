let userName = 'Max';

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
  difficulty: 'easy',
  minLevel: 10,
  didStart: false,
  players: ['John', 'Jane']
};

type Settings = typeof settings;

function loadData(s: typeof settings) {
  // ...

  console.log(`Difficulty: ${s.difficulty}`);
  console.log(`Min Level: ${s.minLevel}`);
  console.log(`Did Start: ${s.didStart}`);
  console.log(`Players: ${s.players.join(', ')}`);
}

loadData(settings);