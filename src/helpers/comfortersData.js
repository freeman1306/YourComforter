import userPic0 from "../images/demo-data/users/0.jpg";
import userPic1 from "../images/demo-data/users/1.jpg";
import userPic2 from "../images/demo-data/users/2.jpg";
import userPic3 from "../images/demo-data/users/3.jpg";
import userPic4 from "../images/demo-data/users/4.jpg";
import userPic5 from "../images/demo-data/users/5.jpg";
import userPic6 from "../images/demo-data/users/6.jpg";
import userPic7 from "../images/demo-data/users/7.jpg";
import userPic8 from "../images/demo-data/users/8.jpg";
import userPic9 from "../images/demo-data/users/9.jpg";

const BUSY_DATES = [
  "2019-08-05:12-15",
  "2019-08-05:13-00",
  "2019-08-05:14-00",
  "2019-08-05:15-00",
  "2019-08-06:11-15",
  "2019-08-06:12-00",
  "2019-08-06:13-00",
  "2019-08-06:14-00",
  "2019-08-06:18-00",
  "2019-08-06:19-00"
];

const UNAVAILABLE_DATES = ["05-00", "22-00", "23-00", "00-00"];

export const comforters = [
  {
    id: "634bdf40-aed3-11e9-923b-379f1343299d",
    userPhoto: userPic0,
    firstName: "John",
    lastName: "Week",
    birthDayDate: new Date("1989"),
    state: "MA",
    city: "Boston",
    minRate: 15,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "634bdf41-aed3-11e9-923b-379f1343299d",
    userPhoto: userPic1,
    firstName: "Emma",
    lastName: "Taylor",
    birthDayDate: new Date("1994"),
    state: "WY",
    city: "Jackson",
    minRate: 10,
    maxRate: 20,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "bd410c00-aed3-11e9-b3a6-178ab6b0caa9",
    userPhoto: userPic2,
    firstName: "Kate",
    lastName: "Jons",
    birthDayDate: new Date("1997"),
    state: "CA",
    city: "San-Francisco",
    minRate: 15,
    maxRate: 20,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "bd410c01-aed3-11e9-b3a6-178ab6b0caa9",
    userPhoto: userPic3,
    firstName: "Sara",
    lastName: "Kane",
    birthDayDate: new Date("1996"),
    state: "NY",
    city: "New-York",
    minRate: 20,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "bd410c02-aed3-11e9-b3a6-178ab6b0caa9",
    userPhoto: userPic0,
    firstName: "John",
    lastName: "Week",
    birthDayDate: new Date("1989"),
    state: "MA",
    city: "Boston",
    minRate: 15,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "bd410c03-aed3-11e9-b3a6-178ab6b0caa9",
    userPhoto: userPic1,
    firstName: "Emma",
    lastName: "Taylor",
    birthDayDate: new Date("1994"),
    state: "WY",
    city: "Jackson",
    minRate: 10,
    maxRate: 20,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "bd410c04-aed3-11e9-b3a6-178ab6b0caa9",
    userPhoto: userPic2,
    firstName: "Kate",
    lastName: "Jons",
    birthDayDate: new Date("1997"),
    state: "CA",
    city: "San-Francisco",
    minRate: 15,
    maxRate: 20,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "bd413310-aed3-11e9-b3a6-178ab6b0caa9",
    userPhoto: userPic3,
    firstName: "Sara",
    lastName: "Kane",
    birthDayDate: new Date("1996"),
    state: "NY",
    city: "New-York",
    minRate: 20,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "bd413311-aed3-11e9-b3a6-178ab6b0caa9",
    userPhoto: userPic4,
    firstName: "Dean",
    lastName: "Jhonson",
    birthDayDate: new Date("1987"),
    state: "WY",
    city: "Moran",
    minRate: 10,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac0b-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic5,
    firstName: "Rick",
    lastName: "Morty",
    birthDayDate: new Date("1990"),
    state: "GA",
    city: "Bankhead",
    minRate: 15,
    maxRate: 25,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac0a-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic6,
    firstName: "Lora",
    lastName: "Ipsum",
    birthDayDate: new Date("1997"),
    state: "GA",
    city: "Parck Sherwood",
    minRate: 10,
    maxRate: 20,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac09-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic7,
    firstName: "Li",
    lastName: "Vang",
    birthDayDate: new Date("2001"),
    state: "GA",
    city: "Inman Park",
    minRate: 15,
    maxRate: 25,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac08-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic8,
    firstName: "Sam",
    lastName: "Fisher",
    birthDayDate: new Date("1989"),
    state: "GA",
    city: "Edgewood East",
    minRate: 20,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac07-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic9,
    firstName: "Ron",
    lastName: "Karson",
    birthDayDate: new Date("1987"),
    state: "GA",
    city: "Decatur Avondale",
    minRate: 20,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac06-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic0,
    firstName: "John",
    lastName: "Week",
    birthDayDate: new Date("1989"),
    state: "MA",
    city: "Boston",
    minRate: 15,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", price: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac05-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic1,
    firstName: "Emma",
    lastName: "Taylor",
    birthDayDate: new Date("1994"),
    state: "WY",
    city: "Jackson",
    minRate: 10,
    maxRate: 20,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac04-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic2,
    firstName: "Kate",
    lastName: "Jons",
    birthDayDate: new Date("1997"),
    state: "CA",
    city: "San-Francisco",
    minRate: 15,
    maxRate: 20,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac03-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic3,
    firstName: "Sara",
    lastName: "Kane",
    birthDayDate: new Date("1996"),
    state: "NY",
    city: "New-York",
    minRate: 20,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac02-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic4,
    firstName: "Dean",
    lastName: "Jhonson",
    birthDayDate: new Date("1987"),
    state: "WY",
    city: "Moran",
    minRate: 10,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac01-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic5,
    firstName: "Rick",
    lastName: "Morty",
    birthDayDate: new Date("1990"),
    state: "GA",
    city: "Bankhead",
    minRate: 15,
    maxRate: 25,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c9ac00-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic6,
    firstName: "Lora",
    lastName: "Ipsum",
    birthDayDate: new Date("1997"),
    state: "GA",
    city: "Parck Sherwood",
    minRate: 10,
    maxRate: 20,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c984fd-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic7,
    firstName: "Li",
    lastName: "Vang",
    birthDayDate: new Date("2001"),
    state: "GA",
    city: "Inman Park",
    minRate: 15,
    maxRate: 25,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c984fc-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic8,
    firstName: "Sam",
    lastName: "Fisher",
    birthDayDate: new Date("1989"),
    state: "GA",
    city: "Edgewood East",
    minRate: 20,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c984fb-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic9,
    firstName: "Ron",
    lastName: "Karson",
    birthDayDate: new Date("1987"),
    state: "GA",
    city: "Decatur Avondale",
    minRate: 20,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c984fa-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic0,
    firstName: "John",
    lastName: "Week",
    birthDayDate: new Date("1989"),
    state: "MA",
    city: "Boston",
    minRate: 15,
    maxRate: 30,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  },
  {
    id: "11c984f9-aed4-11e9-849c-278e0908910c",
    userPhoto: userPic1,
    firstName: "Emma",
    lastName: "Taylor",
    birthDayDate: new Date("1994"),
    state: "WY",
    city: "Jackson",
    minRate: 10,
    maxRate: 20,
    hoursWorked: 56,
    orders: 16,
    bio:
      "Phasellus lorem arcu, consequat quis sem et, volutpat convallis justo. Maecenas porttitor scelerisque consectetur. Integer non massa sodales, porttitor nulla vel, finibus ligula. Sed sed orci ut dui viverra accumsan. Duis ut pretium ipsum. Mauris vel lacinia odio. Sed vulputate diam ut est aliquam venenatis. Morbi maximus ultrices enim, sit amet imperdiet augue pellentesque sed. Morbi faucibus pharetra leo, a vestibulum risus pulvinar at. Suspendisse elementum ultricies dui, vitae finibus nisl mattis id.",
    curriculumVitae: "docs.google.com/doc...",
    socialLink: "facebook.com/pamela...",
    userPercentJobSuccess: 90,
    userVideoLink: "https://vimeo.com/164009822",
    gallery: [
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      },
      {
        name: "comforter.jpg",
        preview: userPic0
      }
    ],
    services: [
      {
        location: "New York",
        services: [
          { name: "Computer Education Tutorials", price: 15 },
          { name: "Facility Visits", price: 16 },
          { name: "Day-to-Day Errands", price: 22 },
          { name: "House Keeping", price: 17 },
          { name: "Grocery Shopping", price: 20 },
          { name: "Dog Walking", price: 18 },
          { name: "Life Enriching Activities", price: 17 },
          { name: "Treatment Transportation", price: 22 }
        ]
      },
      {
        location: "Jackson",
        services: [
          { name: "Facility Visits", price: 12 },
          { name: "House Keeping", pring: 23 },
          { name: "Dog Walking", price: 15 },
          { name: "Life Enriching Activities", price: 20 }
        ]
      }
    ]
  }
];

export const getComforterById = id => {
  return new Promise((resolve, reject) => {
    const comforter = comforters.find(user => user.id === id);
    if (comforter) {
      const dates = {
        busy: BUSY_DATES,
        unavailable: UNAVAILABLE_DATES
      };
      resolve({ ...comforter, dates });
    } else {
      reject("Comforter not found");
    }
  });
};
