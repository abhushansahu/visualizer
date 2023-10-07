tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
        color: "#000000",
    },
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"],
            animation: {
                enable: true,
                speed: 10,
                sync: false,
            },
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            animation: {
                enable: true,
                speed: 10,
                minimumValue: 0.1,
                sync: false,
            },
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outMode: "out",
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
            },
        },
        lineLinked: {
            enable: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 400,
                lineLinked: {
                    opacity: 0.5,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
                speed: 3,
            },
            repulse: {
                distance: 200,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});