function button() {
    return 'button';
}

class Slider {
    constructor(wight, height, count) {
        this.wight = wight;
        this.height = height;
        this.count = count;
    }
    nextSlide() {
        console.log('Moving forward');
    }
    prevSlide() {
        console.log('Moving back');
    }
    whoAmI() {
        console.log(this.wight, this.height, this.count);
    }
}

const slider = new Slider(500, 600, 5);
slider.whoAmI();