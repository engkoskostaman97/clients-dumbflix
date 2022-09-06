const movies = [
  {
    id: 1,
    title: "The GodFather",
    img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    year: 1972,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
  {
    id: 2,
    title: "The Dark Knight",
    img: "https://upload.wikimedia.org/wikipedia/id/8/8a/Dark_Knight.jpg",
    year: 2008,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    year: 2019,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
    film: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    id: 4,
    title: "Joker",
    img: "data:image/jpeg;base64,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",
    year: 2019,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
  {
    id: 5,
    title: "Gisaengchung",
    img: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    year: 2019,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
  {
    id: 6,
    title: "Chernobly",
    img: "https://upload.wikimedia.org/wikipedia/id/a/a7/Chernobyl_2019_Miniseries.jpg",
    year: 2019,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
  {
    id: 7,
    title: "Serigala Terakhir",
    img: "https://upload.wikimedia.org/wikipedia/id/d/de/Poster-serigala-terakhir.jpg",
    year: 2009,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
  {
    id: 8,
    title: "Grave of the Fireflies",
    img: "https://flxt.tmsimg.com/assets/p158931_p_v8_aa.jpg",
    year: 1988,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
  {
    id: 9,
    title: "My Neighbor Totoro",
    img: "https://miro.medium.com/max/382/1*VDPfPNVFkM88D7i5Y2MSWA.png",
    year: 1988,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
  {
    id: 10,
    title: "A Quiet Place: Part II",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/A_Quiet_Place_Part_II.jpg/220px-A_Quiet_Place_Part_II.jpg",
    year: 2020,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
  {
    id: 11,
    title: "Frozen 2",
    img: "https://upload.wikimedia.org/wikipedia/id/thumb/6/6d/Frozen_II_%282019_poster%29.jpg/220px-Frozen_II_%282019_poster%29.jpg",
    year: 2019,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
  {
    id: 12,
    title: "Suicide Squad",
    img: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",
    year: 2016,
    category: "Movies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est congue, venenatis orci a, ultricies velit. Aenean ac tincidunt purus. In ut ornare neque. Vestibulum at scelerisque quam. Vivamus luctus porta tincidunt. Curabitur pulvinar lacus vel nisi aliquam, ac tempus leo ultricies. Nunc ultricies dapibus ante quis suscipit. Quisque quis dignissim nibh. Proin finibus, mi eget porta aliquam, odio nibh molestie sem, porttitor tristique lorem nisl sed sapien.",
  },
];

export default movies;