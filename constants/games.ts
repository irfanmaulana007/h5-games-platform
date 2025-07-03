export interface Game {
  slug: string;
  name: string;
  title: string;
  isInternal: boolean;
  description: string;
  category: string;
  tags: string[];
  iconUrl: string;
  thumbnailUrl: string;
  playUrl: string;
  publishedTime: string;
  publisherName: string;
  active: boolean;
  staticContent: {
    backgroundUrl: string;
    logoUrl: string;
    bannerUrl: string;
  };
  media: {
    videos: string[];
    images: string[];
  };
  gameMetadata: {
    version: string;
    minPlayerCount: number;
    maxPlayerCount: number;
    releaseDate: string;
    supportedDevices: string[];
    genres: string[];
    ageRating: string;
  };
}

export const games: Game[] = [
  {
    slug: "fireboy-and-watergirl-the-forest-temple",
    name: "Fireboy and Watergirl",
    title: "Fireboy and Watergirl",
    isInternal: false,
    description: "Help Fireboy and Watergirl navigate through the Forest Temple.",
    category: "Puzzle",
    tags: ["Multiplayer", "Platformer", "Puzzle"],
    iconUrl:
      "https://play-lh.googleusercontent.com/6N_ON50BZiEAe-ll2lM92NrVrgp5I5Ha6VI0a4Usw7uPmgEjL6tgJR6jWYUkkYgx2LM",
    thumbnailUrl: "https://i.pinimg.com/736x/77/b4/1b/77b41baa0227b38de378a5874cc6ecde.jpg",
    playUrl:
      "https://html5.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75/?gd_sdk_referrer_url=https%3A%2F%2Fwww.crazygames.com%2Fgame%2Ffireboy-and-watergirl-the-forest-temple",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "krunker-io",
    name: "Krunker.io",
    title: "Krunker.io",
    isInternal: false,
    description: "A fast-paced multiplayer first-person shooter with various game modes.",
    category: "Shooter",
    tags: ["Multiplayer", "FPS", "Action"],
    iconUrl: "https://kevin.games/assets/images/games/krunker-io.jpg",
    thumbnailUrl:
      "https://images.crazygames.com/games/krunker-io/cover-1591336739727.png?auto=format,compress&q=75&cs=strip",
    playUrl: "https://krunker.io/",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "zombs-royale",
    name: "Zombs Royale",
    title: "Zombs Royale",
    isInternal: false,
    description:
      "A battle royale game with a top-down view where you fight to be the last one standing.",
    category: "Battle Royale",
    tags: ["Multiplayer"],
    iconUrl:
      "https://play-lh.googleusercontent.com/3j-AwNcIEZWjdzFdEePKwPSbv6FqmmPUFS8Q_fw8cY0r6hCRQYzMOjknQPdhKRlDZZCt",
    thumbnailUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/ZombsRoyale.io_Cover_Art.jpg",
    playUrl: "https://zombsroyale.io/",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "run-3",
    name: "Run 3",
    title: "Run 3",
    isInternal: false,
    description: "Navigate through space tunnels in this endless runner game.",
    category: "Platformer",
    tags: ["Arcade"],
    iconUrl:
      "https://play-lh.googleusercontent.com/zG13gMv0FOLDFZIL1IA1AtUUFmFqyIEa-vrMk6FHM8IgYMn_0ATLQ9WG4Lda6Ydm4R0=w526-h296-rw",
    thumbnailUrl:
      "https://cdn.now.gg/apps-content/com.nowgg.h5.pub501.app51626/game-tiles/run-3.jpg",
    playUrl: "https://player03.com/run/3/beta/",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "mini-royale-nations",
    name: "Mini Royale: Nations",
    title: "Mini Royale: Nations",
    isInternal: false,
    description:
      "A battle royale game with quick, action-packed rounds where players fight to be the last one standing.",
    category: "Shooting",
    tags: ["Multiplayer", "FPS"],
    iconUrl:
      "https://assets.polkastarter.gg/Icon_500_x_500_77b9d2c336/Icon_500_x_500_77b9d2c336.png",
    thumbnailUrl:
      "https://mir-s3-cdn-cf.behance.net/projects/404/81dcb3192154077.Y3JvcCwyMTYwLDE2ODksMCwxMA.jpg",
    playUrl: "https://miniroyale.io/",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "diep-io",
    name: "Diep.io",
    title: "Diep.io",
    isInternal: false,
    description: "Control a tank and battle other players while upgrading your tank.",
    category: "Shooter",
    tags: ["Multiplayer", "Strategy"],
    iconUrl:
      "https://play-lh.googleusercontent.com/6lO401fxwNTk919VwTKOdKGot82kf1WFBYGdhnVgDVsmkdK6Nv6d2ZDpmKBVO9CW2s8=w240-h480-rw",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/ibybDuHcLCF5x2L0FXfSwg9p7lhAVlKY-lZBRjAHtyJ9JqCqOR8wjeqK8_Tr3VFGP56cIpXrLARCB4Sd-nbUY7lDyg=w640-h400-e365-rj-sc0x00ffffff",
    playUrl: "https://diep.io/",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "poppy-playtime",
    name: "Poppy Playtime",
    title: "Poppy Playtime",
    isInternal: false,
    description:
      "A horror adventure game where you solve puzzles and uncover secrets in a toy factory.",
    category: "Horror",
    tags: ["Puzzle"],
    iconUrl:
      "https://www.kogstatic.com/gen_cache/18/ac/18ac8fac-8c4e-4632-a612-fe7338fe0b65_350x194.jpg",
    thumbnailUrl:
      "https://www.kogstatic.com/gen_cache/88/b5/88b52ad1-e870-44c1-a4d1-e9c77434f1e0_600x240.jpg",
    playUrl: "https://www.kogama.com/games/embed/9757135/",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "vex-3",
    name: "Vex 3",
    title: "Vex 3",
    isInternal: false,
    description:
      "Vex 3 is the third platform game in the Vex series. The game is full of twists and turns, with a labyrinth of deadly devices and traps to navigate on each level. Avoid the spinning blades, spikes, and traps to make your way to the next act!",
    category: "Action",
    tags: ["Action", "Platformer", "Casual"],
    iconUrl: "https://www.friv4school.io/thumbs/vex-3-html5-small.webp",
    thumbnailUrl:
      "https://images.crazygames.com/games/vex-3-xmas/cover_16x9-1700575609508.png?auto=format,compress&q=75&cs=strip",
    playUrl:
      "https://html5.gamedistribution.com/762c932b4db74c6da0c1d101b2da8be6/?gd_sdk_referrer_url=https%3A%2F%2Fwww.crazygames.com%2Fgame%2Fvex-3",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "war-brokers-io",
    name: "War Brokers.io",
    title: "War Brokers.io",
    isInternal: false,
    description: "A multiplayer FPS with different game modes and weapons.",
    category: "Shooter",
    tags: ["Multiplayer", "FPS", "Action"],
    iconUrl:
      "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=1200,fit=cover,f=png/6828b797-8a4a-4640-937e-117834b1f50d.jpg",
    thumbnailUrl:
      "https://static.wikia.nocookie.net/war-brokers/images/f/f0/WarBrokers_screenshot3_thumb_2017-09-20.jpg",
    playUrl: "https://www.crazygames.com/embed/war-brokers-io",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "betrayal-io",
    name: "Betrayal.io",
    title: "Betrayal.io",
    isInternal: false,
    description: "A social deduction game where players must figure out who the impostors are.",
    category: "Social Deduction",
    tags: ["Multiplayer", "Strategy"],
    iconUrl:
      "https://play-lh.googleusercontent.com/Kh7yW9hHtBpXmJDM2JUpOWeqJsK4XPZO4kT8LboI49RAYnV1hCABK1h76ZFowMi5PI4",
    thumbnailUrl: "https://i.ytimg.com/vi/Z7125-gG32o/maxresdefault.jpg",
    playUrl: "https://betrayal.io/",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "wormszone-io",
    name: "WormsZone.io",
    title: "WormsZone.io",
    isInternal: false,
    description: "Grow by consuming items and avoiding other players in this snake game.",
    category: "Arcade",
    tags: ["Multiplayer", "Casual"],
    iconUrl:
      "https://play-lh.googleusercontent.com/zzZGooAZam4PFxZwOOPz-hRxODyakOtGChSbZaPmOdT3Zuu-zpivvMb5nP9rjvCN_A",
    thumbnailUrl: "https://cdn.content.play123.com/game-images/worms-zone-a-slithery-snake_xl.jpg",
    playUrl: "https://www.crazygames.com/embed/worms-zone",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "super-star-car",
    name: "Super Star Car",
    title: "Super Star Car",
    isInternal: false,
    description:
      "Super Star Car is a Formula 1 racing game with a large selection of cars and many circuits. Start your career as a Formula 1 driver and race your way to the championship!",
    category: "Racing",
    tags: ["Casual"],
    iconUrl:
      "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/8376e3a632b640cd3e9ca53b9963000a.jpeg",
    thumbnailUrl: "https://cellgames.com/games/super-star-car.webp",
    playUrl: "https://www.crazygames.com/embed/super-star-car",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "stickman-archer-the-wizard-hero",
    name: "Stickman Archer: The Wizard Hero",
    title: "Stickman Archer: The Wizard Hero",
    isInternal: false,
    description:
      "Stickman Archer: The Wizard Hero is an action-packed archery game where you battle enemies using magic. Defeat waves of foes and magical beasts to earn superior wizard gear, and battle bosses that put your skills to the test.",
    category: "Shooting",
    tags: ["Casual", "Action"],
    iconUrl:
      "https://www.y9freegames.com/wp-content/uploads/thumbs/custom/S/Stickman-Archer-The-Wizard-Hero.jpg",
    thumbnailUrl:
      "https://images.crazygames.com/stickman-archer-the-wizard-hero/20211206164236/stickman-archer-the-wizard-hero-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    playUrl: "https://www.crazygames.com/embed/stickman-archer-the-wizard-hero",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "merge-the-numbers",
    name: "Merge the Numbers",
    title: "Merge the Numbers",
    isInternal: false,
    description:
      "Merge the Numbers is a logic game based on connecting numbers. Merge the numbers and reach the highest score!",
    category: "Puzzle",
    tags: ["Casual", "Puzzle"],
    iconUrl:
      "https://play-lh.googleusercontent.com/hC4PVJFhdtRSLxARxpgo2mI1ZUw3lmpiD2fZkiTFL2TeFF8WQ2el4wSrIsT_4iEJ7cI",
    thumbnailUrl:
      "https://images.crazygames.com/drop-merge-the-numbers/20220909075354/drop-merge-the-numbers-cover?auto=format,compress&q=75&cs=strip",
    playUrl: "https://www.crazygames.com/embed/merge-the-numbers",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "evowars-io",
    name: "EvoWars.io",
    title: "EvoWars.io",
    isInternal: false,
    description: "Battle other players while evolving your character and gaining new abilities.",
    category: "Survival",
    tags: ["Multiplayer", "Action"],
    iconUrl:
      "https://cdn-1.webcatalog.io/catalog/evowars-io/evowars-io-icon-filled-256.webp?v=1722607302957",
    thumbnailUrl:
      "https://images.crazygames.com/evowarsio_16x9/20240202031440/evowarsio_16x9-cover?auto=format,compress&q=75&cs=strip",
    playUrl: "https://www.crazygames.com/embed/evowarsio",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "crazy-car-stunts",
    name: "Crazy Car Stunts",
    title: "Crazy Car Stunts",
    isInternal: false,
    description:
      "Crazy Car Stunts is an amazing 3D car exploration game! You can drive across the city, find different cars, do incredible stunts, and enjoy the beautiful views. There are plenty of ramps that you can use to show your amazing stunt skills.",
    category: "Driving",
    tags: ["Casual"],
    iconUrl:
      "https://play-lh.googleusercontent.com/_y1EwBKPX6QWbP6vag30tVD4GU3DPL0I0_UKnI-rYV2Ogk47OlQby4jmAoap99TFIHn4",
    thumbnailUrl:
      "https://images.crazygames.com/crazy-car-stunts.png?auto=format,compress&q=75&cs=strip",
    playUrl: "https://www.crazygames.com/embed/crazy-car-stunts",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "dinosaurs-merge-master",
    name: "Dinosaurs Merge Master",
    title: "Dinosaurs Merge Master",
    isInternal: false,
    description:
      "Dinosaurs Merge Master is a casual game where you merge dinosaurs and warriors to build an army. Once you've merged your characters, test your might on the battlefield!",
    category: "Casual",
    tags: ["Casual"],
    iconUrl:
      "https://store-images.s-microsoft.com/image/apps.64135.14062131209571597.57f3df34-0256-4337-9f33-1aeaf355ca72.9410300d-1a32-4506-a4fd-79ca548b3d7d",
    thumbnailUrl:
      "https://images.crazygames.com/dinosaurs-merge-master/20221021103240/dinosaurs-merge-master-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    playUrl: "https://www.crazygames.com/embed/dinosaurs-merge-master",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "red-bounce-ball-5",
    name: "Red Bounce Ball 5",
    title: "Red Bounce Ball 5",
    isInternal: false,
    description:
      "Guide the cute red ball to collect the star coins while avoiding deadly obstacles and solve tricky puzzles along the way.",
    category: "Casual",
    tags: ["Casual"],
    iconUrl: "https://www1.minijuegosgratis.com/v3/games/thumbnails/228844_1.jpg",
    thumbnailUrl:
      "https://images.crazygames.com/games/red-bounce-ball-5/thumb-1559219759600.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    playUrl: "https://www.crazygames.com/embed/red-bounce-ball-5",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "endurance-a-top-down-sci-fi-shooter",
    name: "Endurance: A Top-Down Sci-Fi Shooter",
    title: "Endurance: A Top-Down Sci-Fi Shooter",
    isInternal: false,
    description:
      "Endurance: A Top-Down Sci-Fi Shooter is a thrilling pixel game set on a mysterious starship. As a researcher on the ship Endurance, you must survive the zombie-like crew, unravel the eerie story, and rescue sane members to build your team. Packed with humor, horror, and nods to classic sci-fi films, this action-packed adventure awaits.",
    category: "Shooter",
    tags: ["Action"],
    iconUrl:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1378390/capsule_616x353.jpg?t=1667293234",
    thumbnailUrl:
      "https://images.crazygames.com/endurance-a-top-down-sci-fi-shooter_16x9/20230913031956/endurance-a-top-down-sci-fi-shooter_16x9-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    playUrl: "https://www.crazygames.com/embed/endurance-a-top-down-sci-fi-shooter",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "pixel-warfare",
    name: "Pixel Warfare",
    title: "Pixel Warfare",
    isInternal: false,
    description: "A pixelated multiplayer first-person shooter with different weapons and modes.",
    category: "Shooter",
    tags: ["Multiplayer", "FPS", "Action"],
    iconUrl: "https://www4.minijuegosgratis.com/v3/games/thumbnails/247149_1.jpg",
    thumbnailUrl:
      "https://images.crazygames.com/pixel-warfare_16x9/20240625094224/pixel-warfare_16x9-cover?auto=format,compress&q=75&cs=strip",
    playUrl: "https://www.crazygames.com/embed/pixel-warfare",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "short-life",
    name: "Short Life",
    title: "Short Life",
    isInternal: false,
    description:
      "Navigate through levels and avoid traps while trying to keep your character alive.",
    category: "Platformer",
    tags: ["Casual", "Physics", "Action"],
    iconUrl:
      "https://play-lh.googleusercontent.com/Z5rZj9NCC47YHDsEKvJ-qOxzxPLy1bBqsn1Ta1H0maa26cQB7_fwVqfTwJBGqt3MJbo",
    thumbnailUrl: "https://i.ytimg.com/vi/_PnDDlTj5KI/maxresdefault.jpg",
    playUrl: "https://www.crazygames.com/embed/short-life",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "bloxorz",
    name: "Bloxorz",
    title: "Bloxorz",
    isInternal: false,
    description: "Solve puzzles by navigating a block through various obstacles and platforms.",
    category: "Puzzle",
    tags: ["Casual", "Strategy"],
    iconUrl:
      "https://play-lh.googleusercontent.com/FZ0qdNb8S1h4iJ4X0pBviJbH7odiOB06BRa-hmrjGfq0S5CAvs8suU-FZllXNVbUZgtm",
    thumbnailUrl: "https://www.coolmathgames.com/sites/default/files/Bloxorz_OG-logo.jpg",
    playUrl: "https://www.crazygames.com/embed/bloxorz",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "happy-wheels",
    name: "Happy Wheels",
    title: "Happy Wheels",
    isInternal: false,
    description:
      "Navigate through gruesome obstacle courses with different characters and vehicles.",
    category: "Platformer",
    tags: ["Casual", "Physics", "Action"],
    iconUrl: "https://cdn-www.bluestacks.com/bs-images/GameTile_com.fancyforce.happywheels.jpg",
    thumbnailUrl:
      "https://images.crazygames.com/games/happy-wheels/cover-1688034516340.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    playUrl: "https://www.crazygames.com/embed/happy-wheels",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "tap-tap-shots",
    name: "Tap Tap Shots",
    title: "Tap Tap Shots",
    isInternal: false,
    description:
      "A fun and addictive basketball shooting game with simple controls and challenges.",
    category: "Sports",
    tags: ["Casual", "Arcade"],
    iconUrl:
      "https://play-lh.googleusercontent.com/5jUVQn1-43ZVVICMJNuWePkyxGZ1BjKMlNTQC6oOMlqpzLioRKo8bjav9leRTseq-wU",
    thumbnailUrl:
      "https://images.crazygames.com/games/tap-tap-shots/cover-1655202548222.png?auto=format,compress&q=75&cs=strip",
    playUrl: "https://www.crazygames.com/embed/tap-tap-shots",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "clash-of-armour",
    name: "Clash of Armour",
    title: "Clash of Armour",
    isInternal: false,
    description: "A strategy game where you build and battle with customizable armor and weapons.",
    category: "Strategy",
    tags: ["Multiplayer", "Strategy", "Action"],
    iconUrl: "https://kevin.games/assets/cache_image/new/clash-of-armour_200x200_9bb.jpeg",
    thumbnailUrl:
      "https://images.crazygames.com/clash-of-armor/20220630154055/clash-of-armor-cover?auto=format,compress&q=75&cs=strip",
    playUrl: "https://www.crazygames.com/embed/clash-of-armor",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "kingdom-rush",
    name: "Kingdom Rush",
    title: "Kingdom Rush",
    isInternal: false,
    description: "A tower defense game where you protect your kingdom from hordes of enemies.",
    category: "Strategy",
    tags: ["Casual"],
    iconUrl:
      "https://files.ironhidegames.com/ironhidegames-www-upfiles/original/Games/133a5c30-312d-408f-9331-1d70943082ad.png",
    thumbnailUrl:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000024600/9efacf22e7ad921807a28bbd19a52dd933699695af61996cbcc6f0c396e79d1a",
    playUrl: "https://www.crazygames.com/embed/kingdom-rush",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "build-and-crush",
    name: "Build and Crush",
    title: "Build and Crush",
    isInternal: false,
    description:
      "A creative game where you can build structures or destroy others' creations in various ways.",
    category: "Action",
    tags: ["Casual"],
    iconUrl: "https://www1.minijuegosgratis.com/v3/games/thumbnails/231265_7_sq.jpg",
    thumbnailUrl:
      "https://images.crazygames.com/build-and-crush_16x9/20240508095251/build-and-crush_16x9-cover?auto=format,compress&q=75&cs=strip",
    playUrl: "https://www.crazygames.com/embed/build-and-crush",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "merge-fruits",
    name: "Merge Fruits",
    title: "Merge Fruits",
    isInternal: false,
    description:
      "Merge Fruits is a casual merging game that lets you drop fruits and combine identical ones to whip up new and exciting blends. It's a fruity blast for everyone. Think you've got what it takes to master the art of fruit fusion and cultivate the ultimate orchard? Dive in and find out!",
    category: "Casual",
    tags: ["Casual"],
    iconUrl: "https://img.gamedistribution.com/2dee9d404697435aa76111eb4015e1d5-512x512.jpeg",
    thumbnailUrl: "https://static.keygames.com/6/114826/100691/1200x630/merge-fruit.webp",
    playUrl: "https://www.crazygames.com/embed/merge-fruits",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 100,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Arcade", "Multiplayer"],
      ageRating: "Everyone",
    },
  },
  {
    slug: "tetris",
    name: "Tetris",
    title: "Tetris",
    isInternal: true,
    description:
      "Tetris is a classic puzzle game where you rotate and move falling blocks to create horizontal lines. Clear lines to score points and progress to higher levels. Challenge yourself to master the game!",
    category: "Puzzle",
    tags: ["Puzzle"],
    iconUrl: "https://raw.githubusercontent.com/callmeianwu/Enhanced-Tetris/main/samp-img.png",
    thumbnailUrl: "https://raw.githubusercontent.com/callmeianwu/Enhanced-Tetris/main/samp-img.png",
    playUrl: "http://localhost:3000/games/tetris/index.html",
    publishedTime: "2016-03-30T00:00:00Z",
    publisherName: "",
    active: true,
    staticContent: {
      backgroundUrl: "",
      logoUrl: "",
      bannerUrl: "",
    },
    media: {
      videos: [""],
      images: [""],
    },
    gameMetadata: {
      version: "1.0",
      minPlayerCount: 1,
      maxPlayerCount: 1,
      releaseDate: "2016-03-30T00:00:00Z",
      supportedDevices: ["Web", "Mobile"],
      genres: ["Puzzle", "Singleplayer"],
      ageRating: "Everyone",
    },
  },
];

export const getGameByName = (name: string): Game | undefined => {
  return games.find((game) => game.name === name);
};

export const getGameBySlug = (slug: string): Game | undefined => {
  return games.find((game) => game.slug === slug);
};

export const getGamesByGenre = (genre: string): Game[] => {
  return games.filter((game) => game.gameMetadata.genres.includes(genre));
};

export const getInternalGames = (): Game[] => {
  return games.filter((game) => game.isInternal);
};

export const getFeaturedGames = (count: number = 4): Game[] => {
  // Create a copy of the games array to avoid modifying the original
  const shuffled = [...games].sort(() => 0.5 - Math.random());
  // Return the specified number of random games
  return shuffled.slice(0, count);
};

export const getPopularGames = (count: number = 4): Game[] => {
  // Create a copy of the games array to avoid modifying the original
  const shuffled = [...games].sort(() => 0.5 - Math.random());
  // Return the specified number of random games
  return shuffled.slice(0, count);
};

export const getAllGenres = (): string[] => {
  const genreSet = new Set<string>();
  games.forEach((game) => {
    game.gameMetadata.genres.forEach((genre: string) => genreSet.add(genre));
  });
  return Array.from(genreSet);
};
