Game.BASE_PLAYER_ATTRIBUTES = {
  maxHp: 10,
  maxHpGrowth: 5,
  maxSp: 10,
  maxSpGrowth: 2
};
Game.EntityGenerator = new Game.Generator('entities', Game.Entity);
Game.ENTITIES = ["moss", "newt", "angry squirrel", "goblin", "attack slug"]
Game.EntityGenerator.learn({
  name: 'avatar',
  chr: '@',
  fg: '#dda',
  sightRadius: 5,
  maxHp: Game.BASE_PLAYER_ATTRIBUTES.maxHp,
  maxSp: Game.BASE_PLAYER_ATTRIBUTES.maxSp,
  mixins: ["Equipped", "Inventory", "MeleeDefender", "MapMemory", "Sight", "WalkerCorporeal", "HitPoints", "Chronicle", "MeleeAttacker", "StaminaPoints", "PlayerMessager", "PlayerExperience", "PlayerSkills", "PlayerActor"]
});

Game.EntityGenerator.learn({
  name: 'moss',
  chr: '%',
  fg: '#6b6',
  exp: 1,
  maxHp: 1,
  mixins: ["Inventory", "Equipped", "EnemySkills", "HitPoints"]
});

Game.EntityGenerator.learn({
  name: 'newt',
  chr: '~',
  fg: '#f98',
  exp: 2,
  maxHp: 2,
  strength: 1,
  mixins: ["Inventory", "Equipped", "EnemySkills", "HitPoints", "WanderActor", "WalkerCorporeal"]
});

Game.EntityGenerator.learn({
  name: 'angry squirrel',
  chr: String.fromCharCode(163),
  fg: '#aaa',
  exp: 3,
  maxHp: 3,
  attackPower: 2,
  strength: 2,
  mixins: ["Inventory", "Equipped", "EnemySkills", "HitPoints", "WanderActor", "WalkerCorporeal", "MeleeAttacker", "MeleeDefender"]
});


Game.EntityGenerator.learn({
  name: 'goblin',
  chr: 'G',
  fg: '#f22',
  exp: 10,
  maxHp: 5,
  wanderChaserActionDuration: 1200,
  attackActionDuration: 3000,
  strength: 2,
  sightRadius: 3,
  mixins: ["Inventory", "Equipped", "EnemySkills", "HitPoints", "Sight", "WanderChaserActor", "WalkerCorporeal", "MeleeAttacker", "MeleeDefender"]
});

Game.EntityGenerator.learn({
  name: 'attack slug',
  chr:'~',
  fg:'#ff9',
  exp: 5,
  maxHp: 4,
  sightRadius: 4,
  attackPower: 1,
  strength: 1,
  wanderChaserActionDuration: 1200,
  attackActionDuration: 3000,
  mixins: ["Inventory", "Equipped", "EnemySkills", "HitPoints", "Sight", "WanderChaserActor", "WalkerCorporeal", "MeleeAttacker", "MeleeDefender"]
});

Game.EntityGenerator.learn({
  name: 'boss',
  chr:'♆',
  fg:'#f55',
  exp: 100,
  maxHp: 10,
  sightRadius: 5,
  attackPower: 5,
  strength: 5,
  wanderChaserActionDuration: 1200,
  attackActionDuration: 3000,
  mixins: ["Inventory", "Equipped", "EnemySkills", "HitPoints", "Sight", "WanderChaserActor", "WalkerCorporeal", "MeleeAttacker", "MeleeDefender"]
});
