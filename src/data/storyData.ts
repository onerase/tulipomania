export interface StoryNode {
  id: string;
  level: number;
  title: string;
  text: string;
  choices?: Choice[];
  isEnding?: boolean;
}

export interface Choice {
  id: string;
  text: string;
  nextNode: string;
}

export const storyData: Record<string, StoryNode> = {
  // Level 1 - The Spark
  start: {
    id: 'start',
    level: 1,
    title: 'The Spark',
    text: 'In 1634, a fateful ship docks in Haarlem, its hold laden with an exotic cargo — tulip bulbs from the Ottoman Empire. The flowers are an instant sensation, their vibrant petals unlike anything the Dutch have seen. As whispers of their beauty spread, a choice hangs before you...',
    choices: [
      { id: 'A', text: 'Buy a single tulip bulb — a cautious start', nextNode: 'A' },
      { id: 'B', text: 'Plant a full tulip garden — go all in', nextNode: 'B' },
      { id: 'C', text: 'Do nothing — stay out of the frenzy', nextNode: 'C' }
    ]
  },

  // Level 2 - The Rumors
  A: {
    id: 'A',
    level: 2,
    title: 'The Rumors',
    text: 'The bulb blooms rare and beautiful. Whispers spread of the fortunes to be made in tulips.',
    choices: [
      { id: 'A1', text: 'Sell the bloom while hype builds', nextNode: 'A1' },
      { id: 'A2', text: 'Keep it and attempt to breed your own varieties', nextNode: 'A2' }
    ]
  },

  B: {
    id: 'B',
    level: 2,
    title: 'The Rumors',
    text: 'The garden thrives. A few passersby pause to admire the uncommon flowers.',
    choices: [
      { id: 'B1', text: 'Host viewings to attract noble buyers', nextNode: 'B1' },
      { id: 'B2', text: 'Begin hoarding and trading bulbs quietly', nextNode: 'B2' }
    ]
  },

  C: {
    id: 'C',
    level: 2,
    title: 'The Rumors',
    text: 'You watch in disbelief as a friend flips a single bulb for 10x their investment.',
    choices: [
      { id: 'C1', text: 'Buy in at the inflated prices, afraid to miss out', nextNode: 'C1' },
      { id: 'C2', text: 'Remain skeptical and observe from afar', nextNode: 'C2' }
    ]
  },

  // Level 3 - The Rush
  A1: {
    id: 'A1',
    level: 3,
    title: 'The Rush',
    text: 'You make a tidy profit. But the buyer soon resells the bloom for far more. Regret and greed take root.',
    choices: [
      { id: 'A1a', text: 'Attempt to buy the bloom back at any cost', nextNode: 'A1a' },
      { id: 'A1b', text: 'Vow to cultivate something even more rare and valuable', nextNode: 'A1b' }
    ]
  },

  A2: {
    id: 'A2',
    level: 3,
    title: 'The Rush',
    text: 'Your breeding efforts bear a unique new variety, mottled and strange.',
    choices: [
      { id: 'A2a', text: 'Trumpet the blossom as the rarest yet seen', nextNode: 'A2a' },
      { id: 'A2b', text: 'Sell the bulb to a collector in a clandestine deal', nextNode: 'A2b' }
    ]
  },

  B1: {
    id: 'B1',
    level: 3,
    title: 'The Rush',
    text: 'Nobles begin visiting your garden, offering absurd sums for the most coveted varieties.',
    choices: [
      { id: 'B1a', text: 'Sell to the highest bidder immediately', nextNode: 'B1a' },
      { id: 'B1b', text: 'Decline all offers, certain the frenzy is just beginning', nextNode: 'B1b' }
    ]
  },

  B2: {
    id: 'B2',
    level: 3,
    title: 'The Rush',
    text: 'Rivals take note of your success. Accusations of market manipulation surface.',
    choices: [
      { id: 'B2a', text: 'Double down, cornering the market at any cost', nextNode: 'B2a' },
      { id: 'B2b', text: 'Sell your hoard discreetly to a syndicate of investors', nextNode: 'B2b' }
    ]
  },

  C1: {
    id: 'C1',
    level: 3,
    title: 'The Rush',
    text: 'The inflated prices bring brief windfalls, but your bulbs fail to match the rarest blooms.',
    choices: [
      { id: 'C1a', text: 'Gamble everything on one last purchase of an unproven variety', nextNode: 'C1a' },
      { id: 'C1b', text: 'Swallow your losses and abandon the trade', nextNode: 'C1b' }
    ]
  },

  C2: {
    id: 'C2',
    level: 3,
    title: 'The Rush',
    text: 'Tulip mania consumes all conversation. You can\'t escape the tales of overnight fortunes.',
    choices: [
      { id: 'C2a', text: 'Publish a pamphlet warning of an impending crash', nextNode: 'C2a' },
      { id: 'C2b', text: 'Relent and buy a handful of bulbs, just in case', nextNode: 'C2b' }
    ]
  },

  // Level 4 - The Mania
  A1a: {
    id: 'A1a',
    level: 4,
    title: 'The Mania',
    text: 'You secure the bloom, but at a price that raises eyebrows even amid the frenzy.',
    choices: [
      { id: 'A1a1', text: 'Flip the bulb immediately to capitalize on the hype', nextNode: 'A1a1' },
      { id: 'A1a2', text: 'Lock it away, sure that its value will only grow', nextNode: 'A1a2' }
    ]
  },

  A1b: {
    id: 'A1b',
    level: 4,
    title: 'The Mania',
    text: 'Your new hybrid is bizarre and beautiful. Rumored to be one of a kind.',
    choices: [
      { id: 'A1b1', text: 'Auction the bulb to the highest international bidder', nextNode: 'A1b1' },
      { id: 'A1b2', text: 'Enter it in a contest for the rarest bloom', nextNode: 'A1b2' }
    ]
  },

  A2a: {
    id: 'A2a',
    level: 4,
    title: 'The Mania',
    text: 'Collectors clamor for your bulbs. Bidding wars erupt in the salons and taverns.',
    choices: [
      { id: 'A2a1', text: 'Stoke desire by releasing only a few bulbs at a time', nextNode: 'A2a1' },
      { id: 'A2a2', text: 'Claim divine blessing for your flowers, starting a cult', nextNode: 'A2a2' }
    ]
  },

  A2b: {
    id: 'A2b',
    level: 4,
    title: 'The Mania',
    text: 'The collector vanishes with your irreplaceable bulb. Fury and panic set in.',
    choices: [
      { id: 'A2b1', text: 'Hire mercenaries to track them down at any cost', nextNode: 'A2b1' },
      { id: 'A2b2', text: 'Start over, keeping your new attempts secret', nextNode: 'A2b2' }
    ]
  },

  B1a: {
    id: 'B1a',
    level: 4,
    title: 'The Mania',
    text: 'The guilder flows freely, but the noble soon suffers a reversal of fortune, unable to pay.',
    choices: [
      { id: 'B1a1', text: 'Reclaim the bulbs as collateral on the noble\'s debt', nextNode: 'B1a1' },
      { id: 'B1a2', text: 'Sue for a share of the noble\'s estate to recoup the cost', nextNode: 'B1a2' }
    ]
  },

  B1b: {
    id: 'B1b',
    level: 4,
    title: 'The Mania',
    text: 'Tulip mania reaches a fever pitch. Every crate off the ship is bought and sold a dozen times over before it even reaches the market.',
    choices: [
      { id: 'B1b1', text: 'Partner with a savvy investor to trade on margin', nextNode: 'B1b1' },
      { id: 'B1b2', text: 'Publicize your most coveted breeds, driving up prices', nextNode: 'B1b2' }
    ]
  },

  B2a: {
    id: 'B2a',
    level: 4,
    title: 'The Mania',
    text: 'Every florin poured into cornering the market only invites more scrutiny and sabotage.',
    choices: [
      { id: 'B2a1', text: 'Hire guards to protect your rarest bulbs day and night', nextNode: 'B2a1' },
      { id: 'B2a2', text: 'Spread rumors to undermine trust in rival growers', nextNode: 'B2a2' }
    ]
  },

  B2b: {
    id: 'B2b',
    level: 4,
    title: 'The Mania',
    text: 'The syndicate\'s deep pockets insulate you from the worst of the mania, but strip you of control.',
    choices: [
      { id: 'B2b1', text: 'Use your share of the profits to buy land and retire', nextNode: 'B2b1' },
      { id: 'B2b2', text: 'Secretly crossbreed the syndicate\'s tulips to reclaim your stake', nextNode: 'B2b2' }
    ]
  },

  C1a: {
    id: 'C1a',
    level: 4,
    title: 'The Mania',
    text: 'The unproven bulb proves a bust. You join the ranks of gamblers broken by the trade.',
    choices: [
      { id: 'C1a1', text: 'Retreat to the countryside to rebuild your fortune', nextNode: 'C1a1' },
      { id: 'C1a2', text: 'Seek rumors of the next floral craze to recoup your losses', nextNode: 'C1a2' }
    ]
  },

  C1b: {
    id: 'C1b',
    level: 4,
    title: 'The Mania',
    text: 'You leave the market just as prices rocket ever higher. Envy and doubt plague you.',
    choices: [
      { id: 'C1b1', text: 'Beg your way back into the trade at ruinous prices', nextNode: 'C1b1' },
      { id: 'C1b2', text: 'Turn to drink to dull the regret of the fortune lost', nextNode: 'C1b2' }
    ]
  },

  C2a: {
    id: 'C2a',
    level: 4,
    title: 'The Mania',
    text: 'Your warnings go unheeded, decried by those profiting from the craze.',
    choices: [
      { id: 'C2a1', text: 'Invest your savings in surer bets — land, art, anything but flowers', nextNode: 'C2a1' },
      { id: 'C2a2', text: 'Don disguises to spread doubt among buyers and sellers alike', nextNode: 'C2a2' }
    ]
  },

  C2b: {
    id: 'C2b',
    level: 4,
    title: 'The Mania',
    text: 'Your bulbs sprout middling blooms. A meager return in a market gone mad.',
    choices: [
      { id: 'C2b1', text: 'Sell everything to buy one last bulb, hoping for a rare blossom', nextNode: 'C2b1' },
      { id: 'C2b2', text: 'Accept that you were wise to stay clear of the worst', nextNode: 'C2b2' }
    ]
  },

  // Level 5 - The Peak (continuing with key nodes)
  A1a1: {
    id: 'A1a1',
    level: 5,
    title: 'The Peak',
    text: 'Sold! Your timing proves perfect. You exit the market with coffers full as whispers of a crash begin.',
    choices: [
      { id: 'A1a1a', text: 'Pledge your fortune to found a charity for ruined speculators', nextNode: 'A1a1a' },
      { id: 'A1a1b', text: 'Quietly buy up choice bulbs from desperate sellers, certain it\'s just a dip', nextNode: 'A1a1b' }
    ]
  },

  A1b1: {
    id: 'A1b1',
    level: 5,
    title: 'The Peak',
    text: 'Collectors in Paris and London bid astronomical sums. You\'re rich beyond dreams.',
    choices: [
      { id: 'A1b1a', text: 'Acquire sprawling estates and live in opulence', nextNode: 'A1b1a' },
      { id: 'A1b1b', text: 'Fund expeditions to find stranger, rarer flowers to reignite the craze', nextNode: 'A1b1b' }
    ]
  },

  // Dead end nodes
  A1a2: {
    id: 'A1a2',
    level: 4,
    title: 'The Mania',
    text: 'You lock the bulb away, convinced its value will only grow. But the crash comes swiftly, and your precious bloom becomes worthless overnight.',
    isEnding: true
  },

  A1b2: {
    id: 'A1b2',
    level: 4,
    title: 'The Mania',
    text: 'Your bloom wins the contest, but the prize is paid in tulip bulbs just as the market crashes. Victory turns to ash.',
    isEnding: true
  },

  // Level 6 - The Crash (simplified crash outcomes)
  crash: {
    id: 'crash',
    level: 6,
    title: 'The Crash',
    text: 'February 3, 1637. The tulip market crashes overnight. Prices plummet a thousandfold. Fortunes vanish. In the aftermath, you must decide...',
    choices: [
      { id: 'help', text: 'Use your remaining resources to help those ruined by the crash', nextNode: 'ending_philanthropy' },
      { id: 'preserve', text: 'Preserve what little wealth remains at all costs', nextNode: 'ending_preservation' },
      { id: 'rebuild', text: 'Start anew in a distant land', nextNode: 'ending_renewal' },
      { id: 'reform', text: 'Fight for economic reform to prevent future manias', nextNode: 'ending_reform' }
    ]
  },

  // Level 7 - Legacy Endings
  ending_philanthropy: {
    id: 'ending_philanthropy',
    level: 7,
    title: 'Philanthropy',
    text: 'You dedicate your remaining fortune to helping crash victims rebuild their lives. Your legacy becomes one of generosity and redemption. Though the tulip mania brought ruin to many, your compassion lights a path forward in the darkness.',
    isEnding: true
  },

  ending_preservation: {
    id: 'ending_preservation',
    level: 7,
    title: 'Preservation',
    text: 'You guard your remaining wealth jealously, turning away from the suffering around you. You live out your days in lonely splendor, reviled by the masses. The tulip\'s beauty could not mask the ugliness of unchecked greed.',
    isEnding: true
  },

  ending_renewal: {
    id: 'ending_renewal',
    level: 7,
    title: 'Renewal',
    text: 'In a distant land, you start anew, building a modest life through hard work. You never forget the lessons of the tulip fields. Sometimes wisdom comes only through loss, and you have learned that true wealth lies not in speculation, but in honest labor.',
    isEnding: true
  },

  ending_reform: {
    id: 'ending_reform',
    level: 7,
    title: 'Reform',
    text: 'You become a leader in the movement for economic reform, fighting for a more just and stable society. Your legacy is one of activism and change. The tulip mania\'s lessons become the foundation for a better tomorrow.',
    isEnding: true
  }
};

// Add routing logic for nodes that should lead to crash
export const shouldRouteToCrash = (nodeId: string): boolean => {
  const crashRoutes = [
    'A1a1a', 'A1b1b', 'A2a1a', 'A2a2a', 'B1b1a',
    'A2b2b', 'B1b1b', 'B2b1a', 'C2a1a', 'C2a2b', 'C2b1a'
  ];
  return crashRoutes.includes(nodeId);
};