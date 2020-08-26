import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";

it ("renders (without testing)", function (){
  render(<Card
    caption="test_caption"
    src={image1} //this is the image
    currNum={1}
    totalNum={1}
  />)
})

it ("matches snapshot", function (){
  const {container} = render(
  <Card
    caption="test_caption"
    src={image1} //this is the image
    currNum={1}
    totalNum={1}
  />)
  expect(container).toMatchSnapshot()
})

it('creates an accurate card', function(){
  const {container} = render(
  <Card
    caption="test_caption"
    src={image1} //this is the image
    currNum={1}
    totalNum={1}
  />)

  expect(container.querySelector('.Card-image')).toBeInTheDocument()
  expect(container.querySelector('.not-here')).not.toBeInTheDocument()
})