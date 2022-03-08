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

// var animateMe = new Vue({
//     el: '#demo',
//     data: {
//         showAnimation: false,
//     },
//     methods: {
//         isViewableNow(isVisible, entry) {
//             this.showAnimation = isVisible;
//         }
//     }
// });

var animateMe2 = new Vue({
    el: '#about-me',
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

var animateSkills  = new Vue({
    el: '#skills',
    data: {
        showAnimation: false,
    },
    methods: {
        isViewableNow(isVisible, entry) {
            this.showAnimation = isVisible;
        }
    }
});

var animateProject= new Vue({
    el: '#projects',
    data: {
        showAnimationFor: {
            a: false,
            b: false,
            c: false,
            d: false
        }
    },
    methods: {
        isViewableNow(isVisible, entry, section) {
            this.showAnimationFor[section] = isVisible;
        }
    }
});


var animateContact  = new Vue({
    el: '#contact',
    data: {
        showAnimation: false,
    },
    methods: {
        isViewableNow(isVisible, entry) {
            this.showAnimation = isVisible;
        }
    }
});
