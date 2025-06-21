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
    text: 'In the golden age of the Dutch Republic, a ship glides into Haarlem\'s harbor, its hold laden with a precious cargo - tulip bulbs from the Ottoman Empire. These exotic blooms, with their vibrant petals and rare beauty, are unlike anything the Dutch have ever seen. As whispers of their splendor spread through the cobblestone streets, the Netherlands are poised on the brink of an extraordinary obsession.',
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
    text: 'Your single bulb blooms into a flower of surpassing beauty, its petals a masterpiece of nature\'s artistry. As word of your acquisition spreads, whispers of the fortunes to be made in tulips grow to a fever pitch. The temptation to capitalize on the craze is almost irresistible.',
    choices: [
      { id: 'A1', text: 'Sell the bloom while hype builds', nextNode: 'A1' },
      { id: 'A2', text: 'Keep it and attempt to breed your own varieties', nextNode: 'A2' }
    ]
  },

  B: {
    id: 'B',
    level: 2,
    title: 'The Rumors',
    text: 'Your garden becomes the talk of Haarlem, a living tapestry of color and wonder. Passersby pause to admire the spectacle, their eyes wide with covetous desire. You can almost feel the momentum building, the mania taking root.',
    choices: [
      { id: 'B1', text: 'Host viewings to attract noble buyers', nextNode: 'B1' },
      { id: 'B2', text: 'Begin hoarding and trading bulbs quietly', nextNode: 'B2' }
    ]
  },

  C: {
    id: 'C',
    level: 2,
    title: 'The Rumors',
    text: 'You watch in incredulous fascination as your friend parlays a single bulb into a small fortune, flipping it for ten times the purchase price. The speed and scale of the profits are dizzying, almost obscene. A pang of doubt mingles with a rising fear of missing out.',
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
    text: 'The sale nets you a tidy profit, but it\'s a pittance compared to what the buyer reaps on the resale. As news of their windfall spreads, regret and greed take root in your heart, twining like vines around your better judgment.',
    choices: [
      { id: 'A1a', text: 'Attempt to buy the bloom back at any cost', nextNode: 'A1a' },
      { id: 'A1b', text: 'Vow to cultivate something even more rare and valuable', nextNode: 'A1b' }
    ]
  },

  A2: {
    id: 'A2',
    level: 3,
    title: 'The Rush',
    text: 'Your breeding efforts yield a bloom of singular peculiarity - a mottled, striped marvel that sets the connoisseurs atwitter. In the hothouse atmosphere of the mania, its very strangeness is a selling point, a mark of distinction.',
    choices: [
      { id: 'A2a', text: 'Trumpet the blossom as the rarest yet seen', nextNode: 'A2a' },
      { id: 'A2b', text: 'Sell the bulb to a collector in a clandestine deal', nextNode: 'A2b' }
    ]
  },

  B1: {
    id: 'B1',
    level: 3,
    title: 'The Rush',
    text: 'Your viewings become the talk of the town, drawing nobles and wealthy merchants like moths to a flame. They fawn over your most coveted specimens, offering sums that would have seemed absurd mere months ago.',
    choices: [
      { id: 'B1a', text: 'Sell to the highest bidder immediately', nextNode: 'B1a' },
      { id: 'B1b', text: 'Decline all offers, certain the frenzy is just beginning', nextNode: 'B1b' }
    ]
  },

  B2: {
    id: 'B2',
    level: 3,
    title: 'The Rush',
    text: 'Your growing hoard of bulbs draws the eye of rival speculators. Whispers of market manipulation dog your every move, as the competition grows ever more cutthroat.',
    choices: [
      { id: 'B2a', text: 'Double down, cornering the market at any cost', nextNode: 'B2a' },
      { id: 'B2b', text: 'Sell your hoard discreetly to a syndicate of investors', nextNode: 'B2b' }
    ]
  },

  C1: {
    id: 'C1',
    level: 3,
    title: 'The Rush',
    text: 'You sink your savings into a portfolio of bulbs, riding the wave of inflation. But for every rare bloom that yields a profit, a dozen prove middling disappointments. The market is a garden of earthly delights, but the fruit is often bitter.',
    choices: [
      { id: 'C1a', text: 'Gamble everything on one last purchase of an unproven variety', nextNode: 'C1a' },
      { id: 'C1b', text: 'Swallow your losses and abandon the trade', nextNode: 'C1b' }
    ]
  },

  C2: {
    id: 'C2',
    level: 3,
    title: 'The Rush',
    text: 'The mania seeps into every corner of Dutch life, from the dockside taverns to the halls of power. No conversation is complete without a breathless recounting of the latest tulip fortune. The very air seems charged with a contagious madness.',
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
    text: 'You use everything you have and secure the coveted flower, but the price is staggering, a sum that would purchase a fine house on the canal. Even amid the general frenzy, there are murmurs that you\'ve overextended yourself. The tulip never leaves your sight, you are soaked with fear.',
    choices: [
      { id: 'A1a1', text: 'Flip the bulb immediately to capitalize on the hype', nextNode: 'A1a1' },
      { id: 'A1a2', text: 'Lock it away, sure that its value will only grow', nextNode: 'A1a2' }
    ]
  },

  A1b: {
    id: 'A1b',
    level: 4,
    title: 'The Mania',
    text: 'Your new hybrid is a true chimera, a flower that seems to shift and change in different lights. Rumors swirl that it\'s one of a kind, a freak of nature never to be replicated. In the hothouse of the mania, such singularity is worth more than gold.',
    choices: [
      { id: 'A1b1', text: 'Auction the bulb to the highest international bidder', nextNode: 'A1b1' },
      { id: 'A1b2', text: 'Enter it in a contest for the rarest bloom', nextNode: 'A1b2' }
    ]
  },

  A2a: {
    id: 'A2a',
    level: 4,
    title: 'The Mania',
    text: 'Your trumpeting of the bulb\'s rarity unleashes a frenzy of desire. Collectors flock from all over Europe, each determined to possess this botanical wonder. Bidding wars erupt in the coffeehouses and salons, driving the price to dizzying heights.',
    choices: [
      { id: 'A2a1', text: 'Stoke desire by releasing only a few bulbs at a time', nextNode: 'A2a1' },
      { id: 'A2a2', text: 'Claim divine blessing for your flowers, starting a cult', nextNode: 'A2a2' }
    ]
  },

  A2b: {
    id: 'A2b',
    level: 4,
    title: 'The Mania',
    text: 'The collector meets you in a back alley, cloaked and furtive. The exchange is made in whispers, the bulb passing hands like contraband. But the next day, the collector is nowhere to be found, vanished like a thief in the night. Panic seizes you as you realize you\'ve been swindled.',
    choices: [
      { id: 'A2b1', text: 'Hire mercenaries to track them down at any cost', nextNode: 'A2b1' },
      { id: 'A2b2', text: 'Start over, keeping your new attempts secret', nextNode: 'A2b2' }
    ]
  },

  B1a: {
    id: 'B1a',
    level: 4,
    title: 'The Mania',
    text: 'The guilders pour in, a golden flood that seems to have no end. But your elation turns to ashes when the buyer, a lavish spendthrift of a noble, defaults on the payment. His fortune, it seems, was as ephemeral as the tulip craze itself.',
    choices: [
      { id: 'B1a1', text: 'Reclaim the bulbs as collateral on the noble\'s debt', nextNode: 'B1a1' },
      { id: 'B1a2', text: 'Sue for a share of the noble\'s estate to recoup the cost', nextNode: 'B1a2' }
    ]
  },

  B1b: {
    id: 'B1b',
    level: 4,
    title: 'The Mania',
    text: 'Your refusal to sell only feeds the mania, stoking the flames of desire. Soon, every ship from the East is met by a mob of eager buyers, each convinced that the rarest, most precious bulb is hidden somewhere in the cargo. Prices skyrocket as the market spirals out of control.',
    choices: [
      { id: 'B1b1', text: 'Partner with a savvy investor to trade on margin', nextNode: 'B1b1' },
      { id: 'B1b2', text: 'Publicize your most coveted breeds, driving up prices', nextNode: 'B1b2' }
    ]
  },

  B2a: {
    id: 'B2a',
    level: 4,
    title: 'The Mania',
    text: 'Your attempts to corner the market meet with fierce resistance. Other traders band together to thwart your every move, while saboteurs target your rarest blooms. Every day brings a new battle in an ever-escalating war for control of the tulip trade.',
    choices: [
      { id: 'B2a1', text: 'Hire guards to protect your rarest bulbs day and night', nextNode: 'B2a1' },
      { id: 'B2a2', text: 'Spread rumors to undermine trust in rival growers', nextNode: 'B2a2' }
    ]
  },

  B2b: {
    id: 'B2b',
    level: 4,
    title: 'The Mania',
    text: 'The syndicate\'s wealth insulates you from the worst of the mania\'s swings, but at a price. Your bulbs are no longer your own, and your every move is dictated by the whims of the faceless investors. You are a passenger on a ship you no longer steer.',
    choices: [
      { id: 'B2b1', text: 'Use your share of the profits to buy land and retire', nextNode: 'B2b1' },
      { id: 'B2b2', text: 'Secretly crossbreed the syndicate\'s tulips to reclaim your stake', nextNode: 'B2b2' }
    ]
  },

  C1a: {
    id: 'C1a',
    level: 4,
    title: 'The Mania',
    text: 'You stake everything on an untested bulb, a wild card in a deck stacked against you. But when the bloom finally opens, it\'s a disappointment, hardly distinguishable from the common stock. You\'ve joined the ranks of the gamblers and dupes, ruined by your own folly.',
    choices: [
      { id: 'C1a1', text: 'Retreat to the countryside to rebuild your fortune', nextNode: 'C1a1' },
      { id: 'C1a2', text: 'Seek rumors of the next floral craze to recoup your losses', nextNode: 'C1a2' }
    ]
  },

  C1b: {
    id: 'C1b',
    level: 4,
    title: 'The Mania',
    text: 'You exit the market just as the prices reach their peak. But as the unsold bulbs pile up in your shed, doubt begins to gnaw at you. What if the mania continues? What if you\'ve missed your one chance at the fortune of a lifetime?',
    choices: [
      { id: 'C1b1', text: 'Beg your way back into the trade at ruinous prices', nextNode: 'C1b1' },
      { id: 'C1b2', text: 'Turn to drink to dull the regret of the fortune lost', nextNode: 'C1b2' }
    ]
  },

  C2a: {
    id: 'C2a',
    level: 4,
    title: 'The Mania',
    text: 'Your warnings fall on deaf ears, drowned out by the clamor of the market. If anything, your naysaying only convinces the speculators that they\'re onto something truly extraordinary. After all, every mania needs its skeptics and doomsayers.',
    choices: [
      { id: 'C2a1', text: 'Invest your savings in surer bets — land, art, anything but flowers', nextNode: 'C2a1' },
      { id: 'C2a2', text: 'Don disguises to spread doubt among buyers and sellers alike', nextNode: 'C2a2' }
    ]
  },

  C2b: {
    id: 'C2b',
    level: 4,
    title: 'The Mania',
    text: 'Your bulbs bloom into a rainbow of hues, but in a market saturated with rare specimens, they hardly merit a second glance. As the prices climb ever higher, your modest holdings seem increasingly paltry, a child\'s posy in a field of hothouse exotics.',
    choices: [
      { id: 'C2b1', text: 'Sell everything to buy one last bulb, hoping for a rare blossom', nextNode: 'C2b1' },
      { id: 'C2b2', text: 'Accept that you were wise to stay clear of the worst', nextNode: 'C2b2' }
    ]
  },

  // Level 5 - The Peak
  A1a1: {
    id: 'A1a1',
    level: 5,
    title: 'The Peak',
    text: 'Your timing is impeccable. You sell the bulb at the very height of the market, just as the first whispers of doubt begin to circulate. Your coffers overflow with guilders, even as your neighbors start to eye their own holdings with growing unease.',
    choices: [
      { id: 'A1a1a', text: 'Pledge your fortune to found a charity for ruined speculators', nextNode: 'A1a1a' },
      { id: 'A1a1b', text: 'Quietly buy up choice bulbs from desperate sellers, certain it\'s just a dip', nextNode: 'A1a1b' }
    ]
  },

  A1b1: {
    id: 'A1b1',
    level: 5,
    title: 'The Peak',
    text: 'The international auction draws bidders from as far afield as Constantinople and London. The winning bid is beyond your wildest imaginings, a sum that would buy a fleet of ships or a country estate. Overnight, you\'ve joined the ranks of the nouveau riche, the tulip millionaires.',
    choices: [
      { id: 'A1b1a', text: 'Acquire sprawling estates and live in opulence', nextNode: 'A1b1a' },
      { id: 'A1b1b', text: 'Fund expeditions to find stranger, rarer flowers to reignite the craze', nextNode: 'A1b1b' }
    ]
  },

  A2a1: {
    id: 'A2a1',
    level: 5,
    title: 'The Peak',
    text: 'Your strategy of artificial scarcity pays off handsomely. With each new release, the prices climb higher, as collectors vie for the privilege of owning one of your fabled bulbs. You become a fixture in the fashionable salons, feted by bankers and burgomasters alike.',
    choices: [
      { id: 'A2a1a', text: 'Expand into all luxury goods. Tulips opened the door', nextNode: 'A2a1a' },
      { id: 'A2a1b', text: 'Retreat from public life, building a secret vault for your wealth', nextNode: 'A2a1b' }
    ]
  },

  A2a2: {
    id: 'A2a2',
    level: 5,
    title: 'The Peak',
    text: 'Your followers hail you as a prophet, a visionary who can conjure wealth from the very soil. They hang on your every word, buying and selling according to your pronouncements. The line between faith and folly blurs as the mania reaches its apex.',
    choices: [
      { id: 'A2a2a', text: 'Proclaim yourself a living god, demanding tithes from your devotees', nextNode: 'A2a2a' },
      { id: 'A2a2b', text: 'Stage a dramatic renunciation, exposing the cult as a sham', nextNode: 'A2a2b' }
    ]
  },

  A2b1: {
    id: 'A2b1',
    level: 5,
    title: 'The Peak',
    text: 'Your mercenaries scour the low countries for any trace of the fraudster, but to no avail. It\'s as if they never existed. The money and time you pour into the search only compound your losses, dragging you deeper into desperation.',
    choices: [
      { id: 'A2b1a', text: 'Sell your remaining bulbs to finance one last attempt at recovery', nextNode: 'A2b1a' },
      { id: 'A2b1b', text: 'Swear revenge on all who wronged you, no matter the cost', nextNode: 'A2b1b' }
    ]
  },

  A2b2: {
    id: 'A2b2',
    level: 5,
    title: 'The Peak',
    text: 'You start anew with a heavy heart, your dreams of easy wealth dashed. But in the quiet of your garden, as you tend to your secret blooms, a new realization takes root. Perhaps there is more to life than the frenzied pursuit of fortune.',
    choices: [
      { id: 'A2b2a', text: 'Craft a new hybrid, a flower to surpass all others', nextNode: 'A2b2a' },
      { id: 'A2b2b', text: 'Abandon the tulip trade and find solace in humbler pursuits', nextNode: 'A2b2b' }
    ]
  },

  B1a1: {
    id: 'B1a1',
    level: 5,
    title: 'The Peak',
    text: 'The repossessed bulbs are like a millstone around your neck. The market has moved on to newer, rarer specimens, and your once-coveted flowers are now seen as yesterday\'s news. You struggle to unload them at a fraction of their former price.',
    choices: [
      { id: 'B1a1a', text: 'Cut your losses and sell, accepting the blow to your reputation', nextNode: 'B1a1a' },
      { id: 'B1a1b', text: 'Hold firm, convinced that tastes will cycle back around', nextNode: 'B1a1b' }
    ]
  },

  B1b1: {
    id: 'B1b1',
    level: 5,
    title: 'The Peak',
    text: 'The margin trades amplify your profits to dizzying heights. Every guilder invested returns a hundredfold. But with each new contract, you sink deeper into debt, leveraging your future on the assumption of ever-rising prices. It\'s a house of cards, one tremor away from collapse.',
    choices: [
      { id: 'B1b1a', text: 'Reinvest everything into ever riskier trades, chasing the dragon', nextNode: 'B1b1a' },
      { id: 'B1b1b', text: 'Quietly shift your assets into gold and land, bracing for the inevitable', nextNode: 'B1b1b' }
    ]
  },

  B1b2: {
    id: 'B1b2',
    level: 5,
    title: 'The Peak',
    text: 'Your breathless endorsements of your own breeds draw the attention of the city fathers. There are grumblings of foul play, of tulip lords manipulating the market for their own gain. Your rivals fan the flames, casting aspersions on your character and breeding.',
    choices: [
      { id: 'B1b2a', text: 'Confront your accusers head-on, challenging them to a public duel', nextNode: 'B1b2a' },
      { id: 'B1b2b', text: 'Launch a charm offensive, wooing the authorities with lavish gifts', nextNode: 'B1b2b' }
    ]
  },

  B2a1: {
    id: 'B2a1',
    level: 5,
    title: 'The Peak',
    text: 'The guards become a familiar sight in your garden, grim-faced men who patrol the perimeter day and night. But even they are powerless against the caprice of nature. A late frost decimates your rarest breeds, leaving you with a fortune in worthless, rotting bulbs.',
    choices: [
      { id: 'B2a1a', text: 'Unleash your fury on the guards, accusing them of sabotage', nextNode: 'B2a1a' },
      { id: 'B2a1b', text: 'Retreat into seclusion, shunning all human contact', nextNode: 'B2a1b' }
    ]
  },

  B2b1: {
    id: 'B2b1',
    level: 5,
    title: 'The Peak',
    text: 'The land you purchase becomes a sanctuary, a haven from the madness of the market. As you walk among the neat rows of vegetables and herbs, feeling the rich earth beneath your feet, a sense of peace washes over you. Perhaps this is where you belonged all along.',
    choices: [
      { id: 'B2b1a', text: 'Invite other weary traders to join your agrarian commune', nextNode: 'B2b1a' },
      { id: 'B2b1b', text: 'Keep your distance, savoring the solitude and the silence', nextNode: 'B2b1b' }
    ]
  },

  B2b2: {
    id: 'B2b2',
    level: 5,
    title: 'The Peak',
    text: 'Your clandestine crossbreeding yields a strain of singular beauty, a tulip with petals that shimmer like beaten gold. But the syndicate gets wind of your activities and demands a cut of the profits. You\'re faced with an impossible choice: hand over your life\'s work, or risk everything in a battle against the powerful cabal.',
    choices: [
      { id: 'B2b2a', text: 'Refuse their demands and go into hiding, bulbs in tow', nextNode: 'B2b2a' },
      { id: 'B2b2b', text: 'Agree to their terms, biding your time for a future betrayal', nextNode: 'B2b2b' }
    ]
  },

  C1b1: {
    id: 'C1b1',
    level: 5,
    title: 'The Peak',
    text: 'You throw yourself at the mercy of the tulip magnates, begging for a chance to buy in at whatever price they demand. They fleece you without mercy, selling you bulbs at ten, twenty times their worth. The next day, the market crashes, and your fortune is wiped out in an instant.',
    choices: [
      { id: 'C1b1a', text: 'Flee the country in the dead of night, leaving your debts behind', nextNode: 'C1b1a' },
      { id: 'C1b1b', text: 'Throw yourself on the mercy of your creditors, vowing to work off what you owe', nextNode: 'C1b1b' }
    ]
  },

  C2a1: {
    id: 'C2a1',
    level: 5,
    title: 'The Peak',
    text: 'Your prescience pays off. As the tulip market implodes, your investments in land and art hold steady. You watch from the sidelines as the speculators and dupes are ruined, their wails of despair music to your ears. You\'ve beaten the game by refusing to play.',
    choices: [
      { id: 'C2a1a', text: 'Expand your holdings, buying up distressed assets for a song', nextNode: 'C2a1a' },
      { id: 'C2a1b', text: 'Withdraw from the world of finance, content with your lot', nextNode: 'C2a1b' }
    ]
  },

  C2a2: {
    id: 'C2a2',
    level: 5,
    title: 'The Peak',
    text: 'In taverns and coffeehouses, in the halls of the Exchange, you spin tales of impending doom, of a crash that will shatter the foundations of Dutch prosperity. At first, the traders dismiss you as just another crank. But as the cracks begin to show, your dire predictions take on the aura of prophecy.',
    choices: [
      { id: 'C2a2a', text: 'Revel in your newfound notoriety, playing the role of the wise sage', nextNode: 'C2a2a' },
      { id: 'C2a2b', text: 'Retreat into anonymity, haunted by the lives your words have ruined', nextNode: 'C2a2b' }
    ]
  },

  C2b1: {
    id: 'C2b1',
    level: 5,
    title: 'The Peak',
    text: 'You sink your last guilders into a bulb of impeccable lineage, a true rarity from the fabled gardens of the Ottoman court. But before it can bloom, the crash comes. The rare bulb, once worth a king\'s ransom, is now little more than an overpriced onion.',
    choices: [
      { id: 'C2b1a', text: 'Plant it in your garden anyway, a rueful memento of your brush with fate', nextNode: 'C2b1a' },
      { id: 'C2b1b', text: 'Hurl it into the canal in a fit of rage and despair', nextNode: 'C2b1b' }
    ]
  },

  // Dead end nodes with closing text
  A1a2: {
    id: 'A1a2',
    level: 4,
    title: 'The Mania',
    text: 'You lock the bulb away, convinced its value will only grow. Butthen February, 1637... The bottom falls out of the tulip market. Prices plummet a thousandfold overnight. Fortunes evaporate, turning princes into paupers. You lose everything.',
    isEnding: true
  },

  A1b2: {
    id: 'A1b2',
    level: 4,
    title: 'The Mania',
    text: 'Your bloom wins the contest, but the prize is paid in tulip bulbs just as the market crashes. Victory turns to ash.\n\nAs the last petal falls from the tulip of your life, what remains is the legacy you\'ve left behind. Whether in the form of grand public works or quiet private deeds, in the laws of nations or the hearts of the humble, your choices have shaped the world in ways both seen and unseen. The flower that once drove men to madness may wilt and fade, but the seeds you\'ve planted will continue to grow, bearing fruit for generations to come. Such is the nature of history, and of the human spirit that shapes it. In the end, it is not the tulip that matters, but the gardener.',
    isEnding: true
  },

  B1a2: {
    id: 'B1a2',
    level: 4,
    title: 'The Mania',
    text: 'The legal battle drags on for years, consuming what little wealth you have left. In the end, you win a pyrrhic victory, claiming a share of an estate already picked clean by other creditors.\n\nAs the last petal falls from the tulip of your life, what remains is the legacy you\'ve left behind. Whether in the form of grand public works or quiet private deeds, in the laws of nations or the hearts of the humble, your choices have shaped the world in ways both seen and unseen. The flower that once drove men to madness may wilt and fade, but the seeds you\'ve planted will continue to grow, bearing fruit for generations to come. Such is the nature of history, and of the human spirit that shapes it. In the end, it is not the tulip that matters, but the gardener.',
    isEnding: true
  },

  B2a2: {
    id: 'B2a2',
    level: 4,
    title: 'The Mania',
    text: 'Your campaign of whispers and innuendo backfires spectacularly. The rival growers unite against you, exposing your machinations to the authorities. Your reputation in ruins, you\'re banned from the tulip trade forever.\n\nAs the last petal falls from the tulip of your life, what remains is the legacy you\'ve left behind. Whether in the form of grand public works or quiet private deeds, in the laws of nations or the hearts of the humble, your choices have shaped the world in ways both seen and unseen. The flower that once drove men to madness may wilt and fade, but the seeds you\'ve planted will continue to grow, bearing fruit for generations to come. Such is the nature of history, and of the human spirit that shapes it. In the end, it is not the tulip that matters, but the gardener.',
    isEnding: true
  },

  C1a1: {
    id: 'C1a1',
    level: 4,
    title: 'The Mania',
    text: 'You retreat to a modest farm in the countryside, far from the madness of the tulip trade. Working the soil with your own hands, you slowly rebuild your life and fortune through honest labor.\n\nAs the last petal falls from the tulip of your life, what remains is the legacy you\'ve left behind. Whether in the form of grand public works or quiet private deeds, in the laws of nations or the hearts of the humble, your choices have shaped the world in ways both seen and unseen. The flower that once drove men to madness may wilt and fade, but the seeds you\'ve planted will continue to grow, bearing fruit for generations to come. Such is the nature of history, and of the human spirit that shapes it. In the end, it is not the tulip that matters, but the gardener.',
    isEnding: true
  },

  C1b2: {
    id: 'C1b2',
    level: 4,
    title: 'The Mania',
    text: 'The bottle becomes your constant companion, drowning your regrets in a haze of gin and despair. You become a cautionary tale, a broken man haunting the taverns with stories of what might have been.\n\nAs the last petal falls from the tulip of your life, what remains is the legacy you\'ve left behind. Whether in the form of grand public works or quiet private deeds, in the laws of nations or the hearts of the humble, your choices have shaped the world in ways both seen and unseen. The flower that once drove men to madness may wilt and fade, but the seeds you\'ve planted will continue to grow, bearing fruit for generations to come. Such is the nature of history, and of the human spirit that shapes it. In the end, it is not the tulip that matters, but the gardener.',
    isEnding: true
  },

  // Level 6 - The Crash
  crash: {
    id: 'crash',
    level: 6,
    title: 'The Crash',
    text: 'February, 1637. The bottom falls out of the tulip market. Prices plummet a thousandfold overnight. Fortunes evaporate, turning princes into paupers. The taverns echo with tales of ruin and despair, of lives destroyed by a flower\'s fickle beauty. In the cold light of dawn, as an empire of illusions crumbles, you must choose your path forward...',
    choices: [
      { id: 'ending_philanthropy', text: 'Use your fortune to ease the suffering of the crash\'s victims', nextNode: 'ending_philanthropy' },
      { id: 'ending_renewal', text: 'Liquidate your remaining possessions and start afresh in a new land', nextNode: 'ending_renewal' },
      { id: 'ending_reform', text: 'Rally the dispossessed to demand justice and reform', nextNode: 'ending_reform' }
    ]
  },

  // Level 7 - Legacy Endings with closing text
  ending_philanthropy: {
    id: 'ending_philanthropy',
    level: 7,
    title: 'The Philanthropist',
    text: 'You dedicate your fortune to founding schools, almshouses, and hospitals, determined to extract some lasting good from the tulip craze. Your name becomes synonymous with generosity and civic virtue, spoken with reverence by the grateful poor. In the end, this becomes your true legacy: not the wealth you accumulated, but the lives you touched.',
    isEnding: true
  },

  ending_preservation: {
    id: 'ending_preservation',
    level: 7,
    title: 'The Miser',
    text: 'You retreat behind high walls and locked gates, deaf to the pleas of the suffering. Your fortune becomes a prison, isolating you from a world you no longer trust. You die alone, choking on your own bile, your riches little comfort in your final moments. History remembers you as a cautionary tale, a Midas who turned everything he touched to ashes.\n\nAs the last petal falls from the tulip of your life, what remains is the legacy you\'ve left behind. Whether in the form of grand public works or quiet private deeds, in the laws of nations or the hearts of the humble, your choices have shaped the world in ways both seen and unseen. The flower that once drove men to madness may wilt and fade, but the seeds you\'ve planted will continue to grow, bearing fruit for generations to come. Such is the nature of history, and of the human spirit that shapes it. In the end, it is not the tulip that matters, but the gardener.',
    isEnding: true
  },

  ending_renewal: {
    id: 'ending_renewal',
    level: 7,
    title: 'The Exile',
    text: 'You board a ship bound for the East Indies, determined to start anew in a land untouched by tulip mania. In the teeming ports of Batavia and Malacca, you rebuild your fortune from scratch, trading in spices and silks. You never return to the Netherlands, but your legend lives on, a testament to the resilience of the human spirit.\n\nAs the last petal falls from the tulip of your life, what remains is the legacy you\'ve left behind. Whether in the form of grand public works or quiet private deeds, in the laws of nations or the hearts of the humble, your choices have shaped the world in ways both seen and unseen. The flower that once drove men to madness may wilt and fade, but the seeds you\'ve planted will continue to grow, bearing fruit for generations to come. Such is the nature of history, and of the human spirit that shapes it. In the end, it is not the tulip that matters, but the gardener.',
    isEnding: true
  },

  ending_reform: {
    id: 'ending_reform',
    level: 7,
    title: 'The Revolutionary',
    text: 'You rally the victims of the crash into a movement for radical change. In secret meetings and public squares, you rail against the greed of the tulip lords, the corruption of the system that enriched the few at the expense of the many. Your calls for redistribution and reform strike fear into the hearts of the powerful. Whether your revolution succeeds or fails, your name will echo through history as a champion of the downtrodden.\n\nAs the last petal falls from the tulip of your life, what remains is the legacy you\'ve left behind. Whether in the form of grand public works or quiet private deeds, in the laws of nations or the hearts of the humble, your choices have shaped the world in ways both seen and unseen. The flower that once drove men to madness may wilt and fade, but the seeds you\'ve planted will continue to grow, bearing fruit for generations to come. Such is the nature of history, and of the human spirit that shapes it. In the end, it is not the tulip that matters, but the gardener.',
    isEnding: true
  }
};

// Add routing logic for nodes that should lead to crash
export const shouldRouteToCrash = (nodeId: string): boolean => {
  const crashRoutes = [
    'A1a1a', 'A1b1b', 'A2a1a', 'A2a2a', 'B1b1a',
    'A2b2b', 'B1b1b', 'B2b1a', 'C2a1a', 'C2a2b', 'C2b1a',
    'A1a1b', 'A2a1b', 'A2a2b', 'A2b1a', 'A2b1b', 'A2b2a',
    'B1a1a', 'B1a1b', 'B1b2a', 'B1b2b', 'B2a1a', 'B2a1b',
    'B2b1b', 'B2b2a', 'B2b2b', 'C1a2', 'C1b1a', 'C1b1b',
    'C2a2a', 'C2b1b'
  ];
  return crashRoutes.includes(nodeId);
};