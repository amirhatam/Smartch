// une liste de n entiers positifs uniques aléatoires, 
//on veut trouver un couple (deux éléments) dont la somme égale 110 un entier donné

// const numbers = [10, 20, 14, 17, 23, 25, 35, 54, 49, 70, 30, 44, 39, 13, 77, 22, 56]
// let numberFind = []

// numbers.filter(e => {
//     for (var i = 0; i < numbers.length; i++) {
//         const num = numbers[i]

//         if (e + num === 110) {
//             // console.log("The Numbers ", e, " and ", num, "are equal to 110");
//             return numberFind = [e, num]
//         }
//     }


// })
// console.log("numberFind", numberFind);




const genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

// console.log(genres);

const movies = [
    {
        "adult": false,
        "backdrop_path": "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
        "genre_ids": [
            10751,
            16,
            14,
            35,
            12
        ],
        "id": 585083,
        "original_language": "en",
        "original_title": "Hotel Transylvania: Transformania",
        "overview": "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
        "popularity": 276.105,
        "poster_path": "/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg",
        "release_date": "2022-01-14",
        "title": "Hotel Transylvania: Transformania",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/fCdaIDKCIhsorJE30MvfxIlkqrd.jpg",
        "genre_ids": [
            53,
            27,
            9648
        ],
        "id": 646385,
        "original_language": "en",
        "original_title": "Scream",
        "overview": "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
        "popularity": 129.477,
        "poster_path": "/qvASAp0ZKkza023gjK1Tf2iiEos.jpg",
        "release_date": "2022-01-12",
        "title": "Scream",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/ySVw25hSw6dowquAqV6l0EXWZce.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 818647,
        "original_language": "es",
        "original_title": "A través de mi ventana",
        "overview": "Raquel has had a longtime crush on her hot neighbor, Ares, whom she secretly watches but has never spoken to. Can she make Ares fall in love with her?",
        "popularity": 154.708,
        "poster_path": "/87BbV8DdgKzQKT1avH2VqW2r3dO.jpg",
        "release_date": "2022-02-04",
        "title": "Through My Window",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/oSNqhngemquRBzxKSC3ysAmnC5e.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 522016,
        "original_language": "en",
        "original_title": "The 355",
        "overview": "A group of top female agents from government agencies around the globe try to stop an organization from acquiring a deadly weapon to send the world into chaos.",
        "popularity": 87.292,
        "poster_path": "/xef9Ht77B2igqZv754HNdW8qZCk.jpg",
        "release_date": "2022-01-05",
        "title": "The 355",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 4
    },
    {
        "adult": false,
        "backdrop_path": "/r5Qbs7BXo594RBZzg84Kd5kblJC.jpg",
        "genre_ids": [
            16,
            35,
            12,
            14
        ],
        "id": 774825,
        "original_language": "en",
        "original_title": "The Ice Age Adventures of Buck Wild",
        "overview": "The fearless one-eyed weasel Buck teams up mischievous possum brothers Crash & Eddie as they head off on a new adventure into Buck's home: The Dinosaur World.",
        "popularity": 88.326,
        "poster_path": "/8tjQ20uaIAkNDXAOUumkT2qQnGR.jpg",
        "release_date": "2022-01-28",
        "title": "The Ice Age Adventures of Buck Wild",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/i1S9VYRSsO0FA5fTDjxfIATYzHw.jpg",
        "genre_ids": [
            27
        ],
        "id": 756999,
        "original_language": "en",
        "original_title": "The Black Phone",
        "overview": "Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
        "popularity": 47.297,
        "poster_path": "/wd6WxLLR2w8aAXmLPDW5CN0iSB3.jpg",
        "release_date": "2022-02-02",
        "title": "The Black Phone",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            27
        ],
        "id": 661791,
        "original_language": "es",
        "original_title": "La abuela",
        "overview": "A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke. But spending just a few days with this relative turns into an unexpected nightmare.",
        "popularity": 36.226,
        "poster_path": "/kwW0Dl0pl50Uq1MHuWuIwTehjsm.jpg",
        "release_date": "2022-01-05",
        "title": "The Grandmother",
        "video": false,
        "vote_average": 2,
        "vote_count": 1
    },
    {
        "adult": false,
        "backdrop_path": "/yo0TibseCrwVHDu8AnZ65a0w1Um.jpg",
        "genre_ids": [
            28,
            53,
            80,
            18
        ],
        "id": 766907,
        "original_language": "en",
        "original_title": "American Siege",
        "overview": "An ex-NYPD officer-turned-sheriff of a small rural Georgia town has to contend with a gang of thieves who have taken a wealthy doctor hostage.",
        "popularity": 41.112,
        "poster_path": "/daeVrgyj0ue8qb3AHyU3UeCwoZz.jpg",
        "release_date": "2022-01-07",
        "title": "American Siege",
        "video": false,
        "vote_average": 3.5,
        "vote_count": 2
    },
    {
        "adult": false,
        "backdrop_path": "/qjJ2fQULgZB9JWUhf85LWUMW7bl.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 406759,
        "original_language": "en",
        "original_title": "Moonfall",
        "overview": "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.",
        "popularity": 27.823,
        "poster_path": "/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
        "release_date": "2022-02-03",
        "title": "Moonfall",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/hnZGMvRaO1vxzq9wQz5nGrbPkJv.jpg",
        "genre_ids": [
            9648
        ],
        "id": 610321,
        "original_language": "ko",
        "original_title": "경관의 피",
        "overview": "Min-jae who is a policeman from generation to generation has been ordered to investigate Kang-yoon secretly, who is the ace team leader of investigation team. Min-jae is appointed as the member of Kang-yoon’s team. Min-jae has belief of “If the police do something illegal even it has been occurred during the process of investigation, he is also a criminal.” But while Min-jae investigates Kang-yoon, he begins to resemble Kang-yoon who has belief of “The chase of crime should be justified even it’s illegal.” Will Min-jae be able to clear his private mission and arrest Kang-yoon that he trusts and admires?",
        "popularity": 32.153,
        "poster_path": "/6VhnQP3UQVkfQVacVW5qOs1OfXc.jpg",
        "release_date": "2022-01-05",
        "title": "The Policeman's Lineage",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/gxTlK2qRWTtvIYqGaZQ2j3CtYD3.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 851303,
        "original_language": "fr",
        "original_title": "En attendant Bojangles",
        "overview": "In front of their little boy, Camille and Georges dance on their favorite song \"Mr Bojangles\". With them, there is only place for fun and fantasy. The one who shows the way is the mother, an unpredictable wisp. She leads them into a whirlwind of poetry so that the party continues again and again, no matter what happens. Mad love has never lived up to its name so well.",
        "popularity": 34.795,
        "poster_path": "/nMADLV1sqzC2DY18HMy6GRtNUam.jpg",
        "release_date": "2022-01-05",
        "title": "Waiting for Bojangles",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 4
    },
    {
        "adult": false,
        "backdrop_path": "/56T4lCXrWCFhCeZxArSOXPQIfKc.jpg",
        "genre_ids": [
            99,
            35,
            28
        ],
        "id": 656663,
        "original_language": "en",
        "original_title": "Jackass Forever",
        "overview": "Celebrating the joy of being back together with your best friends and a perfectly executed shot to the dingdong, the original jackass crew return for another round of hilarious, wildly absurd, and often dangerous displays of comedy with a little help from some exciting new cast. Johnny and the team push the envelope even further in jackass forever.",
        "popularity": 25.747,
        "poster_path": "/ruHDFumJfW7F2vEqTZEQQ9xT7CA.jpg",
        "release_date": "2022-02-01",
        "title": "Jackass Forever",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/xJq12neztP7mfDNorwkJGSMbIB4.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 809972,
        "original_language": "pl",
        "original_title": "Jak pokochałam gangstera",
        "overview": "A mysterious woman recounts the rise and fall of Nikodem \"Nikoś\" Skotarczak, one of the biggest gangsters in Poland's history. Inspired by a true story.",
        "popularity": 35.619,
        "poster_path": "/mOPXksoNwfmiqJCgmik6w0xnVQS.jpg",
        "release_date": "2022-01-05",
        "title": "How I Fell in Love with a Gangster",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            10402
        ],
        "id": 862713,
        "original_language": "en",
        "original_title": "『ヒプノシスマイク-Division Rap Battle-』Rule the Stage -Battle of Pride-",
        "overview": "Captures the performance of \"Battle of Pride\" held on August 25 in Yokohama.  Special Feature / Bonus Track: bonus videos: \"Hypnosis Mic -Division Rap Battle-: Rule the Stage -Flava Edition-\" (60 min. approx.), \"Documentary of Rule the Stage -Battle of Pride-\" (100 min. approx.)",
        "popularity": 23.66,
        "poster_path": "/sWwmOOUL1FnHfqQALe6hJXH0M3C.jpg",
        "release_date": "2022-01-05",
        "title": "Hypnosis Mic: Division Rap Battle - Rule the Stage -Battle of Pride-",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/e7EWZjoQDUjVcxaD0xYcfaCC9FM.jpg",
        "genre_ids": [
            18
        ],
        "id": 788935,
        "original_language": "fr",
        "original_title": "Twist à Bamako",
        "overview": "Mali, 1960. The youth of Bamako dance the twist to rock and roll music newly imported from the West and dream of political renewal. Samba, a young socialist, falls for spirited Lara during one of his missions to the bush. To escape her forced marriage, she secretly flees with him to the city. But Lara’s husband won’t let them be and the Revolution soon brings painful disillusions as they dream of a future together.",
        "popularity": 27.454,
        "poster_path": "/thv06U2E3tyOD646VvE9uTAf7PD.jpg",
        "release_date": "2022-01-05",
        "title": "Mali Twist",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [],
        "id": 654897,
        "original_language": "en",
        "original_title": "Estado Impuro",
        "overview": "Drama about marriage.",
        "popularity": 24.82,
        "poster_path": "/bRnefla3LiHBa80vMkbTEoyMTmV.jpg",
        "release_date": "2022-01-05",
        "title": "Estado Impuro",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/maFsk8sw4yf7RKrq4hBLeGtELDo.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 838885,
        "original_language": "fr",
        "original_title": "Mes frères et moi",
        "overview": "",
        "popularity": 24.331,
        "poster_path": "/ph5NqiJ9oOXJpsOIC530gvt7Xkt.jpg",
        "release_date": "2022-01-05",
        "title": "My Brothers and I",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            9648,
            53,
            80
        ],
        "id": 854263,
        "original_language": "en",
        "original_title": "Something's Up",
        "overview": "A few teenagers quickly realize their whole city is controlled by their mothers.",
        "popularity": 23.8,
        "poster_path": null,
        "release_date": "2022-01-05",
        "title": "Something's Up",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            99
        ],
        "id": 917137,
        "original_language": "fr",
        "original_title": "Make Me a Man",
        "overview": "",
        "popularity": 22.925,
        "poster_path": "/1ZqocOSp9VDa7sTHig09yd9fq55.jpg",
        "release_date": "2022-01-05",
        "title": "Make Me a Man",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            80,
            18
        ],
        "id": 891943,
        "original_language": "ar",
        "original_title": "الجريمة",
        "overview": "The Crime is Egyptian Film",
        "popularity": 23.215,
        "poster_path": "/m5iNNGGqPttIUAIraOJSIWTQHti.jpg",
        "release_date": "2022-01-05",
        "title": "The Crime",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }
]
// console.log(movies);

const genreMovies = movies.map(e => {
    return [e.title, e.genre_ids]
    //   return e.genre_ids

})

const genreIds = genres.map(elem => {
    return elem.id
    // return elem.id
})

// console.log("find", genreMovies);
// console.log("search", genreIds);

const findGenreMovies = genreMovies.filter(e => {
    // console.log("e", e);

    for (var i = 0; i < e.length; i++) {
        // const num = genreMovies[i]
        console.log("1", e[i]);
        for (var j = 0; j < genreIds.length; j++) {
            if (e[i] === genreIds[j]) {
                console.log("2", e[i]);
            }
        }
    }
})
// console.log(findGenreMovies);










let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
    arr2 = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165]
hash = arr1.reduce((h, e) => (h[e] = 1, h), {}), //iterate first array once
    // console.log('hash: ', hash);

    common = arr2.filter(v => hash[v]); //iterate secod array once

// console.log('Cpmmon elements: ', common);