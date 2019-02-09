function header() {
const navigation = $('.navigation-component');
const close = 'navigation-close';
const navigationControl = $('.header-component .control');
const headerControl = $('.header-component .control');

headerControl.click(function() {
    navigation.fadeIn();
   
});
}