//Страница информации и карточки ЖК
import { TranslationKeys } from "./DataInterfaces";

// интерфейс для самого объекта FinalCards
interface FinalCards {
  topDescr: TranslationKeys;
  title: TranslationKeys;
  subTitleTop: TranslationKeys;
  subTitleMiddle: TranslationKeys;
  subTitleBad: TranslationKeys;
  city: TranslationKeys;
  firstMoney: TranslationKeys;
  buttonBi: TranslationKeys;
  buttonInst: TranslationKeys;
  cards: FinalCardsCard[];
}

// интерфейс для карточек
interface FinalCardsCard {
  id: number;
  link: string;
  cardCity: TranslationKeys;
  cardAbout: TranslationKeys;
  cardImage: string;
  cardAction: TranslationKeys;
  cardMortgage: TranslationKeys;
  cardTitle: TranslationKeys;
  cardPrice: number;
  cardBottomDescr: TranslationKeys;
}

const finalCards: FinalCards[] = [
  {
    topDescr: {
      ru: "Вернутся к результату ",
      kz: "Нәтижеге оралу",
    },
    title: {
      ru: "Подведем итоги!",
      kz: "Қорытындысын шығарайық!",
    },
    subTitleTop: {
      ru: "Вы хорошо провели свадьбу в кругу родных и запомните ее на всю жизнь. А так же вам удалось хорошо сэкономить и теперь вы можете купить квартиру по программам BI Group.",
      kz: "Сіз туыстарыңыздың ортасында керемет той жасадыңыз және оны өмір бойы есте сақтайсыз. Сонымен қатар, жақсы үнемдей алдыңыз, енді BI Group бағдарламалары бойынша пәтер сатып ала аласыз.",
    },
    subTitleMiddle: {
      ru: "Вы решили, что свадьба бывает не каждый день и решили потратить чуть больше денег на данное событие. При всем этом вы отложили кругленькую сумму и задумались о покупке квартиры в ЖК от BI Group.",
      kz: "Сіз үйлену тойы күнде бола бермейді деп шешіп, осы оқиғаға көбірек ақша жұмсауға бел байладыңыз. Солай бола тұра, қомақты сома жинап қойдыңыз және BI Group салған тұрғын үй кешенінен пәтер сатып алуды ойластырудасыз.",
    },
    subTitleBad: {
      ru: "Вы шиканули как лучшие селебрети, все ваши друзья завидуют вашей свадьбе и обсуждение этого события будет идти еще очень долго. Но у вас осталось не так много денег из-за чего придется подкопить на новую квартиру.",
      kz: "Сіз тойды атақты адамдардай дүркіретіп өткіздіңіз, барлық достарыңыз үйлену тойыңызға қызығып қарайды және бұл оқиғаны әлі ұзақ уақыт талқылайтын болады. Бірақ сізде көп ақша қалмады, сол себепті жаңа пәтерге ақша жинауыңызға тура келеді.",
    },
    city: {
      ru: "Город",
      kz: "Қала",
    },
    firstMoney: {
      ru: "Первоначальный взнос от ",
      kz: "Бастапқы жарна ",
    },
    buttonBi: {
      ru: "Перейти на BI GROUP",
      kz: "BI GROUP тобына өтіңіз",
    },
    buttonInst: {
      ru: "Получить консультацию",
      kz: "Консультация алу үшін",
    },
    cards: [
      {
        // Arman Qala
        id: 1,
        link: "https://bi.group/ru/filter?propertyTypes=%5B%225990a172-812a-4fee-b4f5-c860cca824d7%22%2C%22b6e20785-9b33-46a9-86b5-707fdbffe314%22%2C%22a6deff39-99d2-4a4c-982c-b245b7e43037%22%2C%22b3be088f-52d2-47af-93d5-0667312547c9%22%2C%22eb845125-c2b7-4d8a-93d7-015080355f78%22%2C%22c2c7b7b0-6b3e-4b9a-b729-64a750fe271d%22%2C%2264d2ff0a-22d9-4fa3-92aa-6391faf460f9%22%2C%22e211be72-2986-4ea1-8991-bfe7233ac4c2%22%2C%22253c179e-7a74-4096-a0e9-a63df0e24bb5%22%2C%228f72b6b1-0453-4938-9775-0f2f3a836ccd%22%5D&realEstateUUIDs=%5B%228fd830b7-21ce-11ec-a81f-001dd8b72708%22%5D&realEstatePage=%22PLACEMENTS%22",
        cardCity: {
          ru: "Шымкент",
          kz: "Шымкент",
        },
        cardAbout: {
          ru: "36.3 м²",
          kz: "36.3 м²",
        },
        cardImage: "/images/info-page-jk-1.jpg",
        cardAction: {
          ru: "Акция",
          kz: "Науқан",
        },
        cardMortgage: {
          ru: "Ипотека",
          kz: "Ипотека",
        },
        cardTitle: {
          ru: "Arman Qala",
          kz: "Arman Qala",
        },
        cardPrice: 2713788,
        cardBottomDescr: {
          ru: "Доступно 278 помещений",
          kz: "278 бөлме бар",
        },
      },
      {
        // Jetisu. Kerbez
        id: 2,
        link: "https://bi.group/ru/filter?propertyTypes=%5B%225990a172-812a-4fee-b4f5-c860cca824d7%22%2C%22b6e20785-9b33-46a9-86b5-707fdbffe314%22%2C%22a6deff39-99d2-4a4c-982c-b245b7e43037%22%2C%22b3be088f-52d2-47af-93d5-0667312547c9%22%2C%22eb845125-c2b7-4d8a-93d7-015080355f78%22%2C%22c2c7b7b0-6b3e-4b9a-b729-64a750fe271d%22%2C%2264d2ff0a-22d9-4fa3-92aa-6391faf460f9%22%2C%22e211be72-2986-4ea1-8991-bfe7233ac4c2%22%2C%22253c179e-7a74-4096-a0e9-a63df0e24bb5%22%2C%228f72b6b1-0453-4938-9775-0f2f3a836ccd%22%5D&realEstateUUIDs=%5B%220ee8ba0b-34e5-11ee-a829-001dd8b72708%22%5D&realEstatePage=%22PLACEMENTS%22",
        cardCity: {
          ru: "Астана",
          kz: "Астана",
        },
        cardAbout: {
          ru: "30.85 м²",
          kz: "30.85 м²",
        },
        cardImage: "/images/info-page-jk-2.jpg",
        cardAction: {
          ru: "Акция",
          kz: "Науқан",
        },
        cardMortgage: {
          ru: "Ипотека",
          kz: "Ипотека",
        },
        cardTitle: {
          ru: "Jetisu. Kerbez",
          kz: "Jetisu. Kerbez",
        },
        cardPrice: 3144120,
        cardBottomDescr: {
          ru: "Доступно 265 помещений",
          kz: "265 бөлме бар",
        },
      },
      {
        // Tumar Apartments
        id: 3,
        link: "https://bi.group/ru/filter?realEstateUUIDs=%5B%22528d8c0f-53fd-11eb-a83d-00155d106579%22%5D&propertyTypes=%5B%225990a172-812a-4fee-b4f5-c860cca824d7%22%2C%22b6e20785-9b33-46a9-86b5-707fdbffe314%22%2C%22a6deff39-99d2-4a4c-982c-b245b7e43037%22%2C%22b3be088f-52d2-47af-93d5-0667312547c9%22%2C%22eb845125-c2b7-4d8a-93d7-015080355f78%22%2C%22c2c7b7b0-6b3e-4b9a-b729-64a750fe271d%22%2C%2264d2ff0a-22d9-4fa3-92aa-6391faf460f9%22%2C%22e211be72-2986-4ea1-8991-bfe7233ac4c2%22%2C%22253c179e-7a74-4096-a0e9-a63df0e24bb5%22%2C%228f72b6b1-0453-4938-9775-0f2f3a836ccd%22%5D&realEstatePage=%22PLACEMENTS%22",
        cardCity: {
          ru: "Шымкент",
          kz: "Шымкент",
        },
        cardAbout: {
          ru: "46.77 м²",
          kz: "46.77 м²",
        },
        cardImage: "/images/info-page-jk-3.jpg",
        cardAction: {
          ru: "Акция",
          kz: "Науқан",
        },
        cardMortgage: {
          ru: "Ипотека",
          kz: "Ипотека",
        },
        cardTitle: {
          ru: "Tumar Apartments",
          kz: "Tumar Apartments",
        },
        cardPrice: 3771532,
        cardBottomDescr: {
          ru: "Доступно 109 помещений",
          kz: "109 бөлме бар",
        },
      },
      {
        // Атамұра Comfort
        id: 4,
        link: "https://bi.group/ru/filter?realEstateUUIDs=%5B%2229ea4933-53ee-11eb-a83d-00155d106579%22%5D&propertyTypes=%5B%225990a172-812a-4fee-b4f5-c860cca824d7%22%2C%22b6e20785-9b33-46a9-86b5-707fdbffe314%22%2C%22a6deff39-99d2-4a4c-982c-b245b7e43037%22%2C%22b3be088f-52d2-47af-93d5-0667312547c9%22%2C%22eb845125-c2b7-4d8a-93d7-015080355f78%22%2C%22c2c7b7b0-6b3e-4b9a-b729-64a750fe271d%22%2C%2264d2ff0a-22d9-4fa3-92aa-6391faf460f9%22%2C%22e211be72-2986-4ea1-8991-bfe7233ac4c2%22%2C%22253c179e-7a74-4096-a0e9-a63df0e24bb5%22%2C%228f72b6b1-0453-4938-9775-0f2f3a836ccd%22%5D&realEstatePage=%22PLACEMENTS%22",
        cardCity: {
          ru: "Шымкент",
          kz: "Шымкент",
        },
        cardAbout: {
          ru: "37.43 м²",
          kz: "37.43 м²",
        },
        cardImage: "/images/info-page-jk-4.jpeg",
        cardAction: {
          ru: "Акция",
          kz: "Науқан",
        },
        cardMortgage: {
          ru: "Ипотека",
          kz: "Ипотека",
        },
        cardTitle: {
          ru: "Атамұра Comfort",
          kz: "Атамұра Comfort",
        },
        cardPrice: 3144120,
        cardBottomDescr: {
          ru: "Доступно 156 помещений",
          kz: "156 бөлме бар",
        },
      },
      {
        // Атамұра Business
        id: 5,
        link: "https://bi.group/ru/filter?realEstateUUIDs=%5B%2229ea4933-53ee-11eb-a83d-00155d106579%22%5D&propertyTypes=%5B%225990a172-812a-4fee-b4f5-c860cca824d7%22%2C%22b6e20785-9b33-46a9-86b5-707fdbffe314%22%2C%22a6deff39-99d2-4a4c-982c-b245b7e43037%22%2C%22b3be088f-52d2-47af-93d5-0667312547c9%22%2C%22eb845125-c2b7-4d8a-93d7-015080355f78%22%2C%22c2c7b7b0-6b3e-4b9a-b729-64a750fe271d%22%2C%2264d2ff0a-22d9-4fa3-92aa-6391faf460f9%22%2C%22e211be72-2986-4ea1-8991-bfe7233ac4c2%22%2C%22253c179e-7a74-4096-a0e9-a63df0e24bb5%22%2C%228f72b6b1-0453-4938-9775-0f2f3a836ccd%22%5D&realEstatePage=%22PLACEMENTS%22",
        cardCity: {
          ru: "Шымкент",
          kz: "Шымкент",
        },
        cardAbout: {
          ru: "48.63 м²",
          kz: "48.63 м²",
        },
        cardImage: "/images/info-page-jk-5.jpeg",
        cardAction: {
          ru: "Акция",
          kz: "Науқан",
        },
        cardMortgage: {
          ru: "Ипотека",
          kz: "Ипотека",
        },
        cardTitle: {
          ru: "Атамұра Business",
          kz: "Атамұра Business",
        },
        cardPrice: 4700000,
        cardBottomDescr: {
          ru: "Доступно 156 помещений",
          kz: "156 бөлме бар",
        },
      },
      {
        // Arena Park
        id: 6,
        link: "https://bi.group/ru/filter?realEstateUUIDs=%5B%22d838292d-4629-11ed-a826-001dd8b72708%22%5D&propertyTypes=%5B%225990a172-812a-4fee-b4f5-c860cca824d7%22%2C%22b6e20785-9b33-46a9-86b5-707fdbffe314%22%2C%22a6deff39-99d2-4a4c-982c-b245b7e43037%22%2C%22b3be088f-52d2-47af-93d5-0667312547c9%22%2C%22eb845125-c2b7-4d8a-93d7-015080355f78%22%2C%22c2c7b7b0-6b3e-4b9a-b729-64a750fe271d%22%2C%2264d2ff0a-22d9-4fa3-92aa-6391faf460f9%22%2C%22e211be72-2986-4ea1-8991-bfe7233ac4c2%22%2C%22253c179e-7a74-4096-a0e9-a63df0e24bb5%22%2C%228f72b6b1-0453-4938-9775-0f2f3a836ccd%22%5D&realEstatePage=%22PLACEMENTS%22",
        cardCity: {
          ru: "Алматы",
          kz: "Алматы",
        },
        cardAbout: {
          ru: "40.42 м²",
          kz: "40.42 м²",
        },
        cardImage: "/images/info-page-jk-6.jpg",
        cardAction: {
          ru: "Акция",
          kz: "Науқан",
        },
        cardMortgage: {
          ru: "Ипотека",
          kz: "Ипотека",
        },
        cardTitle: {
          ru: "Arena Park",
          kz: "Arena Park",
        },
        cardPrice: 4761476,
        cardBottomDescr: {
          ru: "Доступно 190 помещений",
          kz: "190 бөлме бар",
        },
      },
    ],
  },
];

export default finalCards;
