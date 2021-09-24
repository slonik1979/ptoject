function button() {
    return 'button';
}

class Slider {
    constructor(widht, height, count) {
        this.widht = widht;
        this.height = height;
        this.count = count;
    }
    nextSlider() {
        console.log('Moving forward')
    }
    prevSlider() {
        console.log('Moving back')
    }
    whoAmI() {
        console.log(this.widht, this.height, this.count)
    }
}

class AutoSlider extends Slider {
    constructor(widht, height, count, auto) {
        super(widht, height, count);
        this.auto = auto;
    }
    play() {
        console.log(`Autoplay: ${this.auto}`);
    }
}


// const slider = new AutoSlider(300, 800 , 10, true);

// slider.whoAmI();
// slider.play();

export {button};

export default Slider;