(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = [
    '$translateProvider',
    'tmhDynamicLocaleProvider',
    '$httpProvider',
    '$compileProvider',
    'apiProvider',
  ];

  function config($translateProvider, tmhDynamicLocaleProvider, $httpProvider, $compileProvider, apiProvider) {

    // Angular perfs best practices
    $httpProvider.useApplyAsync(true);
    $compileProvider.debugInfoEnabled(false);
    apiProvider.setUrl('/api/');

    // i18n angular-translate
    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/app-locale_',
      suffix: '.json'
    });
    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.fallbackLanguage('en');
    $translateProvider.useLocalStorage();

    // i18n angular-dynamic-locale
    tmhDynamicLocaleProvider.localeLocationPattern('/i18n/angular/angular-locale_{{locale}}.js');
  }
})();
