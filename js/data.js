var troopInfo = {
	barbarian: {
		name: "Barbarian",
		housingSpace: 1,
		movementSpeed: 16,
		attackSpeed: 1,
		trainingTime: 20,
		range: .4,
		attackType: "Melee (Ground Only)",
		prefferredTarget: "Any",
    maxLevel: 7,
		level: [
			{ /* Level 1 */
      dps: 8,
			hp: 45,
			ec: 25,
			accessLevel: 0,
			imageUrl: 'images/troops/barbarian/barbarianlevel1.png',
			researchCost: 0,
			researchTime: 0},
			{ /* Level 2 */
      dps: 11,
			hp: 54,
			ec: 40,
			accessLevel: 1,
			imageUrl: 'images/troops/barbarian/barbarianlevel1.png',
			researchCost: 50000,
			researchTime: "6 Hours"},
      { /* Level 3 */
      dps: 14,
      hp: 65,
      ec: 60,
      accessLevel: 3,
      imageUrl: 'images/troops/barbarian/barbarianlevel3.png',
      researchCost: 150000,
      researchTime: "1 Day"},
      { /* Level 4 */
      dps: 18,
      hp: 78,
      ec: 80,
      accessLevel: 5,
      imageUrl: 'images/troops/barbarian/barbarianlevel3.png',
      researchCost: 500000,
      researchTime: "3 Days"},
      { /* Level 5 */
      dps: 23,
      hp: 95,
      ec: 100,
      accessLevel: 6,
      imageUrl: 'images/troops/barbarian/barbarianlevel5.png',
      researchCost: 1500000,
      researchTime: "5 Days"},
		  { /* Level 6 */
      dps: 26,
      hp: 110,
      ec: 150,
      accessLevel: 7,
      imageUrl: 'images/troops/barbarian/barbarianlevel6.png',
      researchCost: 4500000,
      researchTime: "10 Days"},
      { /* Level 7 */
      dps: 30,
      hp: 125,
      ec: 200,
      accessLevel: 8,
      imageUrl: 'images/troops/barbarian/barbarianlevel6.png',
      researchCost: 6000000,
      researchTime: "14 Days"}
    ]
    },
    archer: {
        name: "Archer",
        housingSpace: 1,
        movementSpeed: 24,
        attackSpeed: 1,
        trainingTime: 25,
        range: 3.5,
        attackType: "Ranged (Ground & Air)",
        prefferredTarget: "Any",
        barracksLevelRequired: 2,
    maxLevel: 7,
        level: [
            { /* Level 1 */
            dps: 7,
            hp: 20,
            ec: 50,
            accessLevel: 0,
            imageUrl: 'images/troops/archer/archerlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 9,
            hp: 23,
            ec: 80,
            accessLevel: 1,
            imageUrl: 'images/troops/archer/archerlevel1.png',
            researchCost: 100000,
            researchTime: "12 Hours"},
            { /* Level 3 */
            dps: 12,
            hp: 28,
            ec: 120,
            accessLevel: 3,
            imageUrl: 'images/troops/archer/archerlevel3.png',
            researchCost: 250000,
            researchTime: "2 Days"},
            { /* Level 4 */
            dps: 16,
            hp: 33,
            ec: 160,
            accessLevel: 5,
            imageUrl: 'images/troops/archer/archerlevel3.png',
            researchCost: 750000,
            researchTime: "3 Days"},
            { /* Level 5 */
            dps: 20,
            hp: 40,
            ec: 200,
            accessLevel: 6,
            imageUrl: 'images/troops/archer/archerlevel5.png',
            researchCost: 2250000,
            researchTime: "5 Days"},
            { /* Level 6 */
            dps: 22,
            hp: 44,
            ec: 300,
            accessLevel: 7,
            imageUrl: 'images/troops/archer/archerlevel6.png',
            researchCost: 6000000,
            researchTime: "10 Days"},
            { /* Level 7 */
            dps: 25,
            hp: 48,
            ec: 400,
            accessLevel: 8,
            imageUrl: 'images/troops/archer/archerlevel6.png',
            researchCost: 7500000,
            researchTime: "14 Days"}
    ]
    },
    goblin: {
        name: "Goblin",
        housingSpace: 1,
        movementSpeed: 32,
        attackSpeed: 1,
        trainingTime: 30,
        range: .4,
        attackType: "Melee (Ground Only)",
        prefferredTarget: "Resources Damage(x2)",
        barracksLevelRequired: 4,
        maxLevel: 6,
        level: [
            { /* Level 1 */
            dps: 11,
            hp: 20,
            ec: 25,
            accessLevel: 0,
            imageUrl: 'images/troops/goblin/goblinlevel1.png',
            researchCost: 0,
            researchTime: 0},
            { /* Level 2 */
            dps: 14,
            hp: 30,
            ec: 40,
            accessLevel: 1,
            imageUrl: 'images/troops/goblin/goblinlevel1.png',
            researchCost: 50000,
            researchTime: "12 Hours"},
            { /* Level 3 */
            dps: 19,
            hp: 36,
            ec: 60,
            accessLevel: 3,
            imageUrl: 'images/troops/goblin/goblinlevel3.png',
            researchCost: 250000,
            researchTime: "2 Days"},
            { /* Level 4 */
            dps: 24,
            hp: 43,
            ec: 80,
            accessLevel: 5,
            imageUrl: 'images/troops/goblin/goblinlevel3.png',
            researchCost: 750000,
            researchTime: "3 Days"},
            { /* Level 5 */
            dps: 32,
            hp: 52,
            ec: 100,
            accessLevel: 6,
            imageUrl: 'images/troops/goblin/goblinlevel5.png',
            researchCost: 2250000,
            researchTime: "5 Days"},
            { /* Level 6 */
            dps: 42,
            hp: 68,
            ec: 150,
            accessLevel: 8,
            imageUrl: 'images/troops/goblin/goblinlevel6.png', //this image is incorrect
            researchCost: 4500000,
            researchTime: "10 Days"}
    ]
    }
}