import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "@/pages/index"

describe('Landing Page', () => {
    it('Should render properly', () => {
        // render page
        render(<LandingPage/>);

        //get element
        const merchantImage = screen.getByAltText("background-merchant");

        // expect
        expect(merchantImage).toBeInTheDocument();
    });

    it('Should render popup', async () => {
        render(<LandingPage/>);

        await new Promise((r) => setTimeout(r, 3100));

        const popupAge = screen.getByTestId('popup-age');

        expect(popupAge).toHaveClass('container');
    })

})
