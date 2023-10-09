import Contact from "../src/components/Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"

test("Should load contact us component",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("Should load button inside Contact component",()=>{
    render(<Contact/>)
    const button=screen.getByText('Submit');
    expect(button).toBeInTheDocument();
});

test("Should load input field inside Contact component",()=>{
    render(<Contact/>)
    const input=screen.getByPlaceholderText('Name');
    expect(input).toBeInTheDocument();
});


test("Should load 2 input boxes inside the Contact Component",()=>{
    render(<Contact/>)
    const inputBoxes=screen.getAllByRole('textbox');
    expect(inputBoxes.length).toBe(2);
})


