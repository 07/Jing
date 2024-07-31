import {
  AirPlane,
  BirdsTree,
  Boat,
  BrownNoise,
  Cave,
  Coffee,
  Drops,
  Fire,
  Leaves,
  Night,
  PinkNoise,
  Playground,
  Rain,
  RainOnTent,
  Storm,
  StreamWater,
  Train,
  Underwater,
  WashingMachine,
  Waterfall,
  Waves,
  WhiteNoise,
  Wind,
  Music3,
  Temple
} from './icons'

export const sounds = [
  {
    id: 'rain',
    title: 'Rain',
    icon: Rain,
    file: {
      url: '/sounds/rain.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'storm',
    title: 'Storm',
    icon: Storm,
    file: {
      url: '/sounds/storm.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'drops',
    title: 'Drops',
    icon: Drops,
    file: {
      url: '/sounds/drops.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'wind',
    title: 'Wind',
    icon: Wind,
    file: {
      url: '/sounds/wind.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'waves',
    title: 'Waves',
    icon: Waves,
    file: {
      url: '/sounds/waves.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'underwater',
    title: 'Underwater',
    icon: Underwater,
    file: {
      url: '/sounds/underwater.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'stream-water',
    title: 'Stream Water',
    icon: StreamWater,
    file: {
      url: '/sounds/stream-water.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'waterfall',
    title: 'Waterfall',
    icon: Waterfall,
    file: {
      url: '/sounds/waterfall.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'birds-tree',
    title: 'Birds on Tree',
    icon: BirdsTree,
    file: {
      url: '/sounds/birds-tree.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'leaves',
    title: 'Leaves',
    icon: Leaves,
    file: {
      url: '/sounds/leaves.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'fire',
    title: 'Bonfire',
    icon: Fire,
    file: {
      url: '/sounds/fire.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'cave',
    title: 'Cave Sounds',
    icon: Cave,
    file: {
      url: '/sounds/cave-drops.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'night',
    title: 'Night',
    icon: Night,
    file: {
      url: '/sounds/night.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'coffee',
    title: 'Coffee shop',
    icon: Coffee,
    file: {
      url: '/sounds/coffee.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'train',
    title: 'Train',
    icon: Train,
    file: {
      url: '/sounds/train.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'air-plane',
    title: 'Airplane',
    icon: AirPlane,
    file: {
      url: '/sounds/air-plane.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'washing-machine',
    title: 'Washing machine',
    icon: WashingMachine,
    file: {
      url: '/sounds/washing-machine.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'playground',
    title: 'Playground',
    icon: Playground,
    file: {
      url: '/sounds/playground.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'boat',
    title: 'Boat',
    icon: Boat,
    file: {
      url: '/sounds/boat.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'rain-on-tent',
    title: 'Rain on Tent',
    icon: RainOnTent,
    file: {
      url: '/sounds/rain-on-tent.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'brown-noise',
    title: 'Brown Noise',
    icon: BrownNoise,
    file: {
      url: '/sounds/brown-noise.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'white-noise',
    title: 'White Noise',
    icon: WhiteNoise,
    file: {
      url: '/sounds/white-noise.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'pink-noise',
    title: 'Pink Noise',
    icon: PinkNoise,
    file: {
      url: '/sounds/pink-noise.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'music3',
    title: 'Music3',
    icon: Music3,
    file: {
      url: '/sounds/music3.mp3',
      type: 'audio/mp3'
    }
  },
  {
    id: 'temple',
    title: 'temple',
    icon: Temple,
    file: {
      url: '/sounds/temple.mp3',
      type: 'audio/mp3'
    }
  }
]

export type Sound = (typeof sounds)[0]
