import React from 'react';
import ReactDOM from 'react-dom';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PlotCanvas from "./PlotCanvas";

let container = null;

// Sets up a DOM element as a render target.
beforeEach(() => {
    container = document.createElement( "div" );
    document.body.appendChild( container );
});

// Cleans up on exit.
afterEach(() => {
    unmountComponentAtNode( container );
    container.remove();
    container = null;
});

it( "creates a canvas element", () => {
    act(() => {
        render( <canvas width="400" height="400" />, container );
    });
    expect( container.childNodes.length ).toBe( 1 );
});
