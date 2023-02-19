Quiz 1.9 - নিচের কোডে কি ভুল আছে?
নিচের কোডে 'a' অবজেক্টটি immutably কপি করে 'b' অবজেক্টের মধ্যে রাখতে গিয়ে কি ভুল হয়েছে?
  
  const a = {
    title: "Learn with Sumit",
    social: {
        facebook: "https://facebook.com/letslearnwithsumit",
        youtube: {
            link: "https://youtube.com/learnwithsumit",
            info: {
                title: "Learn with Sumit - LWS Bangladesh",
                description: "Learn programming like never before",
                meta: {
                    subscribers: "73.1k",
                    views: "600K",
                },
            },
            playlists: [
                "React Playlist",
                "Node Playlist",
                "Beginner JS Playlist",
                "Modern JS Playlist",
            ],
        },
    },
};

const b = {
    ...a,
    social: {
        ...a.social,
        youtube: {
            ...a.social.youtube,
            info: {
                ...a.social.youtube.info,
                meta: {
                    ...a.social.youtube.info.meta,
                },
            },
        },
    },
};

Ans: এখানে a.social.youtube.playlists array টি immutably কপি হয়নি কারণ তৃতীয় লেভেল পর্যন্ত object spread করা হয়েছে কিন্তু তৃতীয় লেভেল এ a.social.youtube.playlists array টি reference ভ্যালু বলে এটাকেও spread করে নিতে হবে।
