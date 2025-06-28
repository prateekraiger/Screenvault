import { Content } from "../types/Content";

export const movieData: Omit<Content, "id">[] = [
  {
    title: "Dune",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F8%2Fgracenote%2F8a557d3d98fe2d8969bfd17e5c21cadc.jpg",
    category: "Movie",
    rating: 8.1,
    review:
      "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
    isFavorite: false,
    genre: ["Science Fiction", "Action", "Drama"],
  },
  {
    title: "John Wick",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FtcmcJAXN2nUf1HgY1PL2H72PD6I.jpg",
    category: "Movie",
    rating: 7.8,
    review:
      "John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge.",
    isFavorite: false,
    genre: ["Action", "Thriller", "Crime"],
  },
  {
    title: "The Dark Knight",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F3%2Fgracenote%2F3c50cda300a43acf7a538c9aa9597791.jpg",
    category: "Movie",
    rating: 9.0,
    review:
      "Heath Ledger's Joker is legendary. Perfect superhero film that transcends the genre.",
    isFavorite: true,
    genre: ["Action", "Crime", "Drama"],
  },
  {
    title: "Black Panther",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F6%2Fgracenote%2F657d64e520ed594577de0a4fc6a4a1e4.jpg",
    category: "Movie",
    rating: 7.3,
    review:
      "Culturally significant superhero film with stunning visuals. Chadwick Boseman's legacy lives on.",
    isFavorite: true,
    genre: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    title: "How to Train Your Dragon",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F4%2Fgracenote%2F469fdc9108d81df3a9d303b54aa9ef43.jpg",
    category: "Movie",
    rating: 8.1,
    review:
      "As an ancient threat endangers both Vikings and dragons alike on the isle of Berk, the friendship between Hiccup, an inventive Viking, and Toothless, a Night Fury dragon, becomes the key to both species forging a new future together.",
    isFavorite: false,
    genre: ["Family", "Fantasy", "Comedy", "Drama"],
  },
  {
    title: "Fight Club",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F4%2Fgracenote%2F4d5260a099236bf88c292c7c8a277bfc.jpg",
    category: "Movie",
    rating: 8.8,
    review:
      "Mind-bending psychological thriller with social commentary. Brad Pitt and Edward Norton are phenomenal.",
    isFavorite: false,
    genre: ["Drama", "Thriller"],
  },
  {
    title: "Interstellar",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F3%2Fgracenote%2F3ca13d8c8155b6e3242b03df4f420484.jpg",
    category: "Movie",
    rating: 8.6,
    review:
      "Epic space odyssey with emotional core. The science and visuals are breathtaking.",
    isFavorite: true,
    genre: ["Sci-Fi", "Drama", "Adventure"],
  },

  {
    title: "Inception",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fb%2Fgracenote%2Fbcb81d59b292170f9fbae7c75cac2572.jpg",
    category: "Movie",
    rating: 8.8,
    review:
      "Complex dream-within-dream narrative. Nolan's masterpiece of practical effects and storytelling.",
    isFavorite: false,
    genre: ["Sci-Fi", "Action", "Thriller"],
  },

  {
    title: "Tenet",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fe%2Fgracenote%2Fe8c260df1f612494392ae154abfc9bdf.jpg",
    category: "Movie",
    rating: 7.4,
    review:
      "Ambitious time-inversion concept. Visually stunning but narratively complex to follow.",
    isFavorite: false,
    genre: ["Action", "Sci-Fi", "Thriller"],
  },
  {
    title: "The Wolf of Wall Street",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fc%2Fgracenote%2Fcb97c9dcf726db77e99a9881d29629ba.jpg",
    category: "Movie",
    rating: 8.4,
    review:
      "Jordan Belfort, portrayed by DiCaprio, finds himself a penny stockbroker in Long Island, eventually spending nearly two years behind bars. His refusal to assist in a securities fraud investigation from the 1990s leads to his incarceration. This case unveils deep-rooted corruption across Wall Street and corporate banks, with the mob also playing a part.",
    isFavorite: false,
    genre: ["Drama", "Crime", "Comedy", "Biography"],
  },
  {
    title: "Jumanji",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fb%2Fgracenote%2Fb30ef672ecc953a4bfd501839d352d02.jpg",
    category: "Movie",
    rating: 7.4,
    review:
      "Four teenagers in detention discover an old video game console with a game they've never heard of. When they decide to play, they are immediately sucked into the jungle world of Jumanji in the bodies of their avatars. They'll have to complete the adventure of their lives filled with fun, thrills and danger or be stuck in the game forever!",
    isFavorite: false,
    genre: ["Adventure", "Fantasy", "Comedy"],
  },
  {
    title: "Percy Jackson",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Ff%2Fgracenote%2Ff01cc1c65fd0da3d8f9b3eb55e96dfa4.jpg",
    category: "Movie",
    rating: 6.8,
    review:
      "In order to restore their dying safe haven, the son of Poseidon and his friends embark on a quest to the Sea of Monsters, to find the mythical Golden Fleece, all the while trying to stop an ancient evil from rising.",
    isFavorite: false,
    genre: ["Adventure", "Family", "Fantasy"],
  },

  {
    title: "The Terminator",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F4%2Fgracenote%2F4e26d12a9a0dbfdbaf6c349d5c8965c9.jpg",
    category: "Movie",
    rating: 8.0,
    review:
      "Classic sci-fi action that defined the genre. Schwarzenegger's iconic performance as a killing machine.",
    isFavorite: false,
    genre: ["Action", "Sci-Fi", "Thriller"],
  },
  {
    title: "Titanic",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fa%2Fplex%2Fa61efc7d-8a0e-453d-9774-8e1515682214.jpg",
    category: "Movie",
    rating: 7.9,
    review:
      "Epic romance against historical tragedy. DiCaprio and Winslet's chemistry carries this emotional journey.",
    isFavorite: true,
    genre: ["Romance", "Drama", "History"],
  },

  {
    title: "Blade Runner 2049",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F8%2Fplex%2F8f70f460-09f3-4736-831b-b52adc959016.jpg",
    category: "Movie",
    rating: 8.1,
    review:
      "Philosophical sci-fi noir about what makes us human. Visually stunning with deep themes.",
    isFavorite: false,
    genre: ["Sci-Fi", "Thriller", "Neo-Noir"],
  },
  {
    title: "Mad Max: Fury Road",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    category: "Movie",
    rating: 8.1,
    review:
      "Non-stop action masterpiece. Charlize Theron and Tom Hardy deliver in this post-apocalyptic thrill ride.",
    isFavorite: false,
    genre: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    title: "The Accountant",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F8%2Fplex%2F87b772cd-1a24-4473-8c81-55b11cb8cef3.jpg",
    category: "Movie",
    rating: 7.3,
    review:
      "Ben Affleck plays an autistic accountant with killer skills. Unique action thriller with heart.",
    isFavorite: false,
    genre: ["Action", "Crime", "Drama"],
  },
  {
    title: "The Amateur",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F7%2Fgracenote%2F790ad1144455fb7219fd0a916d9be718.jpg",
    category: "Movie",
    rating: 7.1,
    review:
      "Solid thriller about revenge and justice. Engaging plot with good character development.",
    isFavorite: false,
    genre: ["Thriller", "Drama", "Action"],
  },
  {
    title: "A Working Man",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F9%2Fplex%2F9452c70f-34b4-4fda-a047-90ef87f0e810.jpg",
    category: "Movie",
    rating: 7.0,
    review:
      "Grounded drama about blue-collar struggles. Authentic performances and relatable themes.",
    isFavorite: false,
    genre: ["Drama", "Family"],
  },
  {
    title: "Oppenheimer",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    category: "Movie",
    rating: 8.3,
    review:
      "Nolan's biographical masterpiece. Cillian Murphy delivers a career-defining performance.",
    isFavorite: false,
    genre: ["Biography", "Drama", "History"],
  },
  {
    title: "The Incredibles",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F6%2Fgracenote%2F68d243d0a22efbe95f4d1c590f4de391.jpg",
    category: "Movie",
    rating: 8.0,
    review:
      "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
    isFavorite: false,
    genre: ["Action", "Adventure", "Animation", "Family"],
  },
  {
    title: "Léon: The Professional",
    posterUrl:
      "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F5%2Fgracenote%2F54a2c9a7a012d87a332e9c1efa61c6d6.jpg",
    category: "Movie",
    rating: 8.5,
    review:
      "Touching story of an unlikely mentor-student relationship. Jean Reno and Natalie Portman are excellent.",
    isFavorite: false,
    genre: ["Action", "Crime", "Drama"],
  },
];
