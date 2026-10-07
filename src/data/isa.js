/* isa chapter data: Isa (AS), Chapter XXIV.
   Story format: prose scenes written for young readers, following the
   classical telling of the story. Verse, hadith and tafsir panels
   sit as dropdowns under each scene. No sources note card. */
export const chapter = {
  "hero": {
    "plaque": "Chapter XXIV",
    "title": "Isa (AS): The Word of Truth",
    "sub": "Announced by angels before his birth, defended by his own cradle speech, lifted to his Lord before his enemies could touch him and promised again as a sign of the Hour: the story of Isa (AS), as the Quran tells it.",
    "img": "../assets/isa-palm.webp",
    "imgAlt": "A desert oasis with a date palm beside a stream, a woven cradle in the shade and a veiled figure seen from behind kneeling at the water at sunrise, in Persian miniature style",
    "caption": "&ldquo;And peace is on me the day I was born and the day I will die and the day I am raised alive.&rdquo; (Quran 19:33)"
  },
  "railLabels": [
    "The Pure Son Announced",
    "A Stream and a Palm Tree",
    "The Baby Defends Her",
    "A Prophet Among the Priests",
    "By My Leave",
    "The Table From Heaven",
    "They Did Not Kill Him",
    "A Messenger, Not a God"
  ],
  "scenes": [
    {
      "id": "scene-1",
      "ariaLabel": "Scene 1: The Pure Son Announced",
      "title": "The Pure Son Announced",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 1 of 8"
        },
        {
          "t": "h2",
          "html": "The Pure Son Announced"
        },
        {
          "t": "p",
          "html": "Maryam had grown up in a chamber of the temple, chosen and purified above the women of the worlds, when one day she found a man standing in her locked sanctuary. She recoiled in terror: I seek refuge in the Most Merciful from you, if you fear Allah. He answered: I am only the messenger of your Lord, sent to give you a pure son. It was Jibreel, in the form of a man. The angels' announcement, the Quran says, ran like this: O Maryam, Allah gives you glad tidings of a Word from Him, whose name is the Messiah, Isa, the son of Maryam, distinguished in this world and the Hereafter and among those brought near to Allah. He will speak to people in the cradle and in maturity, and he will be among the righteous.",
          "cls": "dropcap"
        },
        {
          "t": "p",
          "html": "My Lord, she said, how can I have a child when no man has touched me, and I have not been unchaste? He said: Thus it is. Your Lord says: It is easy for Me. And We will make him a sign for people and a mercy from Us. And it is a matter already decreed. If the impossibility troubles you, the Quran settles it with the first prophet's biography: Indeed, the example of Isa before Allah is like that of Adam. He created him from dust, then said to him 'Be,' and he was. No father, no mother, dust and a word, and no one calls Adam divine. A fatherless creation is the same signature written a second time."
        },
        {
          "t": "verse",
          "ref": "Quran 3:33-34",
          "arabic": "إِنَّ ٱللَّهَ ٱصْطَفَىٰٓ ءَادَمَ وَنُوحًا وَءَالَ إِبْرَٰهِيمَ وَءَالَ عِمْرَٰنَ عَلَى ٱلْعَـٰلَمِينَ ذُرِّيَّةًۢ بَعْضُهَا مِنۢ بَعْضٍ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
          "translation": "Indeed, Allāh chose Adam and Noah and the family of Abraham and the family of ʿImrān over the worlds - Descendants, some of them from others. And Allāh is Hearing and Knowing.",
          "citation": "Surah 3 &middot; Verses 33-34 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 3:35-36",
          "arabic": "إِذْ قَالَتِ ٱمْرَأَتُ عِمْرَٰنَ رَبِّ إِنِّى نَذَرْتُ لَكَ مَا فِى بَطْنِى مُحَرَّرًا فَتَقَبَّلْ مِنِّىٓ ۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلْعَلِيمُ فَلَمَّا وَضَعَتْهَا قَالَتْ رَبِّ إِنِّى وَضَعْتُهَآ أُنثَىٰ وَٱللَّهُ أَعْلَمُ بِمَا وَضَعَتْ وَلَيْسَ ٱلذَّكَرُ كَٱلْأُنثَىٰ ۖ وَإِنِّى سَمَّيْتُهَا مَرْيَمَ وَإِنِّىٓ أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ ٱلشَّيْطَـٰنِ ٱلرَّجِيمِ",
          "translation": "[Mention, O Muḥammad], when the wife of ʿImrān said, \"My Lord, indeed I have pledged to You what is in my womb, consecrated [for Your service], so accept this from me. Indeed, You are the Hearing, the Knowing.\" But when she delivered her, she said, \"My Lord, I have delivered a female.\" And Allāh was most knowing of what she delivered, and the male is not like the female. \"And I have named her Mary, and I seek refuge for her in You and [for] her descendants from Satan, the expelled [from the mercy of Allāh].\"",
          "citation": "Surah 3 &middot; Verses 35-36 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 3:37",
          "arabic": "فَتَقَبَّلَهَا رَبُّهَا بِقَبُولٍ حَسَنٍ وَأَنۢبَتَهَا نَبَاتًا حَسَنًا وَكَفَّلَهَا زَكَرِيَّا ۖ كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا ٱلْمِحْرَابَ وَجَدَ عِندَهَا رِزْقًا ۖ قَالَ يَـٰمَرْيَمُ أَنَّىٰ لَكِ هَـٰذَا ۖ قَالَتْ هُوَ مِنْ عِندِ ٱللَّهِ ۖ إِنَّ ٱللَّهَ يَرْزُقُ مَن يَشَآءُ بِغَيْرِ حِسَابٍ",
          "translation": "So her Lord accepted her with good acceptance and caused her to grow in a good manner and put her in the care of Zechariah. Every time Zechariah entered upon her in the prayer chamber, he found with her provision. He said, \"O Mary, from where is this [coming] to you?\" She said, \"It is from Allāh. Indeed, Allāh provides for whom He wills without account.\"",
          "citation": "Surah 3 &middot; Verse 37 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 3:42-43",
          "arabic": "وَإِذْ قَالَتِ ٱلْمَلَـٰٓئِكَةُ يَـٰمَرْيَمُ إِنَّ ٱللَّهَ ٱصْطَفَىٰكِ وَطَهَّرَكِ وَٱصْطَفَىٰكِ عَلَىٰ نِسَآءِ ٱلْعَـٰلَمِينَ يَـٰمَرْيَمُ ٱقْنُتِى لِرَبِّكِ وَٱسْجُدِى وَٱرْكَعِى مَعَ ٱلرَّٰكِعِينَ",
          "translation": "And [mention] when the angels said, \"O Mary, indeed Allāh has chosen you and purified you and chosen you above the women of the worlds. O Mary, be devoutly obedient to your Lord and prostrate and bow with those who bow [in prayer].\"",
          "citation": "Surah 3 &middot; Verses 42-43 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 66:12",
          "arabic": "وَمَرْيَمَ ٱبْنَتَ عِمْرَٰنَ ٱلَّتِىٓ أَحْصَنَتْ فَرْجَهَا فَنَفَخْنَا فِيهِ مِن رُّوحِنَا وَصَدَّقَتْ بِكَلِمَـٰتِ رَبِّهَا وَكُتُبِهِۦ وَكَانَتْ مِنَ ٱلْقَـٰنِتِينَ",
          "translation": "And [the example of] Mary, the daughter of ʿImrān, who guarded her chastity, so We blew into [her garment] through Our angel [i.e., Gabriel], and she believed in the words of her Lord and His scriptures and was of the devoutly obedient.",
          "citation": "Surah 66 &middot; Verse 12 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 3:45-46",
          "arabic": "إِذْ قَالَتِ ٱلْمَلَـٰٓئِكَةُ يَـٰمَرْيَمُ إِنَّ ٱللَّهَ يُبَشِّرُكِ بِكَلِمَةٍ مِّنْهُ ٱسْمُهُ ٱلْمَسِيحُ عِيسَى ٱبْنُ مَرْيَمَ وَجِيهًا فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ وَمِنَ ٱلْمُقَرَّبِينَ وَيُكَلِّمُ ٱلنَّاسَ فِى ٱلْمَهْدِ وَكَهْلًا وَمِنَ ٱلصَّـٰلِحِينَ",
          "translation": "[And mention] when the angels said, \"O Mary, indeed Allāh gives you good tidings of a word<sup foot_note=196052>1</sup> from Him, whose name will be the Messiah, Jesus, the son of Mary - distinguished in this world and the Hereafter and among those brought near [to Allāh]. He will speak to the people in the cradle and in maturity and will be of the righteous.\"",
          "citation": "Surah 3 &middot; Verses 45-46 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 3:47",
          "arabic": "قَالَتْ رَبِّ أَنَّىٰ يَكُونُ لِى وَلَدٌ وَلَمْ يَمْسَسْنِى بَشَرٌ ۖ قَالَ كَذَٰلِكِ ٱللَّهُ يَخْلُقُ مَا يَشَآءُ ۚ إِذَا قَضَىٰٓ أَمْرًا فَإِنَّمَا يَقُولُ لَهُۥ كُن فَيَكُونُ",
          "translation": "She said, \"My Lord, how will I have a child when no man has touched me?\" [The angel] said, \"Such is Allāh; He creates what He wills. When He decrees a matter, He only says to it, 'Be,' and it is.",
          "citation": "Surah 3 &middot; Verse 47 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 19:16-18",
          "arabic": "وَٱذْكُرْ فِى ٱلْكِتَـٰبِ مَرْيَمَ إِذِ ٱنتَبَذَتْ مِنْ أَهْلِهَا مَكَانًا شَرْقِيًّا فَٱتَّخَذَتْ مِن دُونِهِمْ حِجَابًا فَأَرْسَلْنَآ إِلَيْهَا رُوحَنَا فَتَمَثَّلَ لَهَا بَشَرًا سَوِيًّا قَالَتْ إِنِّىٓ أَعُوذُ بِٱلرَّحْمَـٰنِ مِنكَ إِن كُنتَ تَقِيًّا",
          "translation": "And mention, [O Muḥammad], in the Book [the story of] Mary, when she withdrew from her family to a place toward the east. And she took, in seclusion from them, a screen. Then We sent to her Our Angel [i.e., Gabriel], and he represented himself to her as a well-proportioned man. She said, \"Indeed, I seek refuge in the Most Merciful from you, [so leave me], if you should be fearing of Allāh.\"",
          "citation": "Surah 19 &middot; Verses 16-18 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 19:19-21",
          "arabic": "قَالَ إِنَّمَآ أَنَا۠ رَسُولُ رَبِّكِ لِأَهَبَ لَكِ غُلَـٰمًا زَكِيًّا قَالَتْ أَنَّىٰ يَكُونُ لِى غُلَـٰمٌ وَلَمْ يَمْسَسْنِى بَشَرٌ وَلَمْ أَكُ بَغِيًّا قَالَ كَذَٰلِكِ قَالَ رَبُّكِ هُوَ عَلَىَّ هَيِّنٌ ۖ وَلِنَجْعَلَهُۥٓ ءَايَةً لِّلنَّاسِ وَرَحْمَةً مِّنَّا ۚ وَكَانَ أَمْرًا مَّقْضِيًّا",
          "translation": "He said, \"I am only the messenger of your Lord to give you [news of] a pure boy [i.e., son].\" She said, \"How can I have a boy while no man has touched me and I have not been unchaste?\" He said, \"Thus [it will be]; your Lord says, 'It is easy for Me, and We will make him a sign to the people and a mercy from Us. And it is a matter [already] decreed.'\"",
          "citation": "Surah 19 &middot; Verses 19-21 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-2",
      "ariaLabel": "Scene 2: A Stream and a Palm Tree",
      "title": "A Stream and a Palm Tree",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 2 of 8"
        },
        {
          "t": "h2",
          "html": "A Stream and a Palm Tree"
        },
        {
          "t": "p",
          "html": "Carrying a miracle no one would believe, Maryam withdrew to a remote place, away from the town's eyes. There, alone, the pains of labour drove her to the trunk of a palm tree, and the dread of facing her people squeezed out of her the most human sentence any saint ever spoke: I wish I had died before this and been completely forgotten. She was the purest woman of her age, chosen above the women of the worlds, and she was on the ground under a tree wishing she did not exist.",
          "cls": "dropcap"
        },
        {
          "t": "p",
          "html": "Then mercy spoke, from beneath her or from the infant, the scholars differ: Do not grieve. Your Lord has provided a stream beneath you. And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates. So eat and drink and be content. And if you see any human being, say: I have vowed to the Most Merciful abstention from speech, so I will not speak today to anyone. Water at her feet, food from a bare trunk shaken by a woman who had just given birth, and a vow of silence that outsourced her defence to heaven. She ate. She drank. She gathered the child, and she walked back into the town that was sharpening its questions."
        },
        {
          "t": "verse",
          "ref": "Quran 19:22-23",
          "arabic": "فَحَمَلَتْهُ فَٱنتَبَذَتْ بِهِۦ مَكَانًا قَصِيًّا فَأَجَآءَهَا ٱلْمَخَاضُ إِلَىٰ جِذْعِ ٱلنَّخْلَةِ قَالَتْ يَـٰلَيْتَنِى مِتُّ قَبْلَ هَـٰذَا وَكُنتُ نَسْيًا مَّنسِيًّا",
          "translation": "So she conceived him, and she withdrew with him to a remote place. And the pains of childbirth drove her to the trunk of a palm tree. She said, \"Oh, I wish I had died before this and was in oblivion, forgotten.\"",
          "citation": "Surah 19 &middot; Verses 22-23 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 19:24-26",
          "arabic": "فَنَادَىٰهَا مِن تَحْتِهَآ أَلَّا تَحْزَنِى قَدْ جَعَلَ رَبُّكِ تَحْتَكِ سَرِيًّا وَهُزِّىٓ إِلَيْكِ بِجِذْعِ ٱلنَّخْلَةِ تُسَـٰقِطْ عَلَيْكِ رُطَبًا جَنِيًّا فَكُلِى وَٱشْرَبِى وَقَرِّى عَيْنًا ۖ فَإِمَّا تَرَيِنَّ مِنَ ٱلْبَشَرِ أَحَدًا فَقُولِىٓ إِنِّى نَذَرْتُ لِلرَّحْمَـٰنِ صَوْمًا فَلَنْ أُكَلِّمَ ٱلْيَوْمَ إِنسِيًّا",
          "translation": "But he<sup foot_note=196723>1</sup> called her from below her, \"Do not grieve; your Lord has provided beneath you a stream. And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates. So eat and drink and be contented. And if you see from among humanity anyone, say, 'Indeed, I have vowed to the Most Merciful abstention, so I will not speak today to [any] man.'\"",
          "citation": "Surah 19 &middot; Verses 24-26 &middot; Saheeh International"
        },
        {
          "t": "tafsir",
          "text": "Ibn Kathir records that Maryam accepted the decree of her Lord, and the predecessors mention that Jibril blew into the opening of her garment and she conceived by the leave of Allah; and that the pains of labour compelled her to the trunk of the palm tree in the place of her seclusion.",
          "href": "https://quran.com/19:23/tafsirs/en-tafisr-ibn-kathir",
          "label": "Tafsir Ibn Kathir on 19:22-23 &middot; quran.com"
        }
      ]
    },
    {
      "id": "scene-3",
      "ariaLabel": "Scene 3: The Baby Defends Her",
      "title": "The Baby Defends Her",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 3 of 8"
        },
        {
          "t": "h2",
          "html": "The Baby Defends Her"
        },
        {
          "t": "p",
          "html": "The reception was everything she feared. Then she brought him to her people, carrying him. They said: O Maryam, you have certainly done something unprecedented. O sister of Harun, your father was not a man of evil, nor was your mother unchaste. The town indicted her with her own family's good name. And Maryam, bound by her vow, said nothing at all. She pointed at the baby.",
          "cls": "dropcap"
        },
        {
          "t": "p",
          "html": "So they protested: How can we talk to one who is a child in the cradle? And heaven's defence counsel opened his eyes and spoke. Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet. And He has made me blessed wherever I am, and has enjoined upon me prayer and charity as long as I live, and made me dutiful to my mother, and not a disobedient tyrant. And peace is on me the day I was born, and the day I will die, and the day I am raised alive. It is the shortest autobiography ever given and the most complete: servant first, prophet second, dutiful son always. The accusations died in the cradle with the speech that replaced them. Some still muttered about tricks, but Maryam's harassment ended that day, ended by her son's first sermon, delivered before he could sit up."
        },
        {
          "t": "verse",
          "ref": "Quran 19:27-29",
          "arabic": "فَأَتَتْ بِهِۦ قَوْمَهَا تَحْمِلُهُۥ ۖ قَالُوا۟ يَـٰمَرْيَمُ لَقَدْ جِئْتِ شَيْـًٔا فَرِيًّا يَـٰٓأُخْتَ هَـٰرُونَ مَا كَانَ أَبُوكِ ٱمْرَأَ سَوْءٍ وَمَا كَانَتْ أُمُّكِ بَغِيًّا فَأَشَارَتْ إِلَيْهِ ۖ قَالُوا۟ كَيْفَ نُكَلِّمُ مَن كَانَ فِى ٱلْمَهْدِ صَبِيًّا",
          "translation": "Then she brought him to her people, carrying him. They said, \"O Mary, you have certainly done a thing unprecedented. O sister [i.e., descendant] of Aaron, your father was not a man of evil, nor was your mother unchaste.\" So she pointed to him. They said, \"How can we speak to one who is in the cradle a child?\"",
          "citation": "Surah 19 &middot; Verses 27-29 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 19:30-31",
          "arabic": "قَالَ إِنِّى عَبْدُ ٱللَّهِ ءَاتَىٰنِىَ ٱلْكِتَـٰبَ وَجَعَلَنِى نَبِيًّا وَجَعَلَنِى مُبَارَكًا أَيْنَ مَا كُنتُ وَأَوْصَـٰنِى بِٱلصَّلَوٰةِ وَٱلزَّكَوٰةِ مَا دُمْتُ حَيًّا",
          "translation": "[Jesus] said, \"Indeed, I am the servant of Allāh. He has given me the Scripture and made me a prophet. And He has made me blessed wherever I am and has enjoined upon me prayer and zakāh as long as I remain alive",
          "citation": "Surah 19 &middot; Verses 30-31 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 19:32-33",
          "arabic": "وَبَرًّۢا بِوَٰلِدَتِى وَلَمْ يَجْعَلْنِى جَبَّارًا شَقِيًّا وَٱلسَّلَـٰمُ عَلَىَّ يَوْمَ وُلِدتُّ وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا",
          "translation": "And [made me] dutiful to my mother, and He has not made me a wretched tyrant. And peace is on me the day I was born and the day I will die and the day I am raised alive.\"",
          "citation": "Surah 19 &middot; Verses 32-33 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-4",
      "ariaLabel": "Scene 4: A Prophet Among the Priests",
      "title": "A Prophet Among the Priests",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 4 of 8"
        },
        {
          "t": "h2",
          "html": "A Prophet Among the Priests"
        },
        {
          "t": "p",
          "html": "Isa (AS) grew into a boy who walked into the temple courts and debated the rabbis, questioning men three times his age until their scholarship ran out and their tempers began. He was not sent to abolish the Torah, he told them, but to confirm it and to strip away the additions men had bolted onto it, the loopholes, the markets, the Sabbath hardened into cruelty, a temple court converted into a livestock exchange where the poor were priced out of their own sacrifices. He preached the opposite economics to theirs: do not hoard, give, forgive, show mercy to people and to creatures. Allah is my Lord and your Lord, so worship Him. That is the straight path.",
          "cls": "dropcap"
        },
        {
          "t": "p",
          "html": "He saw through the establishment of his day with a surgeon's eye. They taught about Allah without doing anything for the love of Allah. When they dragged a sinful woman before him as a legal trap, asking whether the law's penalty should fall, he answered with the sentence that has disarmed every lynch mob since: whoever among you is without sin can cast the stone. The priests, whose ledgers were fuller than hers, put down their arguments and left, and the woman who stayed behind received from him not a sentence but a prayer for her forgiveness. The high priests drew the correct conclusion about their real problem. This man was not competing for their temple. He was making it unnecessary, and they began to conspire in earnest."
        }
      ]
    },
    {
      "id": "scene-5",
      "ariaLabel": "Scene 5: By My Leave",
      "title": "By My Leave",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 5 of 8"
        },
        {
          "t": "h2",
          "html": "By My Leave"
        },
        {
          "t": "p",
          "html": "Allah had armed His messenger with signs fitted to his audience's pride. Israel's doctors boasted of medicine, so Isa (AS), by Allah's leave, healed the blind from birth and the leper, cases no physician touched. Their scholars boasted of knowledge, so he told men what they had eaten and what they had stored in their houses. And by Allah's leave he fashioned a bird from clay, breathed into it, and it became a bird, and he raised the dead, by Allah's leave again. The phrase matters, and Allah repeats it in the inventory: by My leave, by My leave, by My leave. When Allah recounts the miracles to him, the framing is gratitude, not glory: O Isa, son of Maryam, remember My favour upon you and upon your mother, when I supported you with the Pure Spirit... and restrained the Children of Israel from you when you came to them with clear proofs, yet the disbelievers said: this is nothing but obvious magic.",
          "cls": "dropcap"
        },
        {
          "t": "p",
          "html": "The commentators tell of the dead raised, and of the sceptics' last challenge: those died recently, perhaps they only fainted; raise us Sam, the son of Nuh (AS), dead for millennia. The story says Isa (AS) had them lead him to the grave, called on Allah, and Sam climbed out grey-haired, explaining that the terror of thinking the Resurrection had come had whitened his hair. True or embroidered, its lesson is the Quran's own: the miracle was never the prophet's possession. The power belonged to the One who kept saying by My leave, and the magician accusation missed the man entirely. He was a conduit on his knees, not a god on display."
        },
        {
          "t": "verse",
          "ref": "Quran 3:48-49",
          "arabic": "وَيُعَلِّمُهُ ٱلْكِتَـٰبَ وَٱلْحِكْمَةَ وَٱلتَّوْرَىٰةَ وَٱلْإِنجِيلَ وَرَسُولًا إِلَىٰ بَنِىٓ إِسْرَٰٓءِيلَ أَنِّى قَدْ جِئْتُكُم بِـَٔايَةٍ مِّن رَّبِّكُمْ ۖ أَنِّىٓ أَخْلُقُ لَكُم مِّنَ ٱلطِّينِ كَهَيْـَٔةِ ٱلطَّيْرِ فَأَنفُخُ فِيهِ فَيَكُونُ طَيْرًۢا بِإِذْنِ ٱللَّهِ ۖ وَأُبْرِئُ ٱلْأَكْمَهَ وَٱلْأَبْرَصَ وَأُحْىِ ٱلْمَوْتَىٰ بِإِذْنِ ٱللَّهِ ۖ وَأُنَبِّئُكُم بِمَا تَأْكُلُونَ وَمَا تَدَّخِرُونَ فِى بُيُوتِكُمْ ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَةً لَّكُمْ إِن كُنتُم مُّؤْمِنِينَ",
          "translation": "And He will teach him writing and wisdom<sup foot_note=196053>1</sup> and the Torah and the Gospel And [make him] a messenger to the Children of Israel, [who will say], 'Indeed I have come to you with a sign from your Lord in that I design for you from clay [that which is] like the form of a bird, then I breathe into it and it becomes a bird by permission of Allāh. And I cure the blind [from birth] and the leper, and I give life to the dead - by permission of Allāh. And I inform you of what you eat and what you store in your houses. Indeed in that is a sign for you, if you are believers.",
          "citation": "Surah 3 &middot; Verses 48-49 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 3:50-51",
          "arabic": "وَمُصَدِّقًا لِّمَا بَيْنَ يَدَىَّ مِنَ ٱلتَّوْرَىٰةِ وَلِأُحِلَّ لَكُم بَعْضَ ٱلَّذِى حُرِّمَ عَلَيْكُمْ ۚ وَجِئْتُكُم بِـَٔايَةٍ مِّن رَّبِّكُمْ فَٱتَّقُوا۟ ٱللَّهَ وَأَطِيعُونِ إِنَّ ٱللَّهَ رَبِّى وَرَبُّكُمْ فَٱعْبُدُوهُ ۗ هَـٰذَا صِرَٰطٌ مُّسْتَقِيمٌ",
          "translation": "And [I have come] confirming what was before me of the Torah and to make lawful for you some of what was forbidden to you. And I have come to you with a sign from your Lord, so fear Allāh and obey me. Indeed, Allāh is my Lord and your Lord, so worship Him. That is the straight path.'\"",
          "citation": "Surah 3 &middot; Verses 50-51 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 5:110",
          "arabic": "إِذْ قَالَ ٱللَّهُ يَـٰعِيسَى ٱبْنَ مَرْيَمَ ٱذْكُرْ نِعْمَتِى عَلَيْكَ وَعَلَىٰ وَٰلِدَتِكَ إِذْ أَيَّدتُّكَ بِرُوحِ ٱلْقُدُسِ تُكَلِّمُ ٱلنَّاسَ فِى ٱلْمَهْدِ وَكَهْلًا ۖ وَإِذْ عَلَّمْتُكَ ٱلْكِتَـٰبَ وَٱلْحِكْمَةَ وَٱلتَّوْرَىٰةَ وَٱلْإِنجِيلَ ۖ وَإِذْ تَخْلُقُ مِنَ ٱلطِّينِ كَهَيْـَٔةِ ٱلطَّيْرِ بِإِذْنِى فَتَنفُخُ فِيهَا فَتَكُونُ طَيْرًۢا بِإِذْنِى ۖ وَتُبْرِئُ ٱلْأَكْمَهَ وَٱلْأَبْرَصَ بِإِذْنِى ۖ وَإِذْ تُخْرِجُ ٱلْمَوْتَىٰ بِإِذْنِى ۖ وَإِذْ كَفَفْتُ بَنِىٓ إِسْرَٰٓءِيلَ عَنكَ إِذْ جِئْتَهُم بِٱلْبَيِّنَـٰتِ فَقَالَ ٱلَّذِينَ كَفَرُوا۟ مِنْهُمْ إِنْ هَـٰذَآ إِلَّا سِحْرٌ مُّبِينٌ",
          "translation": "[The Day] when Allāh will say, \"O Jesus, Son of Mary, remember My favor upon you and upon your mother when I supported you with the Pure Spirit [i.e., the angel Gabriel] and you spoke to the people in the cradle and in maturity; and [remember] when I taught you writing and wisdom and the Torah and the Gospel; and when you designed from clay [what was] like the form of a bird with My permission, then you breathed into it, and it became a bird with My permission; and you healed the blind [from birth] and the leper with My permission; and when you brought forth the dead with My permission; and when I restrained the Children of Israel from [killing] you when you came to them with clear proofs and those who disbelieved among them said, \"This is not but obvious magic.\"",
          "citation": "Surah 5 &middot; Verse 110 &middot; Saheeh International"
        },
        {
          "t": "tafsir",
          "text": "Ibn Kathir explains that Allah made the infant's speech in the cradle a testimony that cleared his mother of what the unjust liars accused her of, and that He supported Isa (AS) with Ruh al-Qudus, Jibril, and taught him the Book, the wisdom, the Tawrah that came to Musa (AS), and the Injil given to him.",
          "href": "https://quran.com/5:110/tafsirs/en-tafisr-ibn-kathir",
          "label": "Tafsir Ibn Kathir on 5:110 &middot; quran.com"
        },
        {
          "t": "verse",
          "ref": "Quran 61:6",
          "arabic": "وَإِذْ قَالَ عِيسَى ٱبْنُ مَرْيَمَ يَـٰبَنِىٓ إِسْرَٰٓءِيلَ إِنِّى رَسُولُ ٱللَّهِ إِلَيْكُم مُّصَدِّقًا لِّمَا بَيْنَ يَدَىَّ مِنَ ٱلتَّوْرَىٰةِ وَمُبَشِّرًۢا بِرَسُولٍ يَأْتِى مِنۢ بَعْدِى ٱسْمُهُۥٓ أَحْمَدُ ۖ فَلَمَّا جَآءَهُم بِٱلْبَيِّنَـٰتِ قَالُوا۟ هَـٰذَا سِحْرٌ مُّبِينٌ",
          "translation": "And [mention] when Jesus, the son of Mary, said, \"O Children of Israel, indeed I am the messenger of Allāh to you confirming what came before me of the Torah and bringing good tidings of a messenger to come after me, whose name is Aḥmad.\"<sup foot_note=197552>1</sup> But when he came to them with clear evidences, they said, \"This is obvious magic.\"<sup foot_note=197551>2</sup>",
          "citation": "Surah 61 &middot; Verse 6 &middot; Saheeh International"
        }
      ]
    },
    {
      "id": "scene-6",
      "ariaLabel": "Scene 6: The Table From Heaven",
      "title": "The Table From Heaven",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 6 of 8"
        },
        {
          "t": "h2",
          "html": "The Table From Heaven"
        },
        {
          "t": "p",
          "html": "The fifth surah of the Quran takes its name from his strangest miracle: Al-Ma'idah, the Table Spread. After a long fast, his disciples came to him with a request that the commentators read as one miracle too many. O Isa, son of Maryam, can your Lord send down to us a table spread with food from heaven? Isa (AS) rebuked the phrasing, not the hunger: Fear Allah, if you are believers. They explained themselves: We want to eat from it, and let our hearts be reassured, and know that you have been truthful to us, and be among its witnesses. So he prayed the prayer Allah preserved word for word: O Allah, our Lord, send down to us a table spread from heaven, to be a festival for us, for the first of us and the last of us, and a sign from You. And provide for us, and You are the best of providers.",
          "cls": "dropcap"
        },
        {
          "t": "p",
          "html": "Allah answered with a blessing and a threat welded together: Indeed, I will send it down to you. But whoever disbelieves afterwards from among you, I will punish him with a punishment by which I have not punished anyone among the worlds. The table descended, and the reports say thousands ate from it and it was not exhausted. But the warning hung over the feast like smoke over a lamp. A sign is not a toy. The generation that received the most miracles in Israel's history after Musa (AS) was being told that evidence multiplies responsibility, and gratitude, not appetite, is the only safe response to a table from heaven."
        },
        {
          "t": "verse",
          "ref": "Quran 3:52",
          "arabic": "فَلَمَّآ أَحَسَّ عِيسَىٰ مِنْهُمُ ٱلْكُفْرَ قَالَ مَنْ أَنصَارِىٓ إِلَى ٱللَّهِ ۖ قَالَ ٱلْحَوَارِيُّونَ نَحْنُ أَنصَارُ ٱللَّهِ ءَامَنَّا بِٱللَّهِ وَٱشْهَدْ بِأَنَّا مُسْلِمُونَ",
          "translation": "But when Jesus felt [persistence in] disbelief from them, he said, \"Who are my supporters for [the cause of] Allāh?\" The disciples said, \"We are supporters for Allāh. We have believed in Allāh and testify that we are Muslims [submitting to Him].",
          "citation": "Surah 3 &middot; Verse 52 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 5:112-113",
          "arabic": "إِذْ قَالَ ٱلْحَوَارِيُّونَ يَـٰعِيسَى ٱبْنَ مَرْيَمَ هَلْ يَسْتَطِيعُ رَبُّكَ أَن يُنَزِّلَ عَلَيْنَا مَآئِدَةً مِّنَ ٱلسَّمَآءِ ۖ قَالَ ٱتَّقُوا۟ ٱللَّهَ إِن كُنتُم مُّؤْمِنِينَ قَالُوا۟ نُرِيدُ أَن نَّأْكُلَ مِنْهَا وَتَطْمَئِنَّ قُلُوبُنَا وَنَعْلَمَ أَن قَدْ صَدَقْتَنَا وَنَكُونَ عَلَيْهَا مِنَ ٱلشَّـٰهِدِينَ",
          "translation": "[And remember] when the disciples said, \"O Jesus, Son of Mary, can your Lord<sup foot_note=196214>1</sup> send down to us a table [spread with food] from the heaven?\" [Jesus] said, \"Fear Allāh, if you should be believers.\" They said, \"We wish to eat from it and let our hearts be reassured and know that you have been truthful to us and be among its witnesses.\"",
          "citation": "Surah 5 &middot; Verses 112-113 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 5:114-115",
          "arabic": "قَالَ عِيسَى ٱبْنُ مَرْيَمَ ٱللَّهُمَّ رَبَّنَآ أَنزِلْ عَلَيْنَا مَآئِدَةً مِّنَ ٱلسَّمَآءِ تَكُونُ لَنَا عِيدًا لِّأَوَّلِنَا وَءَاخِرِنَا وَءَايَةً مِّنكَ ۖ وَٱرْزُقْنَا وَأَنتَ خَيْرُ ٱلرَّٰزِقِينَ قَالَ ٱللَّهُ إِنِّى مُنَزِّلُهَا عَلَيْكُمْ ۖ فَمَن يَكْفُرْ بَعْدُ مِنكُمْ فَإِنِّىٓ أُعَذِّبُهُۥ عَذَابًا لَّآ أُعَذِّبُهُۥٓ أَحَدًا مِّنَ ٱلْعَـٰلَمِينَ",
          "translation": "Said Jesus, the son of Mary, \"O Allāh, our Lord, send down to us a table [spread with food] from the heaven to be for us a festival for the first of us and the last of us and a sign from You. And provide for us, and You are the best of providers.\" Allāh said, \"Indeed, I will send it down to you, but whoever disbelieves afterwards from among you - then indeed will I punish him with a punishment by which I have not punished anyone among the worlds.\"",
          "citation": "Surah 5 &middot; Verses 114-115 &middot; Saheeh International"
        },
        {
          "t": "tafsir",
          "text": "Ibn Kathir records that some of the scholars said the disciples asked for the table in their need and poverty, that they might eat from it each day and be strengthened for worship; and that Isa (AS) warned them the request could become a trial for them, telling them to trust in Allah for their provision if they were truly believers.",
          "href": "https://quran.com/5:112/tafsirs/en-tafisr-ibn-kathir",
          "label": "Tafsir Ibn Kathir on 5:112 &middot; quran.com"
        }
      ]
    },
    {
      "id": "scene-7",
      "ariaLabel": "Scene 7: They Did Not Kill Him",
      "title": "They Did Not Kill Him",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 7 of 8"
        },
        {
          "t": "h2",
          "html": "They Did Not Kill Him"
        },
        {
          "t": "p",
          "html": "The conspiracy matured the way such conspiracies do: slander first, then procedure. Sorcerer, lawbreaker, devil's ally; when the labels failed to shrink his following, the priests took their case to the Roman governor, dressing a preacher of mercy as a security threat, since Rome held the power of execution and the priests did not. The governor ordered the arrest. The Quran does not name the betrayer in his inner circle; later exegetes believed it was the traitor himself whose face was made to resemble Isa (AS), and that he was seized and crucified in his master's place while Isa (AS) was raised. Allah knows what truly transpired in that upper room, and the Quran says only what heaven needed on the record.",
          "cls": "dropcap"
        },
        {
          "t": "p",
          "html": "And for their saying: Indeed, we have killed the Messiah, Isa the son of Maryam, the messenger of Allah. But they did not kill him, nor did they crucify him, but it was made to appear so to them. And indeed, those who differ over it are in doubt about it. They have no knowledge of it except the following of assumption. And they did not kill him, for certain. Rather, Allah raised him to Himself. Allah had already told him: O Isa, indeed I will take you and raise you to Myself and purify you from those who disbelieve, and make those who follow you above those who disbelieve until the Day of Resurrection. He ascended in his thirties, not defeated but retrieved, and Muslims await what the Prophet Muhammad ﷺ foretold: that the son of Maryam will descend again as a just judge, in an age drowning in wealth and error, before the final Hour. The cross they built for him stayed empty of him. The man of peace will finish his story in person."
        },
        {
          "t": "verse",
          "ref": "Quran 4:157-158",
          "arabic": "وَقَوْلِهِمْ إِنَّا قَتَلْنَا ٱلْمَسِيحَ عِيسَى ٱبْنَ مَرْيَمَ رَسُولَ ٱللَّهِ وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ وَلَـٰكِن شُبِّهَ لَهُمْ ۚ وَإِنَّ ٱلَّذِينَ ٱخْتَلَفُوا۟ فِيهِ لَفِى شَكٍّ مِّنْهُ ۚ مَا لَهُم بِهِۦ مِنْ عِلْمٍ إِلَّا ٱتِّبَاعَ ٱلظَّنِّ ۚ وَمَا قَتَلُوهُ يَقِينًۢا بَل رَّفَعَهُ ٱللَّهُ إِلَيْهِ ۚ وَكَانَ ٱللَّهُ عَزِيزًا حَكِيمًا",
          "translation": "And [for] their saying, \"Indeed, we have killed the Messiah, Jesus the son of Mary, the messenger of Allāh.\" And they did not kill him, nor did they crucify him; but [another] was made to resemble him to them. And indeed, those who differ over it are in doubt about it. They have no knowledge of it except the following of assumption. And they did not kill him, for certain.<sup foot_note=196159>1</sup> Rather, Allāh raised him to Himself. And ever is Allāh Exalted in Might and Wise.",
          "citation": "Surah 4 &middot; Verses 157-158 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 3:55",
          "arabic": "إِذْ قَالَ ٱللَّهُ يَـٰعِيسَىٰٓ إِنِّى مُتَوَفِّيكَ وَرَافِعُكَ إِلَىَّ وَمُطَهِّرُكَ مِنَ ٱلَّذِينَ كَفَرُوا۟ وَجَاعِلُ ٱلَّذِينَ ٱتَّبَعُوكَ فَوْقَ ٱلَّذِينَ كَفَرُوٓا۟ إِلَىٰ يَوْمِ ٱلْقِيَـٰمَةِ ۖ ثُمَّ إِلَىَّ مَرْجِعُكُمْ فَأَحْكُمُ بَيْنَكُمْ فِيمَا كُنتُمْ فِيهِ تَخْتَلِفُونَ",
          "translation": "[Mention] when Allāh said, \"O Jesus, indeed I will take you and raise you to Myself and purify [i.e., free] you from those who disbelieve and make those who follow you [in submission to Allāh alone] superior to those who disbelieve until the Day of Resurrection. Then to Me is your return, and I will judge between you concerning that in which you used to differ.",
          "citation": "Surah 3 &middot; Verse 55 &middot; Saheeh International"
        },
        {
          "t": "tafsir",
          "text": "Ibn Kathir says they did not kill him with certainty; rather they were in doubt and confusion over the matter. Instead, Allah raised him up to Himself, and He is the Almighty whom no one who seeks refuge in Him will ever see disgraced, All-Wise in all that He decides and ordains for His creatures.",
          "href": "https://quran.com/4:157/tafsirs/en-tafisr-ibn-kathir",
          "label": "Tafsir Ibn Kathir on 4:157-158 &middot; quran.com"
        },
        {
          "t": "verse",
          "ref": "Quran 43:61",
          "arabic": "وَإِنَّهُۥ لَعِلْمٌ لِّلسَّاعَةِ فَلَا تَمْتَرُنَّ بِهَا وَٱتَّبِعُونِ ۚ هَـٰذَا صِرَٰطٌ مُّسْتَقِيمٌ",
          "translation": "And indeed, he [i.e., Jesus] will be [a sign for] knowledge of the Hour, so be not in doubt of it, and follow Me.<sup foot_note=197333>1</sup> This is a straight path.",
          "citation": "Surah 43 &middot; Verse 61 &middot; Saheeh International"
        },
        {
          "t": "tafsir",
          "text": "Ibn Kathir records that the correct reading of this verse is that it points to his descent before the Day of Resurrection, as Abu Hurayrah, Ibn Abbas, Mujahid, Qatadah and others said; and that the miracles granted at his hands are also sufficient as signs that the Hour approaches.",
          "href": "https://quran.com/43:61/tafsirs/en-tafisr-ibn-kathir",
          "label": "Tafsir Ibn Kathir on 43:61 &middot; quran.com"
        },
        {
          "t": "hadith",
          "text": "&ldquo;By Him in Whose Hands my soul is, surely (Jesus,) the son of Mary will soon descend amongst you and will judge mankind justly (as a Just Ruler); he will break the Cross and kill the pigs and there will be no Jizya (i.e. taxation taken from non Muslims). Money will be in abundance so that nobody will accept it, and a single prostration to Allah (in prayer) will be better than the whole world and whatever is in it.&rdquo;",
          "narrator": "Narrated Abu Huraira",
          "href": "https://sunnah.com/bukhari:3448",
          "label": "Sahih al-Bukhari 3448 &middot; sunnah.com"
        }
      ]
    },
    {
      "id": "scene-8",
      "ariaLabel": "Scene 8: A Messenger, Not a God",
      "title": "A Messenger, Not a God",
      "blocks": [
        {
          "t": "kicker",
          "html": "Scene 8 of 8"
        },
        {
          "t": "h2",
          "html": "A Messenger, Not a God"
        },
        {
          "t": "p",
          "html": "Islam's quarrel with what became of his message is a quarrel between two wrong directions. His own people denied him outright, and later generations of his followers exaggerated him out of humanity altogether, until a servant who ate food and prayed and wept became, in their telling, a god. Isa (AS) never claimed it. None of his disciples thought it. The Quran addresses the exaggeration with a father's gentleness and a judge's clarity: O People of the Scripture, do not commit excess in your religion or say about Allah except the truth. The Messiah, Isa the son of Maryam, was but a messenger of Allah and His word which He directed to Maryam and a spirit from Him. So believe in Allah and His messengers, and do not say 'Three.' Desist; it is better for you. Indeed, Allah is but one God. Exalted is He above having a son.",
          "cls": "dropcap"
        },
        {
          "t": "p",
          "html": "Muhammad ﷺ, the final messenger, saw the trap from inside his own community and barred it with the same logic: Do not exaggerate in praising me as the Christians praised the son of Maryam, for I am only a slave. So call me the slave of Allah and His messenger. Between Maryam's cradle and Muhammad's ﷺ warning lies the Quran's whole doctrine of Isa (AS): a Word from Allah, a spirit from Him, a prophet who healed by leave and will return by command, and a servant whose highest title is the one he gave himself in his first sentence on earth. Indeed, I am the servant of Allah."
        },
        {
          "t": "verse",
          "ref": "Quran 3:59",
          "arabic": "إِنَّ مَثَلَ عِيسَىٰ عِندَ ٱللَّهِ كَمَثَلِ ءَادَمَ ۖ خَلَقَهُۥ مِن تُرَابٍ ثُمَّ قَالَ لَهُۥ كُن فَيَكُونُ",
          "translation": "Indeed, the example of Jesus to Allāh<sup foot_note=196054>1</sup> is like that of Adam. He created him from dust; then He said to him, \"Be,\" and he was.",
          "citation": "Surah 3 &middot; Verse 59 &middot; Saheeh International"
        },
        {
          "t": "tafsir",
          "text": "Ibn Kathir explains the fourfold pattern: Adam was created without father or mother, Hawa from a male without a female, and Isa (AS) from a mother without a father, beside the rest of mankind created from male and female. If being fatherless made a man more than human, he says, the claim would fit Adam even more, and since it is false for Adam it is falser still for Isa (AS).",
          "href": "https://quran.com/3:59/tafsirs/en-tafisr-ibn-kathir",
          "label": "Tafsir Ibn Kathir on 3:59 &middot; quran.com"
        },
        {
          "t": "verse",
          "ref": "Quran 4:171",
          "arabic": "يَـٰٓأَهْلَ ٱلْكِتَـٰبِ لَا تَغْلُوا۟ فِى دِينِكُمْ وَلَا تَقُولُوا۟ عَلَى ٱللَّهِ إِلَّا ٱلْحَقَّ ۚ إِنَّمَا ٱلْمَسِيحُ عِيسَى ٱبْنُ مَرْيَمَ رَسُولُ ٱللَّهِ وَكَلِمَتُهُۥٓ أَلْقَىٰهَآ إِلَىٰ مَرْيَمَ وَرُوحٌ مِّنْهُ ۖ فَـَٔامِنُوا۟ بِٱللَّهِ وَرُسُلِهِۦ ۖ وَلَا تَقُولُوا۟ ثَلَـٰثَةٌ ۚ ٱنتَهُوا۟ خَيْرًا لَّكُمْ ۚ إِنَّمَا ٱللَّهُ إِلَـٰهٌ وَٰحِدٌ ۖ سُبْحَـٰنَهُۥٓ أَن يَكُونَ لَهُۥ وَلَدٌ ۘ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَكَفَىٰ بِٱللَّهِ وَكِيلًا",
          "translation": "O People of the Scripture, do not commit excess in your religion<sup foot_note=196162>1</sup> or say about Allāh except the truth. The Messiah, Jesus the son of Mary, was but a messenger of Allāh and His word which He directed to Mary and a soul [created at a command] from Him. So believe in Allāh and His messengers. And do not say, \"Three\"; desist - it is better for you. Indeed, Allāh is but one God. Exalted is He above having a son. To Him belongs whatever is in the heavens and whatever is on the earth. And sufficient is Allāh as Disposer of affairs.",
          "citation": "Surah 4 &middot; Verse 171 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 5:72",
          "arabic": "لَقَدْ كَفَرَ ٱلَّذِينَ قَالُوٓا۟ إِنَّ ٱللَّهَ هُوَ ٱلْمَسِيحُ ٱبْنُ مَرْيَمَ ۖ وَقَالَ ٱلْمَسِيحُ يَـٰبَنِىٓ إِسْرَٰٓءِيلَ ٱعْبُدُوا۟ ٱللَّهَ رَبِّى وَرَبَّكُمْ ۖ إِنَّهُۥ مَن يُشْرِكْ بِٱللَّهِ فَقَدْ حَرَّمَ ٱللَّهُ عَلَيْهِ ٱلْجَنَّةَ وَمَأْوَىٰهُ ٱلنَّارُ ۖ وَمَا لِلظَّـٰلِمِينَ مِنْ أَنصَارٍ",
          "translation": "They have certainly disbelieved who say, \"Allāh is the Messiah, the son of Mary\" while the Messiah has said, \"O Children of Israel, worship Allāh, my Lord and your Lord.\" Indeed, he who associates others with Allāh - Allāh has forbidden him Paradise, and his refuge is the Fire. And there are not for the wrongdoers any helpers.",
          "citation": "Surah 5 &middot; Verse 72 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 5:75",
          "arabic": "مَّا ٱلْمَسِيحُ ٱبْنُ مَرْيَمَ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ ٱلرُّسُلُ وَأُمُّهُۥ صِدِّيقَةٌ ۖ كَانَا يَأْكُلَانِ ٱلطَّعَامَ ۗ ٱنظُرْ كَيْفَ نُبَيِّنُ لَهُمُ ٱلْـَٔايَـٰتِ ثُمَّ ٱنظُرْ أَنَّىٰ يُؤْفَكُونَ",
          "translation": "The Messiah, son of Mary, was not but a messenger; [other] messengers have passed on before him. And his mother was a supporter of truth. They both used to eat food.<sup foot_note=196202>1</sup> Look how We make clear to them the signs; then look how they are deluded.",
          "citation": "Surah 5 &middot; Verse 75 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 5:116-117",
          "arabic": "وَإِذْ قَالَ ٱللَّهُ يَـٰعِيسَى ٱبْنَ مَرْيَمَ ءَأَنتَ قُلْتَ لِلنَّاسِ ٱتَّخِذُونِى وَأُمِّىَ إِلَـٰهَيْنِ مِن دُونِ ٱللَّهِ ۖ قَالَ سُبْحَـٰنَكَ مَا يَكُونُ لِىٓ أَنْ أَقُولَ مَا لَيْسَ لِى بِحَقٍّ ۚ إِن كُنتُ قُلْتُهُۥ فَقَدْ عَلِمْتَهُۥ ۚ تَعْلَمُ مَا فِى نَفْسِى وَلَآ أَعْلَمُ مَا فِى نَفْسِكَ ۚ إِنَّكَ أَنتَ عَلَّـٰمُ ٱلْغُيُوبِ مَا قُلْتُ لَهُمْ إِلَّا مَآ أَمَرْتَنِى بِهِۦٓ أَنِ ٱعْبُدُوا۟ ٱللَّهَ رَبِّى وَرَبَّكُمْ ۚ وَكُنتُ عَلَيْهِمْ شَهِيدًا مَّا دُمْتُ فِيهِمْ ۖ فَلَمَّا تَوَفَّيْتَنِى كُنتَ أَنتَ ٱلرَّقِيبَ عَلَيْهِمْ ۚ وَأَنتَ عَلَىٰ كُلِّ شَىْءٍ شَهِيدٌ",
          "translation": "And [beware the Day] when Allāh will say, \"O Jesus, Son of Mary, did you say to the people, 'Take me and my mother as deities besides Allāh?'\" He will say, \"Exalted are You! It was not for me to say that to which I have no right. If I had said it, You would have known it. You know what is within myself, and I do not know what is within Yourself. Indeed, it is You who is Knower of the unseen. I said not to them except what You commanded me - to worship Allāh, my Lord and your Lord. And I was a witness over them as long as I was among them; but when You took me up, You were the Observer over them, and You are, over all things, Witness.",
          "citation": "Surah 5 &middot; Verses 116-117 &middot; Saheeh International"
        },
        {
          "t": "verse",
          "ref": "Quran 19:34-36",
          "arabic": "ذَٰلِكَ عِيسَى ٱبْنُ مَرْيَمَ ۚ قَوْلَ ٱلْحَقِّ ٱلَّذِى فِيهِ يَمْتَرُونَ مَا كَانَ لِلَّهِ أَن يَتَّخِذَ مِن وَلَدٍ ۖ سُبْحَـٰنَهُۥٓ ۚ إِذَا قَضَىٰٓ أَمْرًا فَإِنَّمَا يَقُولُ لَهُۥ كُن فَيَكُونُ وَإِنَّ ٱللَّهَ رَبِّى وَرَبُّكُمْ فَٱعْبُدُوهُ ۚ هَـٰذَا صِرَٰطٌ مُّسْتَقِيمٌ",
          "translation": "That is Jesus, the son of Mary - the word of truth about which they are in dispute. It is not [befitting] for Allāh to take a son; exalted is He!<sup foot_note=196724>1</sup> When He decrees an affair, He only says to it, \"Be,\" and it is. [Jesus said], \"And indeed, Allāh is my Lord and your Lord, so worship Him. That is a straight path.\"",
          "citation": "Surah 19 &middot; Verses 34-36 &middot; Saheeh International"
        }
      ]
    }
  ],
  "lessons": [
    "<strong>Servant is the highest title.</strong> Isa's (AS) first words from the cradle begin 'I am the servant of Allah'. Every exaggeration about him since has been a demotion from that rank.",
    "<strong>Miracles come 'by My leave'.</strong> The clay bird, the healed blind, the raised dead all carry the same stamp of permission. A sign points past the prophet to the One who sent him; stopping at the sign is the error.",
    "<strong>Evidence multiplies responsibility.</strong> The generation that ate from heaven's table was warned of a punishment like no other if it disbelieved afterwards. More proof does not make faith cheaper; it makes ingratitude dearer.",
    "<strong>Allah retrieves His messengers.</strong> The cross stayed empty of Isa (AS). What men plot against the truth is already inside a larger plot: 'Rather, Allah raised him to Himself.'"
  ],
  "quiz": [
    {
      "q": "How did the Quran say Isa (AS) was like Adam (AS)?",
      "options": [
        "Both built arks",
        "Both were created by Allah's word without the usual parentage",
        "Both lived in Jerusalem"
      ],
      "answer": 1,
      "ref": "Story of Isa (AS)"
    },
    {
      "q": "What three provisions did Maryam receive under the palm tree?",
      "options": [
        "A tent, bread and milk",
        "A stream beneath her, ripe dates from the palm, and a vow of silence for her defence",
        "Angels carrying food"
      ],
      "answer": 1,
      "ref": "Story of Isa (AS)"
    },
    {
      "q": "What were Isa's (AS) first words from the cradle?",
      "options": [
        "I am the son of God",
        "Indeed, I am the servant of Allah; He has given me the Scripture and made me a prophet",
        "Peace be on this house"
      ],
      "answer": 1,
      "ref": "Story of Isa (AS)"
    },
    {
      "q": "What did Isa (AS) say he came to do about the Torah?",
      "options": [
        "Abolish it entirely",
        "Confirm it and restore its true essence from men's additions",
        "Replace it with new tablets"
      ],
      "answer": 1,
      "ref": "Story of Isa (AS)"
    },
    {
      "q": "What phrase does Allah repeat when listing Isa's (AS) miracles?",
      "options": [
        "By his own power",
        "'By My leave', showing the miracles were by Allah's permission",
        "By the priests' approval"
      ],
      "answer": 1,
      "ref": "Story of Isa (AS)"
    },
    {
      "q": "What warning came with the Table Spread from heaven?",
      "options": [
        "Never ask again",
        "Whoever disbelieves after it would face a punishment unlike any ever given",
        "The food would spoil by morning"
      ],
      "answer": 1,
      "ref": "Story of Isa (AS)"
    },
    {
      "q": "What does the Quran say about the crucifixion?",
      "options": [
        "Isa (AS) died and rose after three days",
        "They did not kill him nor crucify him; it was made to appear so, and Allah raised him to Himself",
        "The Quran does not discuss it"
      ],
      "answer": 1,
      "ref": "Story of Isa (AS)"
    },
    {
      "q": "What warning did Muhammad (ﷺ) give his own followers about praise?",
      "options": [
        "Praise no prophet at all",
        "Do not exaggerate in praising me as the Christians praised the son of Maryam; I am only a slave",
        "Praise only in poetry"
      ],
      "answer": 1,
      "ref": "Story of Isa (AS)"
    }
  ],
  "prevNext": [
    {
      "href": "?p=yahya",
      "label": "Previous chapter: XXIII",
      "title": "Yahya (AS): Peace on the Day He Was Born",
      "arrow": "back"
    },
    {
      "href": "?p=muhammad",
      "label": "Next chapter: XXV",
      "title": "Muhammad ﷺ: Mercy to the Worlds",
      "arrow": "next"
    }
  ]
};
