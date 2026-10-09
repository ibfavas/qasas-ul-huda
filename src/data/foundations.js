/* Foundations registry for the single foundations page.
   Articles: iman, pillars, quran.
   Verse panels: Uthmani Arabic + Saheeh International, pulled from the
   Quran.com API. Hadith wordings verified verbatim on sunnah.com. */
export const foundations = {
  "iman": {
    "group": "Belief and Practice",
    "hero": {
      "plaque": "Foundations",
      "title": "The Six Articles of Faith",
      "sub": "What a Muslim believes: the six convictions named by the Prophet ﷺ when Jibreel (AS) asked him, “Inform me about iman.”",
      "img": "../assets/foundations-iman.webp",
      "imgAlt": "A desert of dunes under a star-filled night sky with a crescent moon",
      "caption": "The night sky over silent dunes, a reminder of the unseen that the six articles affirm."
    },
    "introHtml": "One day, as the Prophet ﷺ sat with his companions, a man appeared in pure white, no sign of travel on him, yet no one knew him. He asked about Islam, then about iman, then about ihsan, and confirmed every answer: “You have told the truth.” When he left, the Prophet ﷺ said: “He was Jibreel (AS). He came to you in order to instruct you in matters of religion.” His answer about iman named six articles, the six beliefs every Muslim holds, and the ground every story on this site stands on.",
    "railLabels": [
      "Belief in Allah",
      "Belief in His Angels",
      "Belief in His Books",
      "Belief in His Messengers",
      "Belief in the Last Day",
      "Belief in Divine Decree"
    ],
    "sections": [
      {
        "id": "article-1",
        "ariaLabel": "Article 1: Belief in Allah",
        "title": "Belief in Allah",
        "blocks": [
          {
            "t": "hadith",
            "text": "&ldquo;He (the inquirer) said: Inform me about Iman (faith). He (the Holy Prophet) replied: That you affirm your faith in Allah, in His angels, in His Books, in His Apostles, in the Day of Judgment, and you affirm your faith in the Divine Decree about good and evil. He (the inquirer) said: You have told the truth.&rdquo;",
            "narrator": "Narrated &lsquo;Umar ibn al-Khattab",
            "href": "https://sunnah.com/muslim:8a",
            "label": "Sahih Muslim 8a &middot; sunnah.com"
          },
          {
            "t": "kicker",
            "html": "Article 1 of 6"
          },
          {
            "t": "h2",
            "html": "Belief in Allah"
          },
          {
            "t": "p",
            "cls": "dropcap",
            "html": "The first article is the root of all the rest: that Allah is One, without partner and without equal, the Eternal Refuge who neither begets nor was born. Every prophet’s call began with the same words, “Worship Allah; you have no deity other than Him,” and every story here returns to them."
          },
          {
            "t": "verse",
            "ref": "Quran 112:1-4",
            "arabic": "قُلْ هُوَ ٱللَّهُ أَحَدٌ ٱللَّهُ ٱلصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
            "translation": "Say, \"He is Allāh, [who is] One, Allāh, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.\"",
            "citation": "Surah 112 &middot; Verses 1-4 &middot; Saheeh International"
          }
        ]
      },
      {
        "id": "article-2",
        "ariaLabel": "Article 2: Belief in His Angels",
        "title": "Belief in His Angels",
        "blocks": [
          {
            "t": "kicker",
            "html": "Article 2 of 6"
          },
          {
            "t": "h2",
            "html": "Belief in His Angels"
          },
          {
            "t": "p",
            "html": "The Quran names them in the believers’ creed alongside Allah Himself: His angels, His books, His messengers. Among the angels is Jibreel (AS), the one who came in the form of a man to teach the companions their religion, and whose question gave us these six articles."
          },
          {
            "t": "verse",
            "ref": "Quran 2:285",
            "arabic": "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَـٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ",
            "translation": "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allāh and His angels and His books and His messengers, [saying], \"We make no distinction between any of His messengers.\" And they say, \"We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination.\"",
            "citation": "Surah 2 &middot; Verse 285 &middot; Saheeh International"
          }
        ]
      },
      {
        "id": "article-3",
        "ariaLabel": "Article 3: Belief in His Books",
        "title": "Belief in His Books",
        "blocks": [
          {
            "t": "kicker",
            "html": "Article 3 of 6"
          },
          {
            "t": "h2",
            "html": "Belief in His Books"
          },
          {
            "t": "p",
            "html": "Allah sent guidance down in Books: the Quran to Muhammad ﷺ, and scriptures before it to the messengers of earlier nations. Belief in the Books means affirming what was revealed to him and what was revealed before him: every scripture Allah sent down, and the Hereafter of which they all warn."
          },
          {
            "t": "verse",
            "ref": "Quran 2:4",
            "arabic": "وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْـَٔاخِرَةِ هُمْ يُوقِنُونَ",
            "translation": "And who believe in what has been revealed to you, [O Muḥammad], and what was revealed before you, and of the Hereafter they are certain [in faith].",
            "citation": "Surah 2 &middot; Verse 4 &middot; Saheeh International"
          }
        ]
      },
      {
        "id": "article-4",
        "ariaLabel": "Article 4: Belief in His Messengers",
        "title": "Belief in His Messengers",
        "blocks": [
          {
            "t": "kicker",
            "html": "Article 4 of 6"
          },
          {
            "t": "h2",
            "html": "Belief in His Messengers"
          },
          {
            "t": "p",
            "html": "Belief in the messengers means affirming all of them, Ibrahim (AS), Ismail (AS), Ishaq (AS), Yaqub (AS), Musa (AS), Isa (AS), and the prophets, making no distinction between any of them, and submitting to Allah as they taught."
          },
          {
            "t": "verse",
            "ref": "Quran 2:136",
            "arabic": "قُولُوٓا۟ ءَامَنَّا بِٱللَّهِ وَمَآ أُنزِلَ إِلَيْنَا وَمَآ أُنزِلَ إِلَىٰٓ إِبْرَٰهِـۧمَ وَإِسْمَـٰعِيلَ وَإِسْحَـٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطِ وَمَآ أُوتِىَ مُوسَىٰ وَعِيسَىٰ وَمَآ أُوتِىَ ٱلنَّبِيُّونَ مِن رَّبِّهِمْ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّنْهُمْ وَنَحْنُ لَهُۥ مُسْلِمُونَ",
            "translation": "Say, [O believers], \"We have believed in Allāh and what has been revealed to us and what has been revealed to Abraham and Ishmael and Isaac and Jacob and the Descendants [al-Asbāṭ] and what was given to Moses and Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [in submission] to Him.\"",
            "citation": "Surah 2 &middot; Verse 136 &middot; Saheeh International"
          }
        ]
      },
      {
        "id": "article-5",
        "ariaLabel": "Article 5: Belief in the Last Day",
        "title": "Belief in the Last Day",
        "blocks": [
          {
            "t": "kicker",
            "html": "Article 5 of 6"
          },
          {
            "t": "h2",
            "html": "Belief in the Last Day"
          },
          {
            "t": "p",
            "html": "This world is not the end. Belief in the Last Day means affirming the resurrection, the judgment, and the recompense: that every soul will be repaid in full for what it did. The Quran ties this belief to righteousness itself: true piety is not a direction you face, but what you believe and what you do."
          },
          {
            "t": "verse",
            "ref": "Quran 2:177",
            "arabic": "۞ لَّيْسَ ٱلْبِرَّ أَن تُوَلُّوا۟ وُجُوهَكُمْ قِبَلَ ٱلْمَشْرِقِ وَٱلْمَغْرِبِ وَلَـٰكِنَّ ٱلْبِرَّ مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْـَٔاخِرِ وَٱلْمَلَـٰٓئِكَةِ وَٱلْكِتَـٰبِ وَٱلنَّبِيِّـۧنَ وَءَاتَى ٱلْمَالَ عَلَىٰ حُبِّهِۦ ذَوِى ٱلْقُرْبَىٰ وَٱلْيَتَـٰمَىٰ وَٱلْمَسَـٰكِينَ وَٱبْنَ ٱلسَّبِيلِ وَٱلسَّآئِلِينَ وَفِى ٱلرِّقَابِ وَأَقَامَ ٱلصَّلَوٰةَ وَءَاتَى ٱلزَّكَوٰةَ وَٱلْمُوفُونَ بِعَهْدِهِمْ إِذَا عَـٰهَدُوا۟ ۖ وَٱلصَّـٰبِرِينَ فِى ٱلْبَأْسَآءِ وَٱلضَّرَّآءِ وَحِينَ ٱلْبَأْسِ ۗ أُو۟لَـٰٓئِكَ ٱلَّذِينَ صَدَقُوا۟ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُتَّقُونَ",
            "translation": "Righteousness is not that you turn your faces toward the east or the west, but [true] righteousness is [in] one who believes in Allāh, the Last Day, the angels, the Book, and the prophets and gives wealth, in spite of love for it, to relatives, orphans, the needy, the traveler, those who ask [for help], and for freeing slaves; [and who] establishes prayer and gives zakāh; [those who] fulfill their promise when they promise; and [those who] are patient in poverty and hardship and during battle. Those are the ones who have been true, and it is those who are the righteous.",
            "citation": "Surah 2 &middot; Verse 177 &middot; Saheeh International"
          }
        ]
      },
      {
        "id": "article-6",
        "ariaLabel": "Article 6: Belief in Divine Decree",
        "title": "Belief in Divine Decree",
        "blocks": [
          {
            "t": "kicker",
            "html": "Article 6 of 6"
          },
          {
            "t": "h2",
            "html": "Belief in Divine Decree"
          },
          {
            "t": "p",
            "html": "Nothing happens outside Allah’s knowledge and will. Belief in qadar means affirming that He created all things with measure, the good and the painful alike. Ibn ‘Umar, who reported this hadith, swore that Allah would not accept a mountain of gold spent in charity from one who denies the Decree."
          },
          {
            "t": "verse",
            "ref": "Quran 54:49",
            "arabic": "إِنَّا كُلَّ شَىْءٍ خَلَقْنَـٰهُ بِقَدَرٍ",
            "translation": "Indeed, all things We created with predestination.",
            "citation": "Surah 54 &middot; Verse 49 &middot; Saheeh International"
          }
        ]
      }
    ],
    "prevNext": [
      {
        "label": "Next article",
        "title": "The Five Pillars of Islam",
        "href": "?p=pillars",
        "arrow": "next"
      }
    ]
  },
  "pillars": {
    "group": "Belief and Practice",
    "hero": {
      "plaque": "Foundations",
      "title": "The Five Pillars of Islam",
      "sub": "What a Muslim does: the five practices upon which Islam is built, named by the Prophet ﷺ in a single hadith.",
      "img": "../assets/foundations-pillars.webp",
      "imgAlt": "Five ancient stone pillars standing in a desert valley at dawn",
      "caption": "A symbolic image, five stone pillars at dawn, recalling the Prophet&rsquo;s ﷺ words: &ldquo;Islam is built upon five.&rdquo;"
    },
    "introHtml": "Iman is what the heart holds; Islam is what the limbs carry out. When the Prophet ﷺ was asked what Islam is built upon, he named five things: a testimony, a prayer, a charity, a fast, and a pilgrimage. Five pillars, and the whole religion stands on them.",
    "railLabels": [
      "The Testimony",
      "The Prayer",
      "The Charity",
      "The Fast",
      "The Pilgrimage"
    ],
    "sections": [
      {
        "id": "pillar-1",
        "ariaLabel": "Pillar 1: The Testimony",
        "title": "The Testimony: Shahada",
        "blocks": [
          {
            "t": "hadith",
            "text": "&ldquo;Allah&rsquo;s Messenger (ﷺ) said: Islam is based on (the following) five (principles): 1. To testify that none has the right to be worshipped but Allah and Muhammad is Allah&rsquo;s Messenger (ﷺ). 2. To offer the (compulsory congregational) prayers dutifully and perfectly. 3. To pay Zakat (i.e. obligatory charity). 4. To perform Hajj. (i.e. Pilgrimage to Mecca) 5. To observe fast during the month of Ramadan.&rdquo;",
            "narrator": "Narrated Ibn &lsquo;Umar",
            "href": "https://sunnah.com/bukhari:8",
            "label": "Sahih al-Bukhari 8 &middot; sunnah.com"
          },
          {
            "t": "kicker",
            "html": "Pillar 1 of 5"
          },
          {
            "t": "h2",
            "html": "The Testimony: Shahada"
          },
          {
            "t": "p",
            "cls": "dropcap",
            "html": "“None has the right to be worshipped but Allah, and Muhammad is the Messenger of Allah.” The shahada is the door into Islam and its constant renewal, spoken with the tongue, believed in the heart, lived by the limbs. Allah Himself testifies to it, and so do the angels and those of knowledge."
          },
          {
            "t": "p",
            "cls": "arabic",
            "html": "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ"
          },
          {
            "t": "verse",
            "ref": "Quran 3:18",
            "arabic": "شَهِدَ ٱللَّهُ أَنَّهُۥ لَآ إِلَـٰهَ إِلَّا هُوَ وَٱلْمَلَـٰٓئِكَةُ وَأُو۟لُوا۟ ٱلْعِلْمِ قَآئِمًۢا بِٱلْقِسْطِ ۚ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
            "translation": "Allāh witnesses that there is no deity except Him, and [so do] the angels and those of knowledge - [that He is] maintaining [creation] in justice. There is no deity except Him, the Exalted in Might, the Wise.",
            "citation": "Surah 3 &middot; Verse 18 &middot; Saheeh International"
          }
        ]
      },
      {
        "id": "pillar-2",
        "ariaLabel": "Pillar 2: The Prayer",
        "title": "The Prayer: Salah",
        "blocks": [
          {
            "t": "kicker",
            "html": "Pillar 2 of 5"
          },
          {
            "t": "h2",
            "html": "The Prayer: Salah"
          },
          {
            "t": "p",
            "html": "The prayer is the daily covenant between the servant and his Lord, established at its times, in congregation, with bowing and prostration. Wherever the Quran describes the believers, it joins the prayer to the charity: establish prayer, give zakah, and bow with those who bow."
          },
          {
            "t": "verse",
            "ref": "Quran 2:43",
            "arabic": "وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ وَٱرْكَعُوا۟ مَعَ ٱلرَّٰكِعِينَ",
            "translation": "And establish prayer and give zakāh and bow with those who bow [in worship and obedience].",
            "citation": "Surah 2 &middot; Verse 43 &middot; Saheeh International"
          }
        ]
      },
      {
        "id": "pillar-3",
        "ariaLabel": "Pillar 3: The Charity",
        "title": "The Charity: Zakah",
        "blocks": [
          {
            "t": "kicker",
            "html": "Pillar 3 of 5"
          },
          {
            "t": "h2",
            "html": "The Charity: Zakah"
          },
          {
            "t": "p",
            "html": "Zakah is the obligatory charity taken from wealth, by which, the verse says, Allah purifies the giver and causes him increase. The Prophet ﷺ was commanded: take from their wealth a charity by which you purify them."
          },
          {
            "t": "verse",
            "ref": "Quran 9:103",
            "arabic": "خُذْ مِنْ أَمْوَٰلِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا وَصَلِّ عَلَيْهِمْ ۖ إِنَّ صَلَوٰتَكَ سَكَنٌ لَّهُمْ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
            "translation": "Take, [O Muḥammad], from their wealth a charity by which you purify them and cause them increase, and invoke [Allāh's blessings] upon them. Indeed, your invocations are reassurance for them. And Allāh is Hearing and Knowing.",
            "citation": "Surah 9 &middot; Verse 103 &middot; Saheeh International"
          }
        ]
      },
      {
        "id": "pillar-4",
        "ariaLabel": "Pillar 4: The Fast",
        "title": "The Fast: Sawm",
        "blocks": [
          {
            "t": "kicker",
            "html": "Pillar 4 of 5"
          },
          {
            "t": "h2",
            "html": "The Fast: Sawm"
          },
          {
            "t": "p",
            "html": "In Ramadan the Muslim fasts as those before him fasted, a decree written upon the believers, not a new burden. Its purpose is named in the verse itself, in a single phrase: <i>la‘allakum tattaqun</i>, that you may become righteous."
          },
          {
            "t": "verse",
            "ref": "Quran 2:183",
            "arabic": "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
            "translation": "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous -",
            "citation": "Surah 2 &middot; Verse 183 &middot; Saheeh International"
          }
        ]
      },
      {
        "id": "pillar-5",
        "ariaLabel": "Pillar 5: The Pilgrimage",
        "title": "The Pilgrimage: Hajj",
        "blocks": [
          {
            "t": "kicker",
            "html": "Pillar 5 of 5"
          },
          {
            "t": "h2",
            "html": "The Pilgrimage: Hajj"
          },
          {
            "t": "p",
            "html": "The pilgrimage to the Sacred House in Makkah is due to Allah from whoever is able to find a way, the journey to where Ibrahim (AS) once stood, and safety for whoever enters it."
          },
          {
            "t": "verse",
            "ref": "Quran 3:97",
            "arabic": "فِيهِ ءَايَـٰتٌۢ بَيِّنَـٰتٌ مَّقَامُ إِبْرَٰهِيمَ ۖ وَمَن دَخَلَهُۥ كَانَ ءَامِنًا ۗ وَلِلَّهِ عَلَى ٱلنَّاسِ حِجُّ ٱلْبَيْتِ مَنِ ٱسْتَطَاعَ إِلَيْهِ سَبِيلًا ۚ وَمَن كَفَرَ فَإِنَّ ٱللَّهَ غَنِىٌّ عَنِ ٱلْعَـٰلَمِينَ",
            "translation": "In it are clear signs [such as] the standing place of Ibrahim. And whoever enters it [i.e., the Ḥaram] shall be safe. And [due] to Allāh from the people is a pilgrimage to the House - for whoever is able to find thereto a way. But whoever disbelieves [i.e., refuses] - then indeed, Allāh is free from need of the worlds.",
            "citation": "Surah 3 &middot; Verse 97 &middot; Saheeh International"
          }
        ]
      }
    ],
    "prevNext": [
      {
        "label": "Previous article",
        "title": "The Six Articles of Faith",
        "href": "?p=iman",
        "arrow": "back"
      },
      {
        "label": "Next article",
        "title": "The Night the Quran Began",
        "href": "?p=night",
        "arrow": "next"
      }
    ]
  },
  "night": {
  "group": "The Quran",
  "hero": {
    "caption": "A symbolic image: the cave above the sleeping valley in the last stillness before dawn.",
    "img": "../assets/foundations-hira.webp",
    "imgAlt": "Persian miniature painting of a rocky cave above a valley town under a star filled night sky",
    "plaque": "Foundations",
    "sub": "How the revelation began: one word in a cave, a night of decree, and a Book sent down across twenty-three years.",
    "title": "The Night the Quran Began"
  },
  "introHtml": "Before there was a book on a shelf, there was a man alone in a cave above Makkah, and a single command that would change the world: Read. Everything in the Standardization article happened because of what happened that night, so the story of the Quran properly begins here, in the dark, with a heart beating hard enough to tremble.",
  "prevNext": [
    {
      "arrow": "back",
      "href": "?p=pillars",
      "label": "Previous article",
      "title": "The Five Pillars of Islam"
    },
    {
      "arrow": "next",
      "href": "?p=quran",
      "label": "Next article",
      "title": "The Standardization of the Quran"
    }
  ],
  "railLabels": [
    "In the Cave",
    "Read",
    "The Night of Decree",
    "Sent Down Over Years",
    "Makkah and Madinah"
  ],
  "sections": [
    {
      "ariaLabel": "In the Cave",
      "blocks": [
        {
          "html": "Hira, before the dawn",
          "t": "kicker"
        },
        {
          "html": "In the Cave",
          "t": "h2"
        },
        {
          "cls": "dropcap",
          "html": "Aisha (RA), the Mother of the Believers, tells us how it started. First came true dreams, arriving as clear as daylight. Then the Prophet ﷺ grew to love seclusion, withdrawing to the cave of Hira for nights of worship, carrying provisions, returning to Khadija (RA), and going back again. It was in that rhythm of silence that the Truth came to him.",
          "t": "p"
        },
        {
          "href": "https://sunnah.com/bukhari:3",
          "label": "Sahih al-Bukhari 3 · sunnah.com",
          "narrator": "Narrated Aisha",
          "t": "hadith",
          "text": "“The commencement of the Divine Inspiration to Allah's Apostle was in the form of good dreams which came true like bright day light, and then the love of seclusion was bestowed upon him. He used to go in seclusion in the cave of Hira where he used to worship (Allah alone) continuously for many days.”"
        },
        {
          "html": "Then the angel came, and with him the most famous first word in the history of the Book.",
          "t": "p"
        }
      ],
      "id": "in-the-cave",
      "title": "In the Cave"
    },
    {
      "ariaLabel": "Read",
      "blocks": [
        {
          "html": "The first word",
          "t": "kicker"
        },
        {
          "html": "Read",
          "t": "h2"
        },
        {
          "html": "He was commanded to read, and he answered with the truth about himself: I do not know how to read. The angel pressed him, released him, commanded him again, three times, until the words came. The first revelation of the Quran was not a law, not a threat, not a story. It was a command to read, in the name of the Lord who created man from a clinging substance, and who taught by the pen what man did not know.",
          "t": "p"
        },
        {
          "href": "https://sunnah.com/bukhari:3",
          "label": "Sahih al-Bukhari 3 · sunnah.com",
          "narrator": "Narrated Aisha",
          "t": "hadith",
          "text": "“The angel came to him and asked him to read. The Prophet replied, ‘I do not know how to read.’ ... Thereupon he caught me for the third time and pressed me, and then released me, and said, ‘Read in the name of your Lord, who has created (all that exists), has created man from a clot. Read! And your Lord is the Most Generous.’”"
        },
        {
          "arabic": "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ ٱقْرَأْ وَرَبُّكَ ٱلْأَكْرَمُ ٱلَّذِى عَلَّمَ بِٱلْقَلَمِ عَلَّمَ ٱلْإِنسَـٰنَ مَا لَمْ يَعْلَمْ",
          "citation": "Surah 96 · Verses 1-5 · Saheeh International",
          "ref": "Quran 96:1-5",
          "t": "verse",
          "translation": "Recite in the name of your Lord who created Created man from a clinging substance. Recite, and your Lord is the most Generous - Who taught by the pen Taught man that which he knew not."
        },
        {
          "html": "He returned home with his heart beating severely, asking to be covered, and Khadija (RA) answered him with the words that have comforted believers ever since: Never. By Allah, Allah will never disgrace you. Her cousin Waraqah, who knew the earlier scriptures, recognised what had come to him. The revelation had begun.",
          "t": "p"
        }
      ],
      "id": "read",
      "title": "Read"
    },
    {
      "ariaLabel": "The Night of Decree",
      "blocks": [
        {
          "html": "Laylat al-Qadr",
          "t": "kicker"
        },
        {
          "html": "The Night of Decree",
          "t": "h2"
        },
        {
          "html": "The Quran names the night of its descent. It was sent down in the Night of Decree, the night hidden in the last days of Ramadan, the month in which, the Quran says, it was revealed as guidance for mankind. One night, better than a thousand months, and the believer still searches for it every year in the dark, the way it first came in the dark.",
          "t": "p"
        },
        {
          "arabic": "إِنَّآ أَنزَلْنَـٰهُ فِى لَيْلَةِ ٱلْقَدْرِ",
          "citation": "Surah 97 · Verse 1 · Saheeh International",
          "ref": "Quran 97:1",
          "t": "verse",
          "translation": "Indeed, We sent it [i.e., the Qur’ān] down during the Night of Decree."
        }
      ],
      "id": "night-of-decree",
      "title": "The Night of Decree"
    },
    {
      "ariaLabel": "Sent Down Over Years",
      "blocks": [
        {
          "html": "Piece by piece, heart by heart",
          "t": "kicker"
        },
        {
          "html": "Sent Down Over Years",
          "t": "h2"
        },
        {
          "html": "The Quran did not arrive as a finished volume dropped in a single night and then explained for twenty years. After the first verses, it came down piece by piece across the whole prophetic life: answering events, correcting mistakes, comforting the grieving, ruling on questions as they arose. The disbelievers themselves asked why it had not come all at once, and the Quran records both their question and its answer.",
          "t": "p"
        },
        {
          "arabic": "وَقَالَ ٱلَّذِينَ كَفَرُوا۟ لَوْلَا نُزِّلَ عَلَيْهِ ٱلْقُرْءَانُ جُمْلَةً وَٰحِدَةً ۚ كَذَٰلِكَ لِنُثَبِّتَ بِهِۦ فُؤَادَكَ ۖ وَرَتَّلْنَـٰهُ تَرْتِيلًا",
          "citation": "Surah 25 · Verse 32 · Saheeh International",
          "ref": "Quran 25:32",
          "t": "verse",
          "translation": "And those who disbelieve say, \"Why was the Qur’ān not revealed to him all at once?\" Thus [it is] that We may strengthen thereby your heart. And We have spaced it distinctly."
        },
        {
          "arabic": "وَقُرْءَانًا فَرَقْنَـٰهُ لِتَقْرَأَهُۥ عَلَى ٱلنَّاسِ عَلَىٰ مُكْثٍ وَنَزَّلْنَـٰهُ تَنزِيلًا",
          "citation": "Surah 17 · Verse 106 · Saheeh International",
          "ref": "Quran 17:106",
          "t": "verse",
          "translation": "And [it is] a Qur’ān which We have separated [by intervals] that you might recite it to the people over a prolonged period. And We have sent it down progressively."
        }
      ],
      "id": "over-years",
      "title": "Sent Down Over Years"
    },
    {
      "ariaLabel": "Makkah and Madinah",
      "blocks": [
        {
          "html": "Two homes of the revelation",
          "t": "kicker"
        },
        {
          "html": "Makkah and Madinah",
          "t": "h2"
        },
        {
          "html": "Because the revelation spanned two cities and two very different struggles, its surahs carry two names. Those revealed before the Hijrah are called Makki, and those after it Madani. In Makkah, where the believers were few and hunted, the verses hammered the foundations: Allah is One, the dead will rise, the stories of earlier prophets stood as warnings and as company. In Madinah, where a community now existed, the verses built its life: prayer and fasting in their rulings, family, trade, justice and war. Read in order of revelation, you can watch a community being raised the way a father raises a child, first the creed that anchors the heart, then the law that orders the day.",
          "t": "p"
        }
      ],
      "id": "makkah-madinah",
      "title": "Makkah and Madinah"
    }
  ]
},
  "quran": {
    "group": "The Quran",
    "hero": {
      "plaque": "Foundations",
      "title": "The Standardization of the Quran",
      "sub": "How the revelation was gathered into one book and guarded for every generation after: the history of the mushaf, from Yamama to the master codex of Uthman (RA).",
      "img": "../assets/foundations-quran.webp",
      "imgAlt": "A scribe's desk with blank scrolls, reed pens and an inkwell in warm lamplight",
      "caption": "The scribe’s desk, blank sheets awaiting the words that would be guarded for fourteen centuries."
    },
    "introHtml": "Everything in this article happened after the death of the Prophet ﷺ, and that is the point. The revelation was complete, the Messenger ﷺ was gone, and the young Muslim community faced a question no generation had faced before: how do you guard a Book when the man who received it is no longer among you? What follows is the history of how they answered, from the battlefield of Yamama to the master codex of Uthman (RA), traced through the narrations the community itself preserved.",
    "railLabels": [
      "The Promise",
      "Written in His Lifetime",
      "Yamama",
      "Zayd’s Task",
      "Custody of the Suhuf",
      "Hudhayfah’s Warning",
      "The Committee",
      "Why Copies Were Burned",
      "One Text, Everywhere"
    ],
    "sections": [
      {
        "id": "the-promise",
        "ariaLabel": "The Promise",
        "title": "The Promise",
        "blocks": [
          {
            "t": "kicker",
            "html": "Where it begins"
          },
          {
            "t": "h2",
            "html": "The Promise"
          },
          {
            "t": "p",
            "cls": "dropcap",
            "html": "Before the history, the promise. Allah says He sent down the Remembrance, and that He Himself will guard it. Every gathering, every manuscript, every copy that follows is the human side of that divine guarantee: the means by which the promise was kept, generation after generation."
          },
          {
            "t": "verse",
            "ref": "Quran 15:9",
            "arabic": "إِنَّا نَحْنُ نَزَّلْنَا ٱلذِّكْرَ وَإِنَّا لَهُۥ لَحَـٰفِظُونَ",
            "translation": "Indeed, it is We who sent down the message [i.e., the Qur’ān], and indeed, We will be its guardian.",
            "citation": "Surah 15 &middot; Verse 9 &middot; Saheeh International"
          }
        ]
      },
      {
        "id": "written-lifetime",
        "ariaLabel": "Written in His Lifetime",
        "title": "Written in His Lifetime",
        "blocks": [
          {
            "t": "kicker",
            "html": "Before the gatherings"
          },
          {
            "t": "h2",
            "html": "Written in His Lifetime"
          },
          {
            "t": "p",
            "html": "The Quran was not first written after the Prophet’s ﷺ death; it was written during his life. He had scribes, and Zayd ibn Thabit (RA), who would later be entrusted with both gatherings, was one of them, writing the revelation as it came. The verses lived on palm stalks and thin white stones, and more securely, in the hearts of the companions who memorized them."
          },
          {
            "t": "p",
            "html": "And the text was fixed by review. Every Ramadan, Jibreel (AS) would go over the whole Quran with the Prophet ﷺ, and in his final year, they went over it twice."
          },
          {
            "t": "hadith",
            "text": "&ldquo;Gabriel used to repeat the recitation of the Qur’an with the Prophet (ﷺ) once a year, but he repeated it twice with him in the year he died.&rdquo;",
            "narrator": "Narrated Abu Huraira",
            "href": "https://sunnah.com/bukhari:4998",
            "label": "Sahih al-Bukhari 4998 &middot; sunnah.com"
          },
          {
            "t": "p",
            "html": "So when the Prophet ﷺ died, the Quran stood complete, written in fragments, memorized in full, but not yet gathered into a single book."
          }
        ]
      },
      {
        "id": "yamama",
        "ariaLabel": "Yamama",
        "title": "Yamama",
        "blocks": [
          {
            "t": "kicker",
            "html": "11 AH &middot; The Riddah Wars"
          },
          {
            "t": "h2",
            "html": "Yamama"
          },
          {
            "t": "p",
            "cls": "dropcap",
            "html": "Then came Yamama. In the wars against Musaylima the liar, the Muslim army won, but at a cost that shook Umar ibn al-Khattab (RA): heavy casualties among the Qurra’, the companions who carried the whole Quran in memory. Umar saw what the next battlefield could take, and he went to Abu Bakr (RA) with a proposal no one had made before."
          },
          {
            "t": "hadith",
            "text": "&ldquo;Casualties were heavy among the Qurra’ of the Qur’an (i.e. those who knew the Qur’an by heart) on the day of the Battle of Yamama, and I am afraid that more heavy casualties may take place among the Qurra’ on other battlefields, whereby a large part of the Qur’an may be lost. Therefore I suggest, you (Abu Bakr) order that the Qur’an be collected.&rdquo;",
            "narrator": "Umar ibn al-Khattab, narrated by Zayd ibn Thabit",
            "href": "https://sunnah.com/bukhari:4986",
            "label": "Sahih al-Bukhari 4986 &middot; sunnah.com"
          },
          {
            "t": "p",
            "html": "Abu Bakr (RA) hesitated. &ldquo;How can you do something which Allah’s Apostle did not do?&rdquo; But Umar (RA) kept urging him, insisting it was good, until Allah opened Abu Bakr’s chest to the idea, as He had opened Umar’s."
          }
        ]
      },
      {
        "id": "zayd-task",
        "ariaLabel": "Zayd’s Task",
        "title": "Zayd’s Task",
        "blocks": [
          {
            "t": "kicker",
            "html": "The first gathering"
          },
          {
            "t": "h2",
            "html": "Zayd’s Task"
          },
          {
            "t": "p",
            "html": "Abu Bakr (RA) summoned Zayd ibn Thabit (RA), young, trusted, a scribe of the revelation itself, and laid the weight on him: &ldquo;You are a wise young man and we do not have any suspicion about you, and you used to write the Divine Inspiration for Allah’s Messenger (ﷺ). So you should search for (the fragmentary scripts of) the Qur’an and collect it in one book.&rdquo;"
          },
          {
            "t": "hadith",
            "text": "&ldquo;By Allah If they had ordered me to shift one of the mountains, it would not have been heavier for me than this ordering me to collect the Qur’an.&rdquo;",
            "narrator": "Zayd ibn Thabit",
            "href": "https://sunnah.com/bukhari:4986",
            "label": "Sahih al-Bukhari 4986 &middot; sunnah.com"
          },
          {
            "t": "p",
            "html": "Zayd’s method is given in the hadith’s own words: he gathered the Quran from what was written on palm stalks and thin white stones, and from the men who knew it by heart, every fragment checked against living memory. He searched until he found the last verses of Surah at-Taubah with Abu Khuzaima al-Ansari (RA), and with no one else."
          },
          {
            "t": "hadith",
            "text": "&ldquo;So I started looking for the Qur’an and collecting it from (what was written on) palme stalks, thin white stones and also from the men who knew it by heart, till I found the last Verse of Surat at-Tauba (Repentance) with Abi Khuzaima Al-Ansari, and I did not find it with anybody other than him.&rdquo;",
            "narrator": "Zayd ibn Thabit",
            "href": "https://sunnah.com/bukhari:4986",
            "label": "Sahih al-Bukhari 4986 &middot; sunnah.com"
          }
        ]
      },
      {
        "id": "custody",
        "ariaLabel": "Custody of the Suhuf",
        "title": "Custody of the Suhuf",
        "blocks": [
          {
            "t": "kicker",
            "html": "The bound sheets"
          },
          {
            "t": "h2",
            "html": "Custody of the Suhuf"
          },
          {
            "t": "p",
            "html": "The gathered sheets, the Suhuf, were bound into one collection. The narration ends the first gathering with a chain of custody, each link named: the complete manuscript remained with Abu Bakr (RA) until his death, then with Umar (RA) for the rest of his life, then with Hafsa (RA), daughter of Umar (RA) and a widow of the Prophet ﷺ."
          },
          {
            "t": "hadith",
            "text": "&ldquo;Then the complete manuscripts (copy) of the Qur’an remained with Abu Bakr till he died, then with Umar till the end of his life, and then with Hafsa, the daughter of Umar.&rdquo;",
            "narrator": "Zayd ibn Thabit",
            "href": "https://sunnah.com/bukhari:4986",
            "label": "Sahih al-Bukhari 4986 &middot; sunnah.com"
          }
        ]
      },
      {
        "id": "hudhayfah",
        "ariaLabel": "Hudhayfah’s Warning",
        "title": "Hudhayfah’s Warning",
        "blocks": [
          {
            "t": "kicker",
            "html": "Uthman’s caliphate"
          },
          {
            "t": "h2",
            "html": "Hudhayfah’s Warning"
          },
          {
            "t": "p",
            "cls": "dropcap",
            "html": "Some twenty years later, the empire had stretched across Syria, Iraq, and Persia, and the Quran had traveled with it, recited in the seven ways the Prophet ﷺ had permitted, each people in the way most familiar to them."
          },
          {
            "t": "hadith",
            "text": "&ldquo;This Qur’an has been revealed to be recited in seven different ways, so recite of it whichever (way) is easier for you.&rdquo;",
            "narrator": "Narrated Umar ibn al-Khattab",
            "href": "https://sunnah.com/bukhari:4992",
            "label": "Sahih al-Bukhari 4992 &middot; sunnah.com"
          },
          {
            "t": "p",
            "html": "What was a mercy in Arabia became a dispute on distant frontiers. Campaigning with the armies of Sham and Iraq at Arminya and Adharbijan, Hudhayfah ibn al-Yaman (RA) heard soldiers declaring one another’s recitation wrong, and he rode back to Medina in alarm."
          },
          {
            "t": "hadith",
            "text": "&ldquo;O chief of the Believers! Save this nation before they differ about the Book (Qur’an) as Jews and the Christians did before.&rdquo;",
            "narrator": "Hudhayfah ibn al-Yaman, narrated by Anas ibn Malik",
            "href": "https://sunnah.com/bukhari:4987",
            "label": "Sahih al-Bukhari 4987 &middot; sunnah.com"
          }
        ]
      },
      {
        "id": "committee",
        "ariaLabel": "The Committee",
        "title": "The Committee and the Master Codex",
        "blocks": [
          {
            "t": "kicker",
            "html": "The second gathering"
          },
          {
            "t": "h2",
            "html": "The Committee and the Master Codex"
          },
          {
            "t": "p",
            "html": "Uthman (RA) acted at once. He sent to Hafsa (RA) for the Suhuf, &ldquo;so that we may compile the Qur’anic materials in perfect copies and return the manuscripts to you&rdquo;, and appointed four men: Zayd ibn Thabit (RA) once more, with three Qurayshis: Abdullah ibn az-Zubayr (RA), Sa’id ibn al-As (RA), and AbdurRahman ibn Harith ibn Hisham (RA)."
          },
          {
            "t": "hadith",
            "text": "&ldquo;In case you disagree with Zaid bin Thabit on any point in the Qur’an, then write it in the dialect of Quraish, the Qur’an was revealed in their tongue.&rdquo;",
            "narrator": "Uthman ibn Affan, narrated by Anas ibn Malik",
            "href": "https://sunnah.com/bukhari:4987",
            "label": "Sahih al-Bukhari 4987 &middot; sunnah.com"
          },
          {
            "t": "p",
            "html": "They wrote many copies from the Suhuf in the unpointed script. Uthman returned the original sheets to Hafsa, sent one copy to every Muslim province, and ordered every other Quranic material, fragment or whole copy, to be burnt."
          },
          {
            "t": "hadith",
            "text": "&ldquo;Uthman sent to every Muslim province one copy of what they had copied, and ordered that all the other Qur’anic materials, whether written in fragmentary manuscripts or whole copies, be burnt.&rdquo;",
            "narrator": "Narrated Anas ibn Malik",
            "href": "https://sunnah.com/bukhari:4987",
            "label": "Sahih al-Bukhari 4987 &middot; sunnah.com"
          }
        ]
      },
      {
        "id": "burning",
        "ariaLabel": "Why Copies Were Burned",
        "title": "Why the Other Copies Were Burned",
        "blocks": [
          {
            "t": "kicker",
            "html": "The hard decision"
          },
          {
            "t": "h2",
            "html": "Why the Other Copies Were Burned"
          },
          {
            "t": "p",
            "cls": "dropcap",
            "html": "The burning was not the destruction of the Quran; it was its protection. The classical scholars explain what those personal copies contained, and why leaving them in circulation would have endangered the text within a generation."
          },
          {
            "t": "p",
            "html": "Many companions kept private notebooks: verses copied for study, with their own explanations, supplications, and commentary written in the margins, the personal codices associated with men like Abdullah ibn Mas’ud and Ubayy ibn Ka’b. Copied by later hands that could no longer tell the divine words from a companion’s notes, human words would have seeped into scripture."
          },
          {
            "t": "p",
            "html": "Other fragments carried readings in local dialects, or verses whose recitation had been abrogated, the very differences that had set the armies of Sham and Iraq arguing. One master codex, transcribed from the Suhuf of Hafsa (RA) under Zayd (RA), who had written the revelation himself, ended the fragmentation: from that day, a Quran opened in Damascus and a Quran opened in Kufa held the same text."
          }
        ]
      },
      {
        "id": "one-text",
        "ariaLabel": "One Text, Everywhere",
        "title": "One Text, Everywhere",
        "blocks": [
          {
            "t": "kicker",
            "html": "The promise, kept"
          },
          {
            "t": "h2",
            "html": "One Text, Everywhere"
          },
          {
            "t": "p",
            "html": "That is the whole history: one gathering under Abu Bakr (RA) to save the text from loss, one standardization under Uthman (RA) to save it from division. The consonantal skeleton they fixed has never changed since: every mushaf printed today, in Morocco or Indonesia, descends from those master copies. &ldquo;Indeed, it is We who sent down the message, and indeed, We will be its guardian.&rdquo;"
          }
        ]
      }
    ],
    "prevNext": [
      {
        "label": "Previous article",
        "title": "The Night the Quran Began",
        "href": "?p=night",
        "arrow": "back"
      },
      {
        "label": "Next article",
        "title": "How the Quran Is Recited",
        "href": "?p=recitation",
        "arrow": "next"
      }
    ]
  },
  "recitation": {
  "group": "The Quran",
  "hero": {
    "caption": "A symbolic image: seven streams flowing in one direction, merging into a single river of light.",
    "img": "../assets/foundations-recitation.webp",
    "imgAlt": "Persian miniature painting of seven streams of golden light flowing over desert dunes at night",
    "plaque": "Foundations",
    "sub": "Why the same verse can be recited in more than one beautiful way: the seven ahruf and the transmitted readings of the Quran.",
    "title": "How the Quran Is Recited"
  },
  "introHtml": "One day two companions nearly came to blows in the mosque, each certain the other was reciting the Quran wrongly. The Prophet ﷺ listened to them both, approved them both, and gave this community one of its most merciful gifts: this Quran was revealed to be recited in seven ways. This article explains, simply, what that means, and why you may hear the same verse carried on two different melodies of pronunciation, both of them the Quran.",
  "prevNext": [
    {
      "arrow": "back",
      "href": "?p=quran",
      "label": "Previous article",
      "title": "The Standardization of the Quran"
    },
    {
      "arrow": "next",
      "href": "?p=ijaz",
      "label": "Next article",
      "title": "The Quran That Cannot Be Imitated"
    }
  ],
  "railLabels": [
    "Seven Ways",
    "What Is a Harf",
    "What Is a Qira'ah",
    "One Text, Many Readings"
  ],
  "sections": [
    {
      "ariaLabel": "Seven Ways",
      "blocks": [
        {
          "html": "The dispute in the mosque",
          "t": "kicker"
        },
        {
          "html": "Seven Ways",
          "t": "h2"
        },
        {
          "cls": "dropcap",
          "html": "Umar ibn al-Khattab (RA) heard Hisham ibn Hakim (RA) reciting Surah al-Furqan in a way different from what the Prophet ﷺ had taught him. He seized him, brought him before the Prophet ﷺ, and complained. The Prophet ﷺ asked Hisham to recite, approved him, then asked Umar to recite, and approved him too. What looked like an error was a mercy neither of them had yet understood.",
          "t": "p"
        },
        {
          "href": "https://sunnah.com/bukhari:4992",
          "label": "Sahih al-Bukhari 4992 · sunnah.com",
          "narrator": "Narrated Umar ibn al-Khattab",
          "t": "hadith",
          "text": "“This Qur’an has been revealed to be recited in seven different ways, so recite of it whichever (way) is easier for you.”"
        }
      ],
      "id": "seven-ways",
      "title": "Seven Ways"
    },
    {
      "ariaLabel": "What Is a Harf",
      "blocks": [
        {
          "html": "Seven ahruf, explained gently",
          "t": "kicker"
        },
        {
          "html": "What Is a Harf",
          "t": "h2"
        },
        {
          "html": "The seven ways are called the seven ahruf. A harf here is a mode or manner of recitation, given so that the different tribes of Arabia, each with its own tongue and habits of speech, could carry the same revelation in the mouth without breaking their teeth on another tribe's pronunciation. Scholars through the centuries have explained the exact shape of the seven in more than one way, and this article does not need to settle their discussion. What stands in the hadith is the gift itself: the Quran came down wide enough for every tongue that first received it, and no Arab was told that his sincere recitation was a mistake because his dialect leaned another way.",
          "t": "p"
        }
      ],
      "id": "what-is-harf",
      "title": "What Is a Harf"
    },
    {
      "ariaLabel": "What Is a Qira'ah",
      "blocks": [
        {
          "html": "Readings handed down, not invented",
          "t": "kicker"
        },
        {
          "html": "What Is a Qira'ah",
          "t": "h2"
        },
        {
          "html": "Out of that first breadth grew the qira'at, the transmitted readings. A qira'ah is not a scholar's guess and not a later decoration. It is a way of reciting that travels back, teacher to student, generation by generation, to the Prophet ﷺ himself. The differences are mostly in the music of the words: a letter lengthened or softened, a vowel resting in a slightly different place. Sometimes a word opens into two shades of one meaning. In the very first surah, the fourth verse is recited both as Maaliki yawmi-d-deen, Master of the Day of Judgment, and Maliki yawmi-d-deen, King of the Day of Judgment. Master and King. The meanings do not fight. They stand side by side, and the verse grows larger.",
          "t": "p"
        },
        {
          "html": "The best known readings are named after the great reciters who carried them, and to this day the mushaf in one land may be printed in the reading of Hafs while another land recites Warsh, the same consonants on the page, the same verses in the chest.",
          "t": "p"
        }
      ],
      "id": "what-is-qiraah",
      "title": "What Is a Qira'ah"
    },
    {
      "ariaLabel": "One Text, Many Readings",
      "blocks": [
        {
          "html": "Why this is not seven Qurans",
          "t": "kicker"
        },
        {
          "html": "One Text, Many Readings",
          "t": "h2"
        },
        {
          "html": "It is important to say plainly what the seven ways are not. They are not seven Qurans, and the readings are not rival scriptures. When Uthman (RA) gathered the community onto one master codex, he fixed the consonantal skeleton of the text, the very skeleton within which the transmitted readings live. A river may run in several channels down one valley, but it is one river, from one spring. So when you hear a reciter in another land pronounce a word with a turn you have never heard, the surprise you feel is the same surprise Umar (RA) felt in the mosque, and it has the same answer now that it had then: recite whichever way is easier for you, for all of it came down as mercy.",
          "t": "p"
        }
      ],
      "id": "one-text",
      "title": "One Text, Many Readings"
    }
  ]
},
  "ijaz": {
  "hero": {
    "caption": "A symbolic image: desert dunes moving like waves beneath the night sky, a reminder that the Quran is first received by hearing.",
    "img": "../assets/foundations-ijaz.webp",
    "imgAlt": "Persian miniature painting of moonlit desert dunes flowing like waves under a star filled sky",
    "plaque": "Foundations",
    "sub": "The open challenge of the Quran, the beauty of its word arrangement, and the counted patterns that make its verses stay in the ear and in the heart.",
    "title": "The Quran That Cannot Be Imitated"
  },
  "introHtml": "Some books ask to be admired. The Quran does something rarer: it asks to be tested. Again and again it turns to the doubter and says, in effect, if this is only human speech, then bring its like. Bring one surah. Bring ten. Gather every helper you can find. The challenge is not hidden in a footnote or saved for scholars. It stands in the open, in the recitation itself, where the sound reaches the ear before the argument reaches the mind.",
  "prevNext": [
    {
      "arrow": "back",
      "href": "?p=quran",
      "label": "Previous article",
      "title": "The Standardization of the Quran"
    }
  ],
  "railLabels": [
    "The Open Challenge",
    "From the Whole Book to One Surah",
    "The Arrangement of Words",
    "Sound That Stays in the Chest",
    "Counted Refrains",
    "The Counted Quran",
    "Balance and Pairing",
    "Why the Challenge Still Stands"
  ],
  "sections": [
    {
      "ariaLabel": "The Open Challenge",
      "blocks": [
        {
          "html": "Where the claim begins",
          "t": "kicker"
        },
        {
          "html": "The Open Challenge",
          "t": "h2"
        },
        {
          "cls": "dropcap",
          "html": "The Quran names the doubt and answers it on the same page. If what was sent down to Muhammad ﷺ is questioned, the response is not anger and not silence. It is a public test: produce a surah like it, and call every witness and helper besides Allah. Then the verse closes the door on every future attempt with words that still sound daring after fourteen centuries: if you do not, and you never will, then fear the Fire.",
          "t": "p"
        },
        {
          "arabic": "وَإِن كُنتُمْ فِى رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا۟ بِسُورَةٍ مِّن مِّثْلِهِۦ وَٱدْعُوا۟ شُهَدَآءَكُم مِّن دُونِ ٱللَّهِ إِن كُنتُمْ صَـٰدِقِينَ فَإِن لَّمْ تَفْعَلُوا۟ وَلَن تَفْعَلُوا۟ فَٱتَّقُوا۟ ٱلنَّارَ ٱلَّتِى وَقُودُهَا ٱلنَّاسُ وَٱلْحِجَارَةُ ۖ أُعِدَّتْ لِلْكَـٰفِرِينَ",
          "citation": "Surah 2 · Verses 23-24 · Saheeh International",
          "ref": "Quran 2:23-24",
          "t": "verse",
          "translation": "And if you are in doubt about what We have sent down [i.e., the Qur’ān] upon Our Servant [i.e., Prophet Muḥammad (ﷺ)], then produce a sūrah the like thereof and call upon your witnesses [i.e., supporters] other than Allāh, if you should be truthful. But if you do not - and you will never be able to - then fear the Fire, whose fuel is people and stones, prepared for the disbelievers."
        }
      ],
      "id": "open-challenge",
      "title": "The Open Challenge"
    },
    {
      "ariaLabel": "From the Whole Book to One Surah",
      "blocks": [
        {
          "html": "The bar is lowered",
          "t": "kicker"
        },
        {
          "html": "From the Whole Book to One Surah",
          "t": "h2"
        },
        {
          "html": "The challenge is repeated at different heights. In one place the whole company of mankind and jinn is gathered in imagination, helping one another, and still declared unable. In another, the demand is ten surahs. Then it falls to one. The movement matters. The Quran does not make the test impossibly large and then hide behind its size. It reduces the task until the failure, if failure comes, cannot be blamed on the scale of the request.",
          "t": "p"
        },
        {
          "arabic": "قُل لَّئِنِ ٱجْتَمَعَتِ ٱلْإِنسُ وَٱلْجِنُّ عَلَىٰٓ أَن يَأْتُوا۟ بِمِثْلِ هَـٰذَا ٱلْقُرْءَانِ لَا يَأْتُونَ بِمِثْلِهِۦ وَلَوْ كَانَ بَعْضُهُمْ لِبَعْضٍ ظَهِيرًا",
          "citation": "Surah 17 · Verse 88 · Saheeh International",
          "ref": "Quran 17:88",
          "t": "verse",
          "translation": "Say, \"If mankind and the jinn gathered in order to produce the like of this Qur’ān, they could not produce the like of it, even if they were to each other assistants.\""
        },
        {
          "arabic": "أَمْ يَقُولُونَ ٱفْتَرَىٰهُ ۖ قُلْ فَأْتُوا۟ بِعَشْرِ سُوَرٍ مِّثْلِهِۦ مُفْتَرَيَـٰتٍ وَٱدْعُوا۟ مَنِ ٱسْتَطَعْتُم مِّن دُونِ ٱللَّهِ إِن كُنتُمْ صَـٰدِقِينَ",
          "citation": "Surah 11 · Verse 13 · Saheeh International",
          "ref": "Quran 11:13",
          "t": "verse",
          "translation": "Or do they say, \"He invented it\"? Say, \"Then bring ten sūrahs like it that have been invented and call upon [for assistance] whomever you can besides Allāh, if you should be truthful.\""
        },
        {
          "arabic": "أَمْ يَقُولُونَ ٱفْتَرَىٰهُ ۖ قُلْ فَأْتُوا۟ بِسُورَةٍ مِّثْلِهِۦ وَٱدْعُوا۟ مَنِ ٱسْتَطَعْتُم مِّن دُونِ ٱللَّهِ إِن كُنتُمْ صَـٰدِقِينَ",
          "citation": "Surah 10 · Verse 38 · Saheeh International",
          "ref": "Quran 10:38",
          "t": "verse",
          "translation": "Or do they say [about the Prophet (ﷺ)], \"He invented it?\" Say, \"Then bring forth a sūrah like it and call upon [for assistance] whomever you can besides Allāh, if you should be truthful.\""
        }
      ],
      "id": "whole-to-one",
      "title": "From the Whole Book to One Surah"
    },
    {
      "ariaLabel": "The Arrangement of Words",
      "blocks": [
        {
          "html": "Nazm: meaning in its place",
          "t": "kicker"
        },
        {
          "html": "The Arrangement of Words",
          "t": "h2"
        },
        {
          "html": "Muslim scholars gave the Quran’s inimitability a name: i’jaz. When they searched for where that quality lives, many pointed to nazm, the arrangement of words. The marvel is not rare vocabulary by itself. It is the placing of each word so that sound, image, ruling, warning and mercy arrive together, with no loose thread hanging from the sentence. A verse can command, console and correct in the same breath, and still feel as if nothing could be moved without breaking the balance.",
          "t": "p"
        },
        {
          "html": "Listen to the opening movement of Ar-Rahman. Four short verses carry the whole doorway into the surah: the Most Merciful, the teaching of the Quran, the creation of man, and the gift of eloquence. The order is part of the beauty. Before man is mentioned, mercy is named. Before speech is praised, the Quran is placed as the teacher. The verses are brief enough to memorize at a glance, yet the ideas are arranged like steps, each one preparing the heart for the next.",
          "t": "p"
        },
        {
          "arabic": "ٱلرَّحْمَـٰنُ عَلَّمَ ٱلْقُرْءَانَ خَلَقَ ٱلْإِنسَـٰنَ عَلَّمَهُ ٱلْبَيَانَ",
          "citation": "Surah 55 · Verses 1-4 · Saheeh International",
          "ref": "Quran 55:1-4",
          "t": "verse",
          "translation": "The Most Merciful Taught the Qur’ān, Created man, [And] taught him eloquence."
        },
        {
          "html": "This is one of the Quran’s recurring beauties: compression without thinness. The words do not pile up to impress. They stand in ranks. A short phrase can open into law, history, gratitude and warning, and the listener keeps finding doors in a passage he thought he had finished.",
          "t": "p"
        }
      ],
      "id": "arrangement",
      "title": "The Arrangement of Words"
    },
    {
      "ariaLabel": "Sound That Stays in the Chest",
      "blocks": [
        {
          "html": "Heard before it is studied",
          "t": "kicker"
        },
        {
          "html": "Sound That Stays in the Chest",
          "t": "h2"
        },
        {
          "html": "The Quran is not only read with the eyes. It is carried by the tongue, timed by the breath and held in the chest. Its verse endings often fall into a measured cadence, so the ear knows when a thought has landed. Long passages can move like a procession, verse after verse keeping a rhythm of endings, while short surahs strike like a hand on a door. The beauty is not decoration added to meaning. The sound helps the meaning stay.",
          "t": "p"
        },
        {
          "html": "That is why a child can hold whole passages before he can explain them, and why an old man can hear a verse across a room and feel its weight before he translates a word. The arrangement serves memory. Rhyme of ending, balance of phrase and repetition of key words make the text cling to the listener, so that study often begins after the heart has already been reached.",
          "t": "p"
        }
      ],
      "id": "sound",
      "title": "Sound That Stays in the Chest"
    },
    {
      "ariaLabel": "Counted Refrains",
      "blocks": [
        {
          "html": "A pattern the reader can count",
          "t": "kicker"
        },
        {
          "html": "Counted Refrains",
          "t": "h2"
        },
        {
          "html": "There is also a plainer kind of pattern, one any reader can test with a finger on the page. In Surah Ar-Rahman, after blessing follows blessing, the question returns: “So which of the favors of your Lord would you deny?” It comes again and again through the surah, thirty-one times in seventy-eight verses, like a measured knock at the door of gratitude. The repetition is not filler. Each return lands after new gifts have been named, so the same words grow heavier every time they arrive.",
          "t": "p"
        },
        {
          "arabic": "فَبِأَىِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ",
          "citation": "Surah 55 · Verse 13 · Saheeh International",
          "ref": "Quran 55:13",
          "t": "verse",
          "translation": "So which of the favors of your Lord would you deny?"
        },
        {
          "html": "Surah Al-Mursalat carries the opposite temperature. Its warning returns ten times in fifty verses: “Woe, that Day, to the deniers.” Mercy has a refrain, and judgment has a refrain. One teaches the tongue to answer with gratitude. The other teaches it to tremble. Readers sometimes call this the mathematical side of the Quran’s beauty. The safer wonder is the visible architecture: exact returns, placed at intervals, shaping the surah the way pillars shape a hall.",
          "t": "p"
        },
        {
          "arabic": "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
          "citation": "Surah 77 · Verse 15 · Saheeh International",
          "ref": "Quran 77:15",
          "t": "verse",
          "translation": "Woe, that Day, to the deniers."
        }
      ],
      "id": "counted-refrains",
      "title": "Counted Refrains"
    },
    {
      "ariaLabel": "The Counted Quran",
      "blocks": [
        {
          "html": "Words weighed, not slogans",
          "t": "kicker"
        },
        {
          "html": "The Counted Quran",
          "t": "h2"
        },
        {
          "html": "The same care can be taken with single words. Counted from the Arabic text, with attached words such as “and” or “in” treated as part of the word they join, yawm, the word for day in its singular form, appears 349 times. Its solemn companion yawma’idhin, “that Day,” appears 70 times, and the plural ayyam, days, appears 22 times. These are not magic numbers forced onto the page. They are a reminder of how often the Quran turns the reader toward time, appointment and return.",
          "t": "p"
        },
        {
          "html": "Other counts, counted the same way, give the article its restraint. Ad-dunya, this world, appears 115 times, and al-akhirah, the Hereafter, appears 116 times in this counting, close enough to make the pairing felt and exact enough to warn us not to bend a number into a claim it cannot carry. Al-hayat, life, appears 71 times, as-salah, the prayer, 68 times, az-zakah, the obligatory charity, 32 times, al-jannah, the Garden, 77 times and an-nar, the Fire, 125 times.",
          "t": "p"
        },
        {
          "html": "Some popular pairs are therefore left out of this article. Where the ancient spelling makes two different words look the same on the page, a count cannot be honest without explaining the judgment hidden inside it. What can be verified is printed here. What cannot be verified cleanly is not used as proof.",
          "t": "p"
        }
      ],
      "id": "counted-quran",
      "title": "The Counted Quran"
    },
    {
      "ariaLabel": "Balance and Pairing",
      "blocks": [
        {
          "html": "Opposites held in one hand",
          "t": "kicker"
        },
        {
          "html": "Balance and Pairing",
          "t": "h2"
        },
        {
          "html": "Again and again, the Quran places paired realities side by side: mercy and judgment, guidance and loss, the living and the dead, the seen and the unseen. The pairs are not pasted together as slogans. They arise inside stories, laws and descriptions of the Last Day, so the mind learns to hold both sides of existence at once. Gratitude is never allowed to become carelessness, and fear is never left without a door back to hope.",
          "t": "p"
        },
        {
          "html": "The language also turns with sudden grace. A passage may speak about people in the third person, then turn and address them directly, then open into prayer or command. Arabic rhetoric knows this turning as a way of waking the listener. In the Quran it often feels like the text refuses to let the reader remain a spectator. The one who was being spoken about discovers that he is now being spoken to.",
          "t": "p"
        },
        {
          "html": "Even the small words carry weight. Particles of emphasis, pauses at verse endings, and changes from singular to plural can shift the temperature of a passage. Translators labour to carry these turns into another language, and still the Arabic keeps reserves that a translation can only point toward. That gap is part of the experience of every non-Arabic reader: he receives the meaning truly, yet hears from those who know the tongue that the original is still larger.",
          "t": "p"
        }
      ],
      "id": "balance",
      "title": "Balance and Pairing"
    },
    {
      "ariaLabel": "Why the Challenge Still Stands",
      "blocks": [
        {
          "html": "The door remains open",
          "t": "kicker"
        },
        {
          "html": "Why the Challenge Still Stands",
          "t": "h2"
        },
        {
          "cls": "dropcap",
          "html": "The enduring power of the challenge is its openness. It was not locked inside one century, one city or one circle of poets. The verses remain recited in public, memorized by children, printed in every land and heard by believers and sceptics alike. Anyone may still read the test in its own words: bring a surah like it. The Quran stakes its claim where language can be examined, where eloquence can be compared, and where failure cannot be hidden behind distance.",
          "t": "p"
        },
        {
          "html": "For the believer, this is why the Book feels alive in the mouth. It teaches and warns, but it also sings its own proof. The shortest passages carry the same signature as the longest: precision of word, force of image, balance of sound and a meaning that keeps opening after the recitation has ended. The challenge began as an answer to doubt. It remains as an invitation to listen more closely.",
          "t": "p"
        }
      ],
      "id": "still-stands",
      "title": "Why the Challenge Still Stands"
    }
  ]
}
};
export const foundationOrder = ["iman", "pillars", "night", "quran", "recitation", "ijaz"];
