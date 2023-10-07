tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
        color: "#000000",
    },
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: ["#FFFFFF", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"],
        },
        shape: {
            type: "triangle",
        },
        opacity: {
            value: 0.5,
            random: false,
        },
        size: {
            value: 5,
            random: true,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outMode: "bounce",
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
            },
        },
        lineLinked: {
            enable: true,
            distance: 150,
            color: "#FFFFFF",
            opacity: 0.4,
            width: 1,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
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
                distance: 100,
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