const slides = [
  {
    text: `
      Hello, \n I'm a Frontend engineer with the focus on ...
    `,
    imageSrc: "/slide-0.jpg",
    style: {
      color: "#fff",
      background: "#000"
    }
  },
  {
    text: `
      Scalable and rich experience on the web, avoiding ...
    `,
    imageSrc: "/slide-1.jpg",
    style: {
      color: "#181818",
      background: "#fff"
    }
  },
  {
    text: `
      Majority of the web which is bloated with average websites, delivering poor design, performance and experience
    `,
    imageSrc: "/slide-2.jpg",
    style: {
      color: "#fff",
      background: "#000",
      fontSize: 50
    }
  },
  {
    text: `
      Let's make the web a better places, together.
    `,
    imageSrc: "/slide-3.jpg",
    style :{
      color: "#181818",
      background: "#fff",
      fontSize: 60
    }
  }
];

export const useSlides = () => slides;