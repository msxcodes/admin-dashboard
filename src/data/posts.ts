import { IPosts } from "@/interfaces/interface";

const posts: IPosts[] = [
  {
    id: "02",
    name: "Aisha Khan",
    body: "Hello, I'm Aisha Khan",
    date: "2024-05-02",
    username: "aishakhan",
    comments: [
      {
        id: "02",
        text: "Nice article!",
        iuser: "editor",
      },
    ],
  },
  {
    id: "03",
    name: "Rohit Verma",
    body: "Hey, this is Rohit Verma",
    date: "2024-05-03",
    username: "rohitverma",
    comments: [
      {
        id: "03",
        text: "Very informative",
        iuser: "guest",
      },
    ],
  },
  {
    id: "04",
    name: "Sneha Patel",
    body: "Hi, Sneha here",
    date: "2024-05-04",
    username: "snehapatel",
    comments: [
      {
        id: "04",
        text: "Loved it!",
        iuser: "member",
      },
    ],
  },
  {
    id: "05",
    name: "Vikram Mehta",
    body: "Hello, I'm Vikram Mehta",
    date: "2024-05-05",
    username: "vikrammehta",
    comments: [
      {
        id: "05",
        text: "Great insights!",
        iuser: "admin",
      },
    ],
  },
  {
    id: "06",
    name: "Anjali Sharma",
    body: "Hi, Anjali here",
    date: "2024-05-06",
    username: "anjalisharma",
    comments: [
      {
        id: "06",
        text: "Interesting post",
        iuser: "user",
      },
    ],
  },
  {
    id: "07",
    name: "Karan Singh",
    body: "Hey, Karan here",
    date: "2024-05-07",
    username: "karansingh",
    comments: [
      {
        id: "07",
        text: "Thanks for sharing!",
        iuser: "editor",
      },
    ],
  },
  {
    id: "08",
    name: "Priya Chawla",
    body: "Hi, this is Priya Chawla",
    date: "2024-05-08",
    username: "priyachawla",
    comments: [
      {
        id: "08",
        text: "Well written",
        iuser: "guest",
      },
    ],
  },
  {
    id: "09",
    name: "Rahul Desai",
    body: "Hello, I'm Rahul Desai",
    date: "2024-05-09",
    username: "rahuldesai",
    comments: [
      {
        id: "09",
        text: "Very helpful",
        iuser: "admin",
      },
    ],
  },
  {
    id: "10",
    name: "Nisha Kumar",
    body: "Hi, Nisha here",
    date: "2024-05-10",
    username: "nishakumar",
    comments: [
      {
        id: "10",
        text: "Good read",
        iuser: "member",
      },
    ],
  },
];

export default posts;
