(function() {
    function getRandomColor() {
        var colors= ["#b6004e", "#c74da5", "#183c94", "#299"],
            idx= Math.floor(colors.length*Math.random());

        return (colors[idx]);
    }

    function animateIt(el, dur, delay) {
        var animateEl= el.animate([
                {
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(0)"
                },
                {
                    opacity: 1,
                    transform: "translate(-50%, -50%) scale(1)"
                },
                {
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(1.1)"
                }
            ],
            {
                duration: dur,
                easing: "ease-out",
                fill: "forwards",
                delay: delay || 0
            });

        return animateEl;
    }

    function createBubble() {
        var ns= "http://www.w3.org/2000/svg",
            bubble= document.createElement("div"),
            bubbleDummy= document.createElement("div"),
            heart= document.createElementNS(ns, "svg"),
            heartPath= document.createElementNS(ns, "path");

        heart.setAttribute("viewBox", "0 0 600 500")
        heartPath.setAttribute("d", "M300,150 C500,10 600,300 300,400 C0,300 100,10 300,150");
        bubble.classList.add("bubble");
        bubble.style.color= getRandomColor();
        bubbleDummy.classList.add("bubble-dummy");
        heart.classList.add("heart");

        heart.appendChild(heartPath);
        bubble.appendChild(bubbleDummy);
        bubble.appendChild(heart);

        document.body.appendChild(bubble);
        return {
            setPosition: function(x,y) {
                bubble.style.left= x +"px";
                bubble.style.top= y + "px";
            },
            _animate: function() {
                var animateBubble= animateIt(bubbleDummy, 1200),
                    animateHeart= animateIt(heart, 2000);

                return {
                    bubbleDur: 1200,
                    heartDur: 2000
                }
            },
            remove: function(el) {
                bubble.remove();
            }
        }
    }

    document.body.addEventListener("click", handleDown, false);
    document.body.addEventListener("touchstart", handleDown, false);

    function handleDown(e) {
        var _x= e.pageX,
            _y= e.pageY;

        var bubble= createBubble();

        bubble.setPosition(_x, _y);
        var animation= bubble._animate(),
            totalDelay= animation.bubbleDur+ animation.heartDur;
        setTimeout(()=> {
            bubble.remove();
        }, totalDelay);
    }

    var w= document.body.clientWidth,
        h= document.body.clientHeight;

    function bubbleUp() {
        var de= {
            pageX: Math.random()*w,
            pageY: Math.random()*h
        }

        handleDown(de);

        bblUp= setTimeout(bubbleUp, 200);
    }
    bubbleUp();

    window.addEventListener("resize", function() {
        w= document.body.clientWidth,
            h= document.body.clientHeight;
    }, false);
})();