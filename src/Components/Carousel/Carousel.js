import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://cimg.co/w/articles/0/5a6/185e5cebbf.jpg",
    altText: "Slide 1",
    // caption: "Slide 1",
    // header: "Slide 1 Header",
    key: "1",
  },
  {
    src:
      "https://cmsprime.com/wp-content/uploads/2019/11/Cryptocurrency-trading-1200x758.jpeg",
    altText: "Slide 2",
    // caption: "Slide 2",
    // header: "Slide 2 Header",
    key: "2",
  },
  {
    src: "https://nairametrics.com/wp-content/uploads/2020/10/Crypto-1.png",
    altText: "Slide 3",
    // caption: "Slide 3",
    // header: "Slide 3 Header",
    key: "3",
  },
];

const Example = () => <UncontrolledCarousel controls={false} items={items} />;

export default Example;
