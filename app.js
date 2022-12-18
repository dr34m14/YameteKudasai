const usbDetect = require('usb-detection');
const sound = require("sound-play");
const path = require("path");


//audio
const ahh = path.join(__dirname, "ahh.mp3");
const yamete = path.join(__dirname, "YameteKudasai.mp3");

console.log("start detecting...")

usbDetect.startMonitoring();
//start section
// add
usbDetect.on('add', function (device) {
    console.log('add', device);
    sound.play(yamete);


});

//end section
//  remove
usbDetect.on('remove', function (device) {
    sound.play(ahh);

    console.log('remove', device);
});



// usbDetect.stopMonitoring()