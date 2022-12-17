const usbDetect = require('usb-detection');
const sound = require("sound-play");
const path = require("path");


//audio
const oniichan = path.join(__dirname, "OniiChan.mp3");
const yamete = path.join(__dirname, "YameteKudasai.mp3");

console.log("start detecting...")

usbDetect.startMonitoring();
//start section
// add
usbDetect.on('add', function (device) {
    console.log('add', device);
    sound.play(oniichan);

});
usbDetect.on('add:vid', function (device) {
    console.log('add', device);
});
usbDetect.on('add:vid:pid', function (device) {
    console.log('add', device);
});
//end section
//  remove
usbDetect.on('remove', function (device) {
    sound.play(yamete);

    console.log('remove', device);
});
usbDetect.on('remove:vid', function (device) {
    console.log('remove', device);
});
usbDetect.on('remove:vid:pid', function (device) {
    console.log('remove', device);
}
);


// usbDetect.stopMonitoring()