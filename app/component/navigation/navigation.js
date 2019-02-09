function navigation() {
    const navigation = $('.navigation-component');
    const navigationControl = navigation.find('.header .control');
    const close = 'navigation-close';
    const headerControl = $('.header-component .control');

    navigationControl.click(function() {
        navigation.fadeOut();
        
    });
}