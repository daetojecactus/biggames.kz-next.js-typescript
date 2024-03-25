//Информация на промо странице
import { TranslationKeys } from "./DataInterfaces";

interface PromoData {
  promoTitle: TranslationKeys;
  promoSubtitle: TranslationKeys;
  promoDescr: TranslationKeys;
  promoBtnPlay: TranslationKeys;
  promoBtnClose: TranslationKeys;
  promoItems: PromoItems[];
}

export interface PromoItems {
  id: number;
  promoItemDescr: TranslationKeys;
}

const promoData: PromoData[] = [
  {
    promoTitle: {
      ru: "Участвуйте в конкурсе",
      kz: "Конкурс талаптары",
    },
    promoSubtitle: {
      ru: "Сыграйте свадьбу, сделайте скриншот и испытайте удачу выиграть миллион!",
      kz: "Үйлену тойын тойлап, скриншот жасаңыз да, BI Group-тан пәтер сатып алуға миллион теңгенің ұтысында бағыңызды сынап көріңіз!",
    },
    promoDescr: {
      ru: "Для участия в розыгрыше миллиона тенге на приобретение квартиры в BI Group, вам нужно:",
      kz: "Үйлену тойын тойлап, скриншот жасаңыз да, BI Group-тан пәтер сатып алуға миллион теңгенің ұтысында бағыңызды сынап көріңіз.",
    },
    promoBtnPlay: {
      ru: "Играть",
      kz: "Ойнау",
    },
    promoBtnClose: {
      ru: "Закрыть",
      kz: "Жабу",
    },
    promoItems: [
      {
        id: 1,
        promoItemDescr: {
          ru: "Пройти игру, сделать скриншот и поделиться результатами у себя в Instagram Stories;",
          kz: "Ойыннан өтіп, скриншот жасау және нәтижелерін Instagram Stories-інде бөлісу;",
        },
      },
      {
        id: 2,
        promoItemDescr: {
          ru: "Отметить в Stories аккаунт @bi.group  и поставить хэштег #BIсвадьбанамиллион;",
          kz: "Stories-те @bi.group  аккаунтын белгілеп, #BIмиллиондықүйленутойы хэштегін қою;",
        },
      },
      {
        id: 3,
        promoItemDescr: {
          ru: "Подписаться на аккаунт @bi.group ,  @bi.group.batys ,  @bi.group.shymkent  и @bi.group.almaty ;",
          kz: "@bi.group ,  @bi.group.batys ,  @bi.group.shymkent  және @bi.group.almaty  аккаунттарына жазылу;",
        },
      },
      {
        id: 4,
        promoItemDescr: {
          ru: "Оставить комментарий под конкурсным постом на странице @bi.group .",
          kz: "@bi.group  парақшасындағы конкурс жазбасының астында пікір қалдыру.",
        },
      },
    ],
  },
];

export default promoData;
