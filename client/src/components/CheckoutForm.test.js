import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
// import { waitFor,
//     fireEvent, } from "@testing-library/dom";
// import '@testing-library/jest-dom/extend-expect'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    const {getByText} = render(<CheckoutForm />);

    const header = getByText("Checkout Form");

    expect(header).toHaveTextContent("Checkout Form");

});

test("form shows success message on submit with form details", () => {

    const {getByTestId} = render(<CheckoutForm />);

    const fName = getByTestId(/firstNameTest/i);
    const lName = getByTestId(/lastNameTest/i);
    const address = getByTestId(/address/i);
    const city = getByTestId(/city/i);
    const state = getByTestId(/state/i);
    const zip = getByTestId(/zip/i);
    const button = getByTestId(/button/i);

    fireEvent.change(fName, {target: {value: 'Aric'}});
    expect(fName.value).toBe('Aric');
    fireEvent.change(lName, {target: {value: 'Repp'}});
    expect(lName.value).toBe('Repp');
    fireEvent.change(address, {target: {value: '7777 south'}});
    expect(address.value).toBe('7777 south');
    fireEvent.change(city, {target: {value: 'nowhere'}});
    expect(city.value).toBe('nowhere');
    fireEvent.change(state, {target: {value: 'Boring'}});
    expect(state.value).toBe('Boring');
    fireEvent.change(zip, {target: {value: '55555'}});
    expect(zip.value).toBe('55555');
    fireEvent.click(button);

    expect(getByTestId(/successMessage/i)).toHaveTextContent("Woo-hoo");
    
});
