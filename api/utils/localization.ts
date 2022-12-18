export const loadLocalizations = async (i18n) => {
  await i18n.loadLocale("en", {
    source: `language = Language 
      .english = English 
      .french = French 
      .german =  German  
      .italian =  Italian  
      .spanish =  Spanish  
      .japanese =  Japanese  
      .chinese =  Chinese  
      .korean =  Korean  
      .portuguese =  Portuguese  
      .russian =  Russian  
      .polish =  Polish  
      .uzbek =  Uzbek  
      .hindi =  Hindi  
      .arabic =  Arabic  
      .turkish =  Turkish 
      .kyrgyz =  Kyrgyz 
      .kazakh =  Kazakh 
      .language-set =  Language set
      .language-set-success =  Your language has been set to {$language}`,
  });

  await i18n.loadLocale("ky", {
    source: `language = Тил 
      .english = Аглисче 
      .french = Французча 
      .german =  Немисче  
      .italian =  Италиянча  
      .spanish =  Испанча  
      .japanese =  Япончо  
      .chinese =  Кытайча  
      .korean = Корейче  
      .portuguese = Португалча  
      .russian = Орусча  
      .polish = Полякча  
      .uzbek =  Өзбекче
      .hindi =  Индусча  
      .arabic =  Арабча  
      .turkish =  Түркчө
      .kyrgyz =  Кыргызча 
      .kazakh =  Казакча 
      .language-set = Тил тандалды
      .language-set-success =  {$language} тили тандалды
      `,
  });

  await i18n.loadLocale("ru", {
    source: `language = Язык 
      .english = Английский 
      .french = Французский 
      .german =  Немецкий  
      .italian =  Итальянский  
      .spanish =  Испанский  
      .japanese =  Японский  
      .chinese =  Китайский  
      .korean = Корейский  
      .portuguese = Португальский  
      .russian = Русский  
      .polish = Польский  
      .uzbek =  Узбекский  
      .hindi =  Индуский  
      .arabic =  Арабский  
      .turkish =  Турецкий 
      .kyrgyz =  Кыргызский 
      .kazakh =  Казахский
      .language-set = Язык выбран
      .language-set-success =  Вы выбрали {$language} язык
      `,
  });
};
