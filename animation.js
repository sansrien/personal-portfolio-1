var animateMe = new Vue({
    el: '#welcome-section',
    data: {
        showAnimationFor: {
            a: false,
            b: false,
            c: false,
        }
    },
    methods: {
        isViewableNow(isVisible, entry, section) {
            this.showAnimationFor[section] = isVisible;
        }
    }
});