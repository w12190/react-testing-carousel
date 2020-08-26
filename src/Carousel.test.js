import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it ("renders (without testing)", function (){
  render(<Carousel />)
})

it ("matches snapshot", function (){
  const {container} = render(<Carousel />)
  expect(container).toMatchSnapshot()
})

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
});

it ("works when you click on the left arrow", function (){
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();

  // move forward two back one
  fireEvent.click(queryByTestId("right-arrow"))
  fireEvent.click(queryByTestId("right-arrow"))
  fireEvent.click(queryByTestId("left-arrow"))

  // expect the third image to show, but not the second
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
})

it ("it removes the left arrow when on first image", function (){
  const { queryByTestId } = render(<Carousel />);
  
  //check to see that the left arrow is gone
  //CD: make sure something is in the document (i.e. an image that)
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();
})

it('it removes the right arrow when on last image', function(){
  const { queryByTestId } = render(<Carousel />);
  
  fireEvent.click(queryByTestId("right-arrow"))
  fireEvent.click(queryByTestId("right-arrow"))
  
  //check to see that the right arrow is gone
  //CD: make sure something is in or not in the document (i.e. an image )
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument();
})