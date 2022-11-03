// var defaults = {
//     topic: "javascript",
//     format: "live",
//     slides: {
//         start: 0,
//         end: 100
//     }
// };

fakeajax("http://get-the workshop-tid", handleResponse);

function handleResponse({
    topic = "javascript",
    format = "live",
    slides: {
        start = 0,
        end = 100
    }

} = {}) {

    Testcase({
        topic,format,
        slides : {
            start,end
        }
    });
}

function Testcase(data) {
    console.log(
        data.topic == "js recent parts" &&
        data.format == "live" &&
        data.slides.start === 0 &&
        data.slides.end == 77
    );
}