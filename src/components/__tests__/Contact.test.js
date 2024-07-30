import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Cases",()=>{

    it("Should load contact us component", () => {
        render(<Contact />); // it will render on jsdom
      
        const heading = screen.getByRole("heading");
      
        expect(heading).toBeInTheDocument();
      });
      
      it("should load button on the component", () => {
        render(<Contact />);
      
        const button = screen.getByRole("button");
      
        // Assertion
        expect(button).toBeInTheDocument();
      });
      
      // Adjust based on actual content/text in your Contact component
      // test("should load random on the component", () => {
      //   render(<Contact />);
      
      //   // Use queryByText to find an element with the text "random"
      //   const random = screen.getByRole("random");
      
      //   expect(random).toBeInTheDocument();
      // });
      
      it("Should load all input on the component", () => {
        render(<Contact />);
      
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
      
        // Assertion
        expect(inputBoxes.length).toBeGreaterThan(0);
      });

})
