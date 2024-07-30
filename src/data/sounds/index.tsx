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
      url: '/sounds/rain.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'storm',
    title: 'Storm',
    icon: Storm,
    file: {
      url: '/sounds/storm.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'drops',
    title: 'Drops',
    icon: Drops,
    file: {
      url: '/sounds/drops.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'wind',
    title: 'Wind',
    icon: Wind,
    file: {
      url: '/sounds/wind.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'waves',
    title: 'Waves',
    icon: Waves,
    file: {
      url: '/sounds/waves.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'underwater',
    title: 'Underwater',
    icon: Underwater,
    file: {
      url: '/sounds/underwater.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'stream-water',
    title: 'Stream Water',
    icon: StreamWater,
    file: {
      url: '/sounds/stream-water.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'waterfall',
    title: 'Waterfall',
    icon: Waterfall,
    file: {
      url: '/sounds/waterfall.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'birds-tree',
    title: 'Birds on Tree',
    icon: BirdsTree,
    file: {
      url: '/sounds/birds-tree.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'leaves',
    title: 'Leaves',
    icon: Leaves,
    file: {
      url: '/sounds/leaves.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'fire',
    title: 'Bonfire',
    icon: Fire,
    file: {
      url: '/sounds/fire.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'cave',
    title: 'Cave Sounds',
    icon: Cave,
    file: {
      url: '/sounds/cave-drops.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'night',
    title: 'Night',
    icon: Night,
    file: {
      url: '/sounds/night.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'coffee',
    title: 'Coffee shop',
    icon: Coffee,
    file: {
      url: '/sounds/coffee.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'train',
    title: 'Train',
    icon: Train,
    file: {
      url: '/sounds/train.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'air-plane',
    title: 'Airplane',
    icon: AirPlane,
    file: {
      url: '/sounds/air-plane.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'washing-machine',
    title: 'Washing machine',
    icon: WashingMachine,
    file: {
      url: '/sounds/washing-machine.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'playground',
    title: 'Playground',
    icon: Playground,
    file: {
      url: '/sounds/playground.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'boat',
    title: 'Boat',
    icon: Boat,
    file: {
      url: '/sounds/boat.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'rain-on-tent',
    title: 'Rain on Tent',
    icon: RainOnTent,
    file: {
      url: '/sounds/rain-on-tent.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'brown-noise',
    title: 'Brown Noise',
    icon: BrownNoise,
    file: {
      url: '/sounds/brown-noise.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'white-noise',
    title: 'White Noise',
    icon: WhiteNoise,
    file: {
      url: '/sounds/white-noise.ogg',
      type: 'audio/ogg'
    }
  },
  {
    id: 'pink-noise',
    title: 'Pink Noise',
    icon: PinkNoise,
    file: {
      url: '/sounds/pink-noise.ogg',
      type: 'audio/ogg'
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
