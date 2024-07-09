import { BookData, extractOverallScore } from "@/actions/parse-gr-data"


export const reviewCorrection = (book: BookData): BookData => {
    switch(book.title) {
        case "Tell Me How to Be": {
            book.review = TellMeHowToBe;
            book.overall_score = extractOverallScore(book.review);
            break;
        }
        case "84, Charing Cross Road": {
            book.review = _84CharingCrossRoad;
            book.overall_score = extractOverallScore(book.review);
            break;
        }
        case "A Court of Mist and Fury (A Court of Thorns and Roses, #2)": {
            book.review = ACourtOfMistAndFury;
            book.overall_score = extractOverallScore(book.review);
            break;
        }
        case "Pure Colour": {
            book.review = PureColour;
            book.overall_score = extractOverallScore(book.review);
            break;
        }
        case "A ​Court of Silver Flames (A Court of Thorns and Roses, #4)":
            book.review = ACourtOfSilverFlames;
            book.overall_score = extractOverallScore(book.review);
            break;
        case "Golden Son (Red Rising Saga, #2)":
            book.review = GoldenSun;
            book.overall_score = extractOverallScore(book.review);
            break;
        default: {
            book.review = book.review;
            break;
        }
    }

    return book;
}

const TellMeHowToBe = `I HAVE BEEN SEARCHING FOR THIS BOOK FOR OVER HALF A YEAR AND FINALLY GOT A COPY!

Honestly, this story felt relatable in so many different ways and I really did not expect to feel this way after reading the first quarter of the book. 

The book follows the narration of two characters: Akash, an Indian-American songwriter currently living in Los Angeles, and his mother Renu, and Indian-Tanzanian immigrant who was brought to the U.S. after an arranged marriage to Ashok. Akash and Bijal fly back to their home in Illinois to see their mother and celebrate the one-year remembrance of their father. During their time there, Renu reveals that she sold the house and is moving back to London, where she used to study. As the family remembers their father, they also confront past secrets that they have kept from each other. Renu has a past love that she left in London after being betrothed to Ashok, while Akash has still not come out to his family and is forced to face the mistakes he made to his first love. 

Literally, a quarter way through the book, I was tired of Akash and Renu already because they just seemed absolutely miserable in life. Akash was continuously making terrible decisions and Renu kept putting such high expectations on herself; but overtime, you really see these characters develop to tackle their problems and come to terms with not being perfect. It was so weird to see because they never openly did the "I love myself" type of cliche that is normally seen in American self-reflection, but the result was the same. In this story, it felt true, at least in my experiences, to how many Indians deal with mental-illness, addictions, self-expression, expectations, racism, misogyny, homophobia, classism, and the list goes on. It's like the majority of the experiences my family, relatives, friends, and I were encapsulated nearly perfectly, which is why it felt so relatable. In the end, it's not like everything was perfectly solved, but you do feel content from seeing the progression of this family.

I do wish that Mr. Patel also included the viewpoint of Bijal because as an older brother I did personally relate to how he felt trying to meet the many expectations that were put on him. Also, his current problems with his marriage would have been an excellent addition to how he was feeling while mourning the remembrance of his father and the feelings of losing childhood memories once the house was fully vacant. Akash and Bijal had many fights while they were home, however we only got see Akash's point of view for each dispute. 

It gave the same vibes as reading <i>Dava Shastri's Last Day</i>, which I absolutely loved, but on a much deeper level due to the internal dialogue of Renu and Akash. Waiting for more than half a year to find this book was worth it :) Hoping to read more of Neel Patel's work later!

Overall Score: 4.8/5`


const _84CharingCrossRoad = `It’s a very charming book that just gives you good vibes .

I think Helene as a character is just so humorous and has such a captivating personality through her writing. It’s crazy how well she’s able to create caring friendships by writing mere letters to people she’s never met; especially since they’re literally on a different continent. 

The story follows Helene, a writer in NYC, as she writes letters to inquire about books at a bookstore in London. She ends up building friendships with a majority of the employees at the store; sending them gifts, sharing exciting news, and giving condolences to loss of family and friends. 

I would say there’s no “meat” to the story. It’s a very surface level book that doesn’t bother to dive into the details of each characters life because they were genuine letters that were sent back and forth. As you read you tend to create more background for each character in your own head. 

At times Helene says some wild racist remarks out of nowhere and you just end up sitting there like 😧🤨. But I guess you just gotta expect something like that from people in the 1950’s-1970’s… 

Other than that it was a very cute story and I enjoyed the read. I think it’s a good one time read because there’s nothing really compelling me to read the story again. 

Overall Score: 2.1/5`

const ACourtOfMistAndFury = `BROOO THIS BOOK GOES FROM 0 TO 100 REAL QUICK WTF JUST HAPPENED

I am absolutely flummoxed ;) at how Mrs. Maas got me to completely hate Tamlin in less than 100 pages after I thought he was cool af in the previous book. I think I quite literally despise Tamlin as much as Feyre does, but at the same time I think his character should still be appreciated for his role in book 1 and his actions amplify Rhys' character so much more in this book. STILL, I had no conception of him becoming a despicable snitch by the end of the book. 

Literally, everything about Rhys is cooler; his powers, secrets, childhood lore, and his friends. I absolutely adore Mor, Amren, Azriel, and Cassian. I love that they are a bonded family that still has respect for Rhys as a High Lord; despite each nearly being as powerful as him. I knew Rhys and Feyre were gonna get together from book 1 and I even had someone accidentally spoil that they become a couple, and yet I have to admit how natural the relationship between Feyre and Rhys was compared to Tamlin; which should be the exact feeling since they are literally mates. He's still very meticulous in how he approaches things, but it was never a forced action that Feyre had to take. 

Feyre was an absolute menace by the end of the book. Seeing her go from a broken state at the end of book 1, to slowly healing over time and being able to fight for her loved ones once again was inspiring. The fact that she was able to master a majority of her powers in such a brief time period and use them to fend off Hybern soldiers from Rhys and Velaris was so sick. The way the action unfolds as she utilizes all of her powers at once to fight off the soldiers and completely obliterate the Attor felt like I was visualizing a scene from a Marvel movie. Going from such a powerful state to once again begging on her knees at the mercy of the King of Hybern is very nostalgic from the first book. You would think that she would be broken once again as she is stripped from her mate and watched as her friends and sisters are tortured. But no. She becomes as meticulous as Rhys and decides to get revenge on the people whom she once called home, but are now enemies after they sold out her friends, family, and all of Prythian. 

Once again the vivid world-building that Mrs. Maas does is incredible. As I read the descriptions of the settings, I was able to form clear pictures of the beautiful cities of Velaris and Adriata, the house of the Weaver, the caves of the Bone Crusher, the forests of Prythian, etc. She is truly an expert in this craft. 

For A Court of Thorns and Roses, I said the story was a bit slow at times, but I think this book was perfectly paced. Just the right amount of time between each action point in the plot to dive deep into lore, relationships, world-building, etc. I also mentioned that I did not like how Feyre became an immortal High Fae after dying, and would rather have had Tamlin give up his immortality. But now I totally understand why Mrs. Maas made this decision and it becomes the driving plot of Feyre's future actions.  I think almost every qualm I had in the last book was addressed in this one. Even the Attor and the King of Hybern felt more evil compared to Amarantha in this book. 

Okay, but my actual only problem in this book is how Lucien and Elaine are thrown together as mates right at the end of the book. You have people waiting in line like Azriel and Mor, which I am literally begging to actually happen in the future book, but somehow Lucien of all people finds his mate in the middle of a dramatic scene where Feyre's sisters are unwillingly transformed into High Fae??? Just seems a little out of place, but I predict that it definitely has someway in shaping Lucien's behavior around Tamlin and Feyre in the next book. I am going to rage if Lucien & Elaine or Nesta & Cassian happen before Azriel and Mor. 

ALSO BRO WHY ARE THEY SO FERAL LMAO. Like HUHHHH what was all over the bed Feyre?? 😧HE DID WHAT???  🤨 YOU WANNA WHAT🫨

I am actually exhausted from reading the whole story omg. Like how does she write 400+ pages of amazing storytelling in all of her books? IT TOOK ME A FULL MONTH TO GET THROUGH THIS BOOK AND I READ IT EVERY DAY. I'm genuinely so excited to read the next book but will definitely be reading some shorter stories as a break. Looking forward to Feyre's revenge >:D

Overall Score: 4.8/5`

const PureColour = `I honestly think I'm just too dumb to understand the full context of this story. 

It was definitely beautiful, but in a way that just leaves you dumbfounded and in awe that something so abnormal exists. Like if you've ever been to an art museum and seen an art piece that makes you wonder how tf it qualifies as art, but the more you look at it, it makes sense even though you still don't understand why. That's what this book was like. I kept reading and reading, absorbing some information here and there, but I never got the full context of the book; possibly because I read too literally and this whole novel is a metaphorical universe. 

***This part is a bit of a spoiler, cuz idk how else to explain the book***

For some context, the story follows Mira, an art critic. Mira lives her life at college and meets a woman named Annie - who she eventually falls for. Although enjoying her college life, she feels guilty for being away from her father and not being able to spend time with him. As time goes on, Mira's father's health deteriorates and he eventually passes away with Mira at his bedside. At that moment, his spirit does some crazy things and now his spirit kinda lives within Mira. She faces the stages of grief and tries to mend her wounded soul by taking a trip into nature. She becomes a leaf with her father. Idk how, but somehow she becomes a leaf and she seems to enjoy it. So much so that she does not want to ever go back to being a human. Mira and her father have conversations as they are in leaf form. Mira seeing that this is an option for the afterlife is convinced it's not so bad. Her father attempts to prove to her that it is not her time and that there is so much more she is to experience in her human life. Mira is semi-convinced, but even if she wanted to go back to human form, she doesn't know how. That's when Annie joins the story again and pulls Mira out of the leaf. Annie helps get Mira back on her feet and eventually leaves again. Mira, still in love with Annie, is still struggling to understand their relationship and how she fits in a world without her father. She goes to Annie to confess her love but fails to get the words out. 

Okay, that's as much as I'll explain because I wasn't really satisfied with the ending of the story, but I guess it's kind of happy for Mira. 

***End of spoilers***

The writing of the story itself was genuinely so creative; although, sometimes the way Miss Heti articulated some metaphors had me like 🤨🤨🤨🤨. It was an ethereal type of vibe with no explanation, so every reader's interpretation is unique; which is why I feel so inclined to compare this novel to a literal visual composition of art. Still, it was too complicated for me to fully understand, which is why I can't say it altered my perception of literary work but I can definitely say that I appreciate it. 

I'll probably read this again at some point in my life when I feel smarter. 

Overall Score: 3.0/5`

const GoldenSun = `I have to say this is easily becoming one of my favorite series 🤩

Darrow is becoming such a complex character with multiple internal battles and he can't seem to figure out how to navigate any of them besides becoming the glorious warrior he was created to be. From the start of this novel, we see Darrow have the biggest fall from grace since winning the Passage and graduating from the Institute. He is cast aside like an animal on the street and Nero literally ignores him the whole time. At first you're kinda confused on why Nero switched up on him like that, but you get it as you keep reading and it becomes important to Darrow's redemption. 

At his lowest status among the Golds, he puts on such an amazing act that leaves you enthralled as you read because it becomes the start of soooo much more. It becomes the turning point of friendships, redemptions, betrayals, and most of all, war. The thing is, Darrow doesn't even want to be this warrior of legend that wins the war; but he has to be. Otherwise, all the previous deaths would mean nothing, and his people would suffer the most. 

The only thing I dislike about my whole reading experience is that I get so sad when the side characters I actually enjoy end up dying to become fodder for Darrow's loss. I mean its absolutely needed, but that doesn't mean I don't feel empty inside once they do. Even in the last book, the deaths were necessary for Darrow's growth but man does it suck. What's even crazier is that the majority of them are Gold's, but you kind of forget about how many LowColors actually die. In one the excursions, I think Darrow said literally thousands of LowColors died, but then we immediately move on to some other scene in the next sentence. However, because he is interacting with more LowColors, we are seeing more developed relationships with new LowColor characters as well; which I really like. 

I feel like so much happened in this book, and the ending was way better paced compared to the last book. You don't entirely know what gonna happen, but the feeling of knowing what's going to eventually occur is sprinkled around in the book. The surprise factor is still there and it's a big one.

I seriously can't get enough of this series!

Overall Score: 4.9/5`

const ACourtOfSilverFlames = `Need me a Nesta in my life fr fr 😩

I very much love to see the fall of a character into an eternal demise, but it is very rare that I get to enjoy a character rising to glory. The lack of crazy action in the first 3 parts of the book compared to the last three books didn't turn me away at all. 

Being able to witness Nesta's gradual change, both the ups and the downs, was very enticing. Lowkey I needed a break from the Feyre & Rhysand interactions cuz it was always so perfect, which made me enjoy the chaotic situations/ banter that came with Nesta & Cassian. The slow and GRUELING growth in friendship between Nesta and Cassian is just immaculate. Although they also had the "love at first sight" thing going for them, it was not a smooth process at all. I found it to be admirable that Cassian was always a friend first rather than just a dude that is obsessed with Nesta. The growth in friendships between Gwyn, Emerie, and Nesta were so pure; all facing past tragedies and learning to face them together. The whole bringing back the Valkyrie thing was sick too, the title itself just radiates with power and resilience. Inserting the trio into the Blood Rite was thrilling and really brought out the parallelism to our Illyrian homies. I just wish the Blood Rite was a bit longer, that the trio won together, and the ending of the Blood Rite focused solely on them winning. 

I totally agree with Taneen and Jules. Like wtf was the last 50 pages of this book? Why did we speed run the Blood Rite, the interaction with the queen, and the birth of Nyx??? I would have loved way more detail in the Blood Rite and feel like them winning the Blood Rite would have been a perfect ending to the book. I'm realizing that introducing the villain right at the end of the book and then having them die immediately is a habit of Mrs. Maas. It just doesn't make sense to me to see so much build up and have them "fight" and die within the span of a paragraph. Like this could have been done in the next book and I would have been fine with that. And then for some reason we immediately jump right to Feyre delivering a baby? The description of Nesta becoming the most powerful being in the universe for a brief second and then sacrificing her power was so beautiful, but this will also just get muddled into the mess of the Blood Rite, death of the queen, and birth of Nyx. In my head the perfect ending would have been a celebration of the trio winning the Blood Rite and then a mating ceremony for Nesta and Cassian. 

I do miss the homie interactions though. Like where is Mor? She's kinda just stuck in a location we barely know about. Even with the small amount of content we got with her, I did like the possible foreshadowing between her and Emerie ;) BUT WHEN WILL THE TIME COME FOR MY BOY AZ. HE DESERVES A CHANCE PLEASEEE

Ignoring the last ~50 pages of the book lol, I was thoroughly entertained by every chapter. I am putting this slightly above ACOMAF just based on the best character development I have seen in a long, long time. Very much looking forward to whenever book 5 comes out :D

Overall Score: 4.85/5`