const pronouns = {
  formPronouns: {
    _1personSingular: {
      de: 'ich',
      ru: 'я',
    },
    _2personSingular: {
      de: 'du',
      ru: 'ты',
    },
    _3personSingularM: {
      de: 'er',
      ru: 'он',
    },
    _3personSingularF: {
      de: 'sie',
      ru: 'она',
    },
    _3personSingularN: {
      de: 'es',
      ru: 'cмеётся',
    },
    _1personPlural: {
      de: 'wir',
      ru: 'мы',
    },
    _2personPlural: {
      de: 'ihr',
      ru: 'вы',
    },
    _3personPlural: {
      de: 'sie',
      ru: 'они',
    },
    _3personPluralFormal: {
      de: 'Sie',
      ru: 'Вы',
    },
  },
};
const verbs = [
  {
    name: 'Lachen',
    formVerbs: {
      _1personSingular: {
        de: 'lache',
        ru: 'cмеюсь',
      },
      _2personSingular: {
        de: 'lachst',
        ru: 'cмеёшься',
      },
      _3personSingularM: {
        de: 'lacht',
        ru: 'cмеётся',
      },
      _3personSingularF: {
        de: 'lacht',
        ru: 'cмеётся',
      },
      _3personSingularN: {
        de: 'lacht',
        ru: 'cмеётся',
      },
      _1personPlural: {
        de: 'lachen',
        ru: 'cмеемся',
      },
      _2personPlural: {
        de: 'lacht',
        ru: 'cмеётесь',
      },
      _3personPlural: {
        de: 'lachen',
        ru: 'Смеются',
      },
      _3personPluralFormal: {
        de: 'lachen',
        ru: 'Смеётесь',
      },
    },
  },
  {
    name: 'Fragen',
    formVerbs: {
      _1personSingular: {
        de: 'frage',
        ru: 'спрашиваю',
      },
      _2personSingular: {
        de: 'fragst',
        ru: 'спрашиваешь',
      },
      _3personSingularM: {
        de: 'fragt',
        ru: 'спрашивает',
      },
      _3personSingularF: {
        de: 'fragt',
        ru: 'спрашивает',
      },
      _3personSingularN: {
        de: 'fragt',
        ru: 'спрашивает',
      },
      _1personPlural: {
        de: 'fragen',
        ru: 'спрашиваем',
      },
      _2personPlural: {
        de: 'fragt',
        ru: 'спрашиваете',
      },
      _3personPlural: {
        de: 'fragen',
        ru: 'спрашивают',
      },
      _3personPluralFormal: {
        de: 'fragen',
        ru: 'спрашиваете',
      },
    },
  },
  {
    name: 'Lieben',
    formVerbs: {
      _1personSingular: {
        de: 'liebe',
        ru: 'люблю',
      },
      _2personSingular: {
        de: 'liebst',
        ru: 'любишь',
      },
      _3personSingularM: {
        de: 'liebt',
        ru: 'любит',
      },
      _3personSingularF: {
        de: 'liebt',
        ru: 'любит',
      },
      _3personSingularN: {
        de: 'liebt',
        ru: 'любит',
      },
      _1personPlural: {
        de: 'lieben',
        ru: 'любим',
      },
      _2personPlural: {
        de: 'liebt',
        ru: 'любите',
      },
      _3personPlural: {
        de: 'lieben',
        ru: 'любят',
      },
      _3personPluralFormal: {
        de: 'lieben',
        ru: 'любите',
      },
    },
  },
  {
    name: 'Leben',
    formVerbs: {
      _1personSingular: {
        de: 'lebe',
        ru: 'живу',
      },
      _2personSingular: {
        de: 'lebst',
        ru: 'живёшь',
      },
      _3personSingularM: {
        de: 'lebt',
        ru: 'живёт',
      },
      _3personSingularF: {
        de: 'lebt',
        ru: 'живёт',
      },
      _3personSingularN: {
        de: 'lebt',
        ru: 'живёт',
      },
      _1personPlural: {
        de: 'leben',
        ru: 'живём',
      },
      _2personPlural: {
        de: 'lebt',
        ru: 'живёте',
      },
      _3personPlural: {
        de: 'leben',
        ru: 'живут',
      },
      _3personPluralFormal: {
        de: 'leben',
        ru: 'живёте',
      },
    },
  },
  {
    name: 'Haben',
    formVerbs: {
      _1personSingular: {
        de: 'habe',
        ru: 'имею',
      },
      _2personSingular: {
        de: 'hast',
        ru: 'имеешь',
      },
      _3personSingularM: {
        de: 'hat',
        ru: 'имеет',
      },
      _3personSingularF: {
        de: 'hat',
        ru: 'имеет',
      },
      _3personSingularN: {
        de: 'hat',
        ru: 'имеет',
      },
      _1personPlural: {
        de: 'haben',
        ru: 'имеем',
      },
      _2personPlural: {
        de: 'habt',
        ru: 'имеете',
      },
      _3personPlural: {
        de: 'haben',
        ru: 'имеют',
      },
      _3personPluralFormal: {
        de: 'haben',
        ru: 'имеете',
      },
    },
  },
  {
    name: 'Lesen',
    formVerbs: {
      _1personSingular: {
        de: 'lese',
        ru: 'читаю',
      },
      _2personSingular: {
        de: 'liest',
        ru: 'читаешь',
      },
      _3personSingularM: {
        de: 'liest',
        ru: 'читает',
      },
      _3personSingularF: {
        de: 'liest',
        ru: 'читает',
      },
      _3personSingularN: {
        de: 'liest',
        ru: 'читает',
      },
      _1personPlural: {
        de: 'lesen',
        ru: 'читаем',
      },
      _2personPlural: {
        de: 'lest',
        ru: 'читаете',
      },
      _3personPlural: {
        de: 'lesen',
        ru: 'читают',
      },
      _3personPluralFormal: {
        de: 'lesen',
        ru: 'читаете',
      },
    },
  },
  {
    name: 'Sehen',
    formVerbs: {
      _1personSingular: {
        de: 'sehe',
        ru: 'вижу',
      },
      _2personSingular: {
        de: 'siehst',
        ru: 'видешь',
      },
      _3personSingularM: {
        de: 'sieht',
        ru: 'видит',
      },
      _3personSingularF: {
        de: 'sieht',
        ru: 'видит',
      },
      _3personSingularN: {
        de: 'sieht',
        ru: 'видит',
      },
      _1personPlural: {
        de: 'sehen',
        ru: 'видят',
      },
      _2personPlural: {
        de: 'seht',
        ru: 'видите',
      },
      _3personPlural: {
        de: 'sehen',
        ru: 'видят',
      },
      _3personPluralFormal: {
        de: 'sehen',
        ru: 'видите',
      },
    },
  },
  {
    name: 'Wohnen',
    formVerbs: {
      _1personSingular: {
        de: 'wohne',
        ru: 'проживаю',
      },
      _2personSingular: {
        de: 'wohnst',
        ru: 'проживаешь',
      },
      _3personSingularM: {
        de: 'wohnt',
        ru: 'проживает',
      },
      _3personSingularF: {
        de: 'wohnt',
        ru: 'проживает',
      },
      _3personSingularN: {
        de: 'wohnt',
        ru: 'проживает',
      },
      _1personPlural: {
        de: 'wohnen',
        ru: 'проживаем',
      },
      _2personPlural: {
        de: 'wohnt',
        ru: 'проживаете',
      },
      _3personPlural: {
        de: 'wohnen',
        ru: 'проживают',
      },
      _3personPluralFormal: {
        de: 'wohnen',
        ru: 'проживаете',
      },
    },
  },
  {
    name: 'Arbeiten',
    formVerbs: {
      _1personSingular: {
        de: 'arbeite',
        ru: 'работаю',
      },
      _2personSingular: {
        de: 'arbeitest',
        ru: 'работаешь',
      },
      _3personSingularM: {
        de: 'arbeitet',
        ru: 'работает',
      },
      _3personSingularF: {
        de: 'arbeitet',
        ru: 'работает',
      },
      _3personSingularN: {
        de: 'arbeitet',
        ru: 'работает',
      },
      _1personPlural: {
        de: 'arbeiten',
        ru: 'работаем',
      },
      _2personPlural: {
        de: 'arbeitet',
        ru: 'работаете',
      },
      _3personPlural: {
        de: 'arbeiten',
        ru: 'работают',
      },
      _3personPluralFormal: {
        de: 'arbeiten',
        ru: 'работаете',
      },
    },
  },
];
const totalVerbs = document.querySelector('.js-number-of-verbs');
const textVerbs = document.querySelector('.js-text-random-verbs');
const btnRandomVerbs = document.querySelector('.js-btn-random-verbs');
const btnVariableForm = document.querySelector('.js-btn-random-form-verbs');
const textVariableDe = document.querySelector('.js-text-random-verbs-deutsch');
const textVariableRu = document.querySelector('.js-text-random-verbs-russian');

totalVerbs.textContent = verbs.length;

let count = 0;
btnRandomVerbs.addEventListener('click', () => {
  count = Math.round(Math.random() * verbs.length);
  textVerbs.textContent = verbs[count].name;
  textVariableDe.textContent = '';
  textVariableRu.textContent = '';
  document.body.style.backgroundColor = 'white';
  inputVerbs.value = '';
});

function randomForm() {
  const arrayPronouns = Object.keys(pronouns.formPronouns);
  const arrayFormVerbs = Object.keys(verbs[count].formVerbs);
  let randomValue = 0;

  randomValue = Math.round(Math.random() * arrayPronouns.length);

  const randomFormPronounsDe = pronouns.formPronouns[arrayPronouns[randomValue]].de;
  const randomFormVerbsDe = verbs[count].formVerbs[arrayFormVerbs[randomValue]].de;
  const randomFormPronounsRu = pronouns.formPronouns[arrayPronouns[randomValue]].ru;
  const randomFormVerbsRu = verbs[count].formVerbs[arrayFormVerbs[randomValue]].ru;
  let arr = [randomFormPronounsDe, randomFormPronounsRu, randomFormVerbsDe, randomFormVerbsRu];

  return arr;
}
let arrRandomFormVerbs = [];
btnVariableForm.addEventListener('click', () => {
  arrRandomFormVerbs = randomForm();
  textVariableDe.textContent = `${arrRandomFormVerbs[1]} ${arrRandomFormVerbs[3]}`;
  textVariableRu.textContent = `${arrRandomFormVerbs[0]} ................`;
  document.body.style.backgroundColor = 'white';
  inputVerbs.value = '';
});

const inputVerbs = document.querySelector('.js-input-verbs');
const btnCheck = document.querySelector('.js-btn-check');
console.log(inputVerbs.value);

btnCheck.addEventListener('click', () => {
  if (inputVerbs.value === arrRandomFormVerbs[2]) {
    document.body.style.backgroundColor = '#6D972E';
  } else if (inputVerbs.value !== arrRandomFormVerbs[2]) {
    document.body.style.backgroundColor = '#E45545';
  }
});
