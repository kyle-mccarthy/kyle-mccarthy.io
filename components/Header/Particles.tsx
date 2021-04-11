import { FC, useRef, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { Container } from 'tsparticles';

const options = {
  autoPlay: true,

  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: false,
      },
      onDiv: {
        enable: false,
      },
      onHover: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.4,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: '#ffffff',
            },
            stop: {
              value: '#000000',
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: '#000000',
          },
          length: 2000,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
    },
  },
  motion: {
    disable: false,
    reduce: {
      factor: 20,
      value: true,
    },
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: false,
      mode: 'bounce',
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: '#fff',
      animation: {
        h: {
          count: 0,
          enable: true,
          offset: 0,
          speed: 50,
          sync: false,
        },
        s: {
          enable: false,
        },
        l: {
          enable: false,
        },
      },
    },
    destroy: {
      mode: 'none',
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
      },
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
        },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: {
        value: 'random',
      },
      consent: false,
      distance: 100,
      enable: true,
      frequency: 1,
      opacity: 1,
      shadow: {
        enable: false,
      },
      triangles: {
        enable: false,
      },
      width: 1,
      warp: false,
    },
    move: {
      angle: {
        offset: 45,
        value: 90,
      },
      attract: {
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      decay: 0,
      distance: 0,
      direction: 'none',
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        maxSpeed: 50,
      },
      path: {
        enable: false,
      },
      outModes: {
        default: 'bounce',
        bottom: 'bounce',
        left: 'bounce',
        right: 'bounce',
        top: 'bounce',
      },
      random: false,
      size: false,
      speed: 2,
      straight: false,
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 200,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.5,
        sync: false,
        destroy: 'none',
        minimumValue: 0.3,
        startValue: 'random',
      },
    },
    reduceDuplicates: true,
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: 'clockwise',
      path: false,
    },
    shadow: {
      enable: false,
    },
    shape: {
      options: {
        image: [null],
        images: [null],
      },
      type: 'circle',
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: {
        min: 1,
        max: 3,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 3,
        sync: false,
        destroy: 'none',
        minimumValue: 1,
        startValue: 'random',
      },
    },
    stroke: {
      width: 0,
      color: {
        value: '',
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 0,
            sync: false,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
        },
      },
    },
    twinkle: {
      lines: {
        enable: false,
      },
      particles: {
        enable: false,
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  themes: [],
};

const Component: FC = () => {
  // const container = useRef<Container>(
  //   new Container('particles-instance', options)
  // );
  // const ref = useRef<HTMLCanvasElement | null>(null);

  // useEffect(() => {
  //   if (!container.current.element && ref.current) {
  //     container.current.canvas.element = ref.current;
  //   }
  // }, []);

  return (
    <>
      <Particles
        options={options}
        style={{ position: 'absolute', top: 0, opacity: 0.5 }}
      />
    </>
  );
};

export default Component;
