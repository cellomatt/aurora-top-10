"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Questions",
      [
        {
          title: "What is the hottest new technology?",
          message: "I am doing a research project for school and looking for the hottest new technology.",
          expertiseId: 1,
          topicId: 1,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How do I solve a quadratic equation?",
          message: "I'm trying to learn how to solve these problems for my math class, but I need a detailed explanation.",
          expertiseId: 2,
          topicId: 1,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the most interesting vacation spot that you know of?",
          message: "Please send the weirdest and best ones you can think of!",
          expertiseId: 3,
          topicId: 10,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the most reliable car built in 2020?",
          message: "I don't want to spend more than $20,000 but I need a used car that won't require a lot of maintenance.",
          expertiseId: 2,
          topicId: 11,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How does the COVID-19 vaccine work?",
          message: "Is it possible to explain it in layman's terms? I'm really curious to understand more about it.",
          expertiseId: 3,
          topicId: 1,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What cheese pairs well with pinot noir?",
          message: "I am a beginner with both cheese and wine, so any opinions are welcome!",
          expertiseId: 2,
          topicId: 12,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Which team is most likely to win the Super Bowl?",
          message: "I have a bet with my friends and what to know what y'all think.",
          expertiseId: 3,
          topicId: 2,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Where can I find more information about COVID-19 travel restrictions?",
          message: "I'm trying to find out if I can go to Europe this summer.",
          expertiseId: 2,
          topicId: 3,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How do I calculate ROI for the money I spent on advertising?",
          message: "I want to make sure that I'm spending my money on the things that will help my business the most.",
          expertiseId: 3,
          topicId: 4,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What's your favorite workout routine for building core strength?",
          message: "I really want a six-pack and nothing I have tried so far has worked!",
          expertiseId: 2,
          topicId: 5,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What's one song that you think everyone should listen to?",
          message: "I want to compile a \"bucket list\" playlist of songs a person should hear before they die.",
          expertiseId: 1,
          topicId: 6,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the difference between an antagonist and a protagonist?",
          message: "My English teacher didn't explain it very well. Thanks for your help!",
          expertiseId: 2,
          topicId: 7,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the best thriller to come out in 2020?",
          message: "A lot of movie releases were delayed this year, but I love thrillers and want to make sure I have seen all the good ones.",
          expertiseId: 1,
          topicId: 8,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Is it true that Brad and Jennifer are getting back together?",
          message: "I need the latest gossip.",
          expertiseId: 1,
          topicId: 9,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Does anyone know where I can find a good sale on Christmas trees?",
          message: "I want to get a 7ft tall lit tree while they are on sale.",
          expertiseId: 1,
          topicId: 13,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What was Napoleon's favorite food?",
          message: "He was French, so I'm assuming he had really good taste in spite of his other less-savory qualities.",
          expertiseId: 3,
          topicId: 14,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the largest land animal?",
          message: "I want to know what the biggest, heaviest land animal is.",
          expertiseId: 2,
          topicId: 15,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Will quantum computers break cryptography?",
          message: "I am worried about my self-custodied crypto assets.",
          expertiseId: 3,
          topicId: 1,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is Brett Favre's childhood story?",
          message: "I'm a huge fan and can't find any reputable memoirs/bios.",
          expertiseId: 2,
          topicId: 2,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Should any current politicians be convicted of non-publicly known crimes?",
          message: "I am suspicious but am not inviting conspiracy theories.",
          expertiseId: 3,
          topicId: 3,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What resources should I use to help open up my first bank account?",
          message: "I am 17 and working my first job at the car wash.",
          expertiseId: 1,
          topicId: 4,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How to determine how much exercise I should get?",
          message: "I'm a generally healthy young male, and I'd like to do the minimal amount of work to maintain good health.",
          expertiseId: 3,
          topicId: 5,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Where do you draw the line between artist and performer / entertainer?",
          message: "For example, news anchors are entertainers but not necessarily artists...",
          expertiseId: 1,
          topicId: 6,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Has anyone read the book, Proof of Heaven?",
          message: "If so what did you think of it?",
          expertiseId: 1,
          topicId: 7,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Which of Jim Carrey's movies are most demonstrative of his unique talents?",
          message: "I'm trying to watch them.",
          expertiseId: 2,
          topicId: 8,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Best way to entertain yourself on a train?",
          message: "I'm taking an 8-hour train ride for the first time and don't want to be bored.",
          expertiseId: 1,
          topicId: 9,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Has anyone watched Stanley Tucci's CNN special series?",
          message: "It makes me want to travel to Italy!",
          expertiseId: 1,
          topicId: 10,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Does anyone own a Tesla and really like or dislike it?",
          message: "I want to drive an electric car, but I have not heard many first hand reviews.",
          expertiseId: 1,
          topicId: 11,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the most authentic Cajun restaurant in Philadelphia?",
          message: "I'm hungry and love cajun fries from MyBurger.",
          expertiseId: 2,
          topicId: 12,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the Mall of America like?",
          message: "Is it worth an interstate day-trip?",
          expertiseId: 1,
          topicId: 13,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Which historical figures most deserve to be stripped of their glory?",
          message: "I just learned Abe Lincoln was super racist, even though we all worship him for being anti-racist.",
          expertiseId: 1,
          topicId: 14,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Where to find wild magic mushrooms in North America?",
          message: "I am interested in their healing properties and don't want to grow or buy them illegally.",
          expertiseId: 3,
          topicId: 15,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },


        {
          title: "How big is the smallest living creature?",
          message: "Is it visible to the human eye?",
          expertiseId: 2,
          topicId: 1,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How much money does the average NBA player earn?",
          message: "Trying to figure out if this is a viable career option...",
          expertiseId: 2,
          topicId: 2,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the best non-partisan news source?",
          message: "I know that it can hard to find these days.",
          expertiseId: 3,
          topicId: 3,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Any F.I.R.E enthusiasts on here?",
          message: "I want to know your number 1 personal finance recommendation.",
          expertiseId: 2,
          topicId: 4,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Is the Keto diet bad for you?",
          message: "Trying to decide if I want to try it out.",
          expertiseId: 3,
          topicId: 5,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the most expensive painting ever sold at auction?",
          message: "Also how old was it at the time?",
          expertiseId: 2,
          topicId: 6,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is book burning?",
          message: "...and why would anyone do it?",
          expertiseId: 1,
          topicId: 7,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Is it true that Tom Cruise doesn't use stunt doubles?",
          message: "I can't believe that he flew a helicopter.",
          expertiseId: 2,
          topicId: 8,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How many average viewers does the Kardashian's show get?",
          message: "I'm so over them.",
          expertiseId: 1,
          topicId: 9,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Can anyone recommend a French-English dictionary?",
          message: "I am planning my trip for next fall and I want to practice/be prepared!",
          expertiseId: 1,
          topicId: 10,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the 0-60 time on the latest Porsche 911?",
          message: "I want to drive one so badly!",
          expertiseId: 2,
          topicId: 11,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Where can I find the best BBQ in Texas?",
          message: "Real answers only.",
          expertiseId: 2,
          topicId: 12,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What's the best website for online coupons?",
          message: "I'm trying to get some deals on electronics.",
          expertiseId: 1,
          topicId: 13,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What is the Balfour Declaration?",
          message: "I just recently heard that there is more background in the Israeli-Palestinian conflict than most people realize.",
          expertiseId: 3,
          topicId: 14,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Can anyone recommend a house plant that is hard to kill?",
          message: "I always struggle to keep my plants alive but I really want some green in my house!",
          expertiseId: 1,
          topicId: 15,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Would you recommend LeetCode or AlgoExpert for Data Structures and Algorithms?",
          message: "I'm starting to prepare for software development interviews and need to know which is better.",
          expertiseId: "2",
          topicId: 1,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Do you think it is harder to learn tennis or golf?",
          message: "I'm looking for a fun lifetime sport and want to know which one will take less time to learn.",
          expertiseId: "1",
          topicId: 2,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "If Congress had term limits how would it impact national politics?",
          message: "I've seen a number of states enact term limits for their legislature and I wonder how it would impact our national politics.",
          expertiseId: "3",
          topicId: 3,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What should my first big financial investment be?",
          message: "I just recently started making a decent amount of money and don't know what to do with it.",
          expertiseId: "1",
          topicId: 4,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Does intermittent fasting work for everyone?",
          message: "What body type is optimal for intermittent fasting? I've heard it's not for everyone.",
          expertiseId: "2",
          topicId: 5,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Why can't I find Garth Brooks music?",
          message: "I can't seem to find Garth Brooks music on any streaming services.",
          expertiseId: "1",
          topicId: 6,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What book should I read?",
          message: "I don't really like to read, but I know I should. I like action and comedy. What fiction book should I read first?",
          expertiseId: "1",
          topicId: 7,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What's the worst movie you've ever seen?",
          message: "I want to start a collection of the worst movies ever made. Send me your pick!",
          expertiseId: "1",
          topicId: 8,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Would you rather watch a broadway show or an orchestra?",
          message: "I'm tired of the movie theatre and want to get in to live performances. Which is better?",
          expertiseId: "1",
          topicId: 9,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Which resorts in Jamaica have clay tennis courts.",
          message: "I'm looking for a resort to visit in Jamaica that has clay tennis courts. Share your suggestions!",
          expertiseId: "3",
          topicId: 10,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Why is my tire light on?",
          message: "Why is my tire light on in my car? I've checked the tires and they look fine.",
          expertiseId: "2",
          topicId: 11,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "How do I know if I'm lactose intolerant?",
          message: "Is there a test to be sure if someone is lactose intolerant?",
          expertiseId: "2",
          topicId: 12,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Is it more environmentally friendly to buy clothes online or in store?",
          message: "Am I wrong to think it is more environmentally friendly to buy clothes online?",
          expertiseId: "2",
          topicId: 13,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "What was the least deadly major war in history?",
          message: "I know that there are a lot of statistics about the deadliest wars, but which one was the least deadly?",
          expertiseId: "2",
          topicId: 14,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Which plant is easier to take care of?",
          message: "Is an aloe plant or snake plant easier to take care of?",
          expertiseId: "1",
          topicId: 15,
          userId: Math.floor(Math.random()*50),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Questions", null, {});
  },
};
