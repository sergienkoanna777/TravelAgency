const trips = document.querySelectorAll('.trip');
trips.forEach(trip=>{
    trip.addEventListener('mouseover', ()=>{
        removeFocus();
        trip.classList.add('selected');
    })
    removeFocus =()=>{
        trips.forEach(trip=>{
            trip.classList.remove('selected');
        })
    }
})

function saleCountdown() {
    const saleDate = new Date("August 1, 2022 08:00");
    const now = new Date();
    const diff = saleDate - now;

    const msInSecond = 1000; 
    const msInMinute = 60 * 1000; 
    const msInHour = 60 * 60 * 1000; 
    const msInDay = 24 * 60 * 60 * 1000; 
    const displayDay =  Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    welcomeSale();
    }

}

let timerID = setInterval(saleCountdown, 1000);

function welcomeSale() {
    const heading = document.querySelector("h1");
    heading.textContent = "Welcome to discounts!";
    heading.classList.add("red");
}




$(window).load(function(){

    var wave = TweenMax.to('#Wave', 0.1, {x: -21, repeat: -1, ease:Linear.easeNone});
    var ropes = TweenMax.to('#PearRope, #CupRope', 0.08, {rotation: 0.8, transformOrigin: 'right bottom', yoyo: true, repeat: -1});
    var ropeBucket = TweenMax.to('#BucketRope', 0.08, {rotation: -0.8, transformOrigin: 'right bottom', yoyo: true, repeat: -1});

    // Pear
    var pear = TweenMax.to('#Pear', 0.08, {y: '-=1px', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var pearLeaf = TweenMax.to('#PearLeaf', 0.08, {rotation: 10, transformOrigin: 'right center', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var pearHands = TweenMax.to('#PearHandLeft, #PearHAndRight', 0.08, {rotation: -2, transformOrigin: 'left center', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var pearHandle = TweenMax.to('#PearHandle, #PearHandle2, #PearHandle3', 0.08, {y: '-=2px', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var pearLegs = TweenMax.staggerTo('#PearLegLeft, #PearLegRight', 0.08, {y: '-=1px', yoyo: true, repeat: -1, delay: 0.04, ease:Linear.easeNone}, 0.08);

    // Pear Face
    var pearFace = new TimelineMax({repeat: -1, repeatDelay: 5});
        pearFace.to('#PearFaceEl', 0.3, {x: '-=12px'}, 2)
                //.to('#PearHandLeft', 0.1, {transformOrigin: 'left center', rotation: 140, x: '-=22px', ease:Power2.easeOut}, 2)
                .set('#PearHandHello', {autoAlpha: 1})
                .set('#PearHandLeft', {autoAlpha: 0, x: 0})
                .fromTo('#PearHandWave', 0.2, {transformOrigin: '11px 27px', rotation: -91}, {rotation: -40, ease:Linear.easeNone})
                .to('#PearHandWave', 0.1, {transformOrigin: '11px 27px', rotation: 12, ease:Linear.easeNone, yoyo: true, repeat: 17}, 2.6)
                .to('#Hand', 0.1, {transformOrigin: '7px 10px', rotation: 60, ease:Linear.easeNone, yoyo: true, repeat: 17}, 2.6)
                .set('#PearHandHello', {autoAlpha: 0})
                .set('#PearHandLeft', {autoAlpha: 1})
                .to('#PearFaceEl', 0.3, {x: '+=12px'}, 6);

    // Cup
    var cup = TweenMax.to('#Cup', 0.08, {y: '-=1px', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var cupStraw = TweenMax.fromTo('#StrawH', 0.08, {rotation: 10}, {rotation: 0, transformOrigin: 'left center', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var cupHands = TweenMax.to('#CupHandLeft, #CupHandRight', 0.08, {rotation: -2, transformOrigin: 'left center', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var cupHandle = TweenMax.to('#CupHandle, #CupHandle2, #CupHandle3', 0.08, {y: '-=2px', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var cupLegs = TweenMax.staggerTo('#CupLegLeft, #CupLegRight', 0.08, {y: '-=1px', yoyo: true, repeat: -1, delay: 0.04, ease:Linear.easeNone}, 0.08);
    var cupJuice = TweenMax.to('#CupJuiceEl', 0.2, {x: -56, yoyo: true, repeat: -1});
    var fruit1 = TweenMax.to('#Fruit1, #Fruit3', 5, {rotation: -360, transformOrigin: 'center center', repeat: -1, ease:Linear.easeNone});
    var fruit2 = TweenMax.to('#Fruit2', 5, {rotation: 360, transformOrigin: 'center center', repeat: -1, ease:Linear.easeNone});
    var berry1 = TweenMax.to('#Berry1', 3, {y: -3, x: -6, yoyo: true, repeat: -1, ease:Linear.easeNone});
    var berry2 = TweenMax.to('#Berry2', 3, {x: 6, yoyo: true, repeat: -1, ease:Linear.easeNone});
    var berry3 = TweenMax.to('#Berry3', 3, {y: -4, yoyo: true, repeat: -1, ease:Linear.easeNone});

    // Bucket
    var bucket = TweenMax.to('#Bucket', 0.08, {y: '+=1px', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var bucketLegs = TweenMax.to('#BucketFeet', 0.08, {y: '-=2px', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var corn = TweenMax.to('#Popcorn path:nth-child(2n+1)', 0.08, {y: '+=1px', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var cornOdd = TweenMax.to('#Popcorn path:nth-child(2n)', 0.08, {y: '-=3px', yoyo: true, repeat: -1, ease:Linear.easeNone});        
    var bucketHands = TweenMax.to('#BucketHandLeft, #BucketHandRight', 0.08, {rotation: 3, transformOrigin: 'left center', yoyo: true, repeat: -1, ease:Linear.easeNone});
    var bucketHandle = TweenMax.to('#BucketHandle, #BucketHandle2, #BucketHandle3', 0.08, {y: '+=2px', yoyo: true, repeat: -1, ease:Linear.easeNone});

    // Eyes
    var eyes = new TimelineMax({repeat: -1, repeatDelay: 3}) 
        .to('#BucketEyeLeft, #BucketEyeRight', 0.04, {scaleY: 0.2, yoyo: true, repeat: 1, repeatDelay: 0.04, transformOrigin: 'center'})
        .to('#CupEyeLeft, #CupEyeRight', 0.04, {scaleY: 0.2, yoyo: true, repeat: 1, repeatDelay: 0.04, transformOrigin: 'center', delay: 1})
        .to('#PearEyeLeft, #PearEyeRight', 0.04, {scaleY: 0.2, yoyo: true, repeat: 1, repeatDelay: 0.04, transformOrigin: 'center', delay: 1.8})

    // Flying corn
    function throwCorn() {
        TweenMax.fromTo('#CornFly', 0.2, {x: 0, rotation: (Math.random()*360+1), transformOrigin: 'center'}, {x: -250, onComplete: throwCorn, delay: 0.2});   
    }
    throwCorn();

});