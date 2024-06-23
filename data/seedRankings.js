// seedSubscribers.js
"use strict";

/**
 * Listing 15.9 (p. 224)
 */
const mongoose = require("mongoose"),
  Ranking = require("../models/Ranking");
const Ranking = require("../models/Ranking");

// 데이터베이스 연결 설정
mongoose.connect("mongodb://127.0.0.1:27017/ut-nodejs", {
  useNewUrlParser: true,
});

mongoose.connection;

var rankings = [
  {
    name: "Yoo Jae-suk",
    email: "yjs@running.com",
    phoneNumber: "",
  },
  {
    name: "Haha",
    email: "hhh@running.com",
    phoneNumber: "010-????-????",
  },
  {
    name: "Jee Seok-jin",
    email: "bignose@running.com",
    phoneNumber: "010-1234-5678",
  },
  {
    name: "Kim Jong-kook",
    email: "gymjk@running.com",
    phoneNumber: "010-7777-7777",
  },
  {
    name: "Song Ji-hyo",
    email: "mungjh@running.com",
    phoneNumber: "",
  },
  {
    name: "Jeon So-min",
    email: "jsm@running.com",
    phoneNumber: "010-8282-8282",
  },
  {
    name: "Yang Se-chan",
    email: "ysc@running.com",
    phoneNumber: "010-8822-8822",
  },
  {
    name: "Lizzy",
    email: "lizzy@running.com",
    phoneNumber: "010-7272-7272",
  },
  {
    name: "Song Joong-ki",
    email: "sjk@running.com",
    phoneNumber: "010-9876-5432",
  },
  {
    name: "Gary",
    email: "gary@running.com",
    phoneNumber: "",
  },
  {
    name: "Lee Kwang-soo",
    email: "girin@running.com",
    phoneNumber: "010-7777-9999",
  },
];

var commands = [];

Ranking.deleteMany({})
  .exec()
  .then((result) => {
    console.log(`Deleted ${result.deletedCount} ranking records!`);
  });

setTimeout(() => {
  // 프라미스 생성을 위한 구독자 객체 루프
  rankings.forEach((s) => {
    commands.push(
      Ranking.create({
        name: s.name,
        email: s.email,
        phoneNumber: s.phoneNumber,
        newsletter: s.newsletter,
        profileImg: s.profileImg,
      }).then((ranking) => {
        console.log(`Created ranking: ${ranking.name}`);
      })
    );
  });

  console.log(`${commands.length} commands created!`);

  Promise.all(commands)
    .then((r) => {
      console.log(JSON.stringify(r));
      mongoose.connection.close();
      console.log("Connection closed!");
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}, 500);