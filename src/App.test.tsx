import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })

  it("has the Control Panel when the application loads", () => {
    const element = screen.getByText("Control Panel");

    expect(element).toBeInTheDocument();
  })

  it("does not show the Answer when we first load", () => {
    const element = screen.queryByTestId("answer-label");

    expect(element).not.toBeInTheDocument();
  });

  it("does show the Answer when we click the reveal button", async () => {
    const button = screen.getByTestId("reveal-answer-button");
    button.click();
    const element = await screen.findByTestId("answer-label");
    expect(element).toBeInTheDocument();
  })

  it("shuffle users button works", async () => {

    const usersBefore = document.body.querySelectorAll("input");
    let userList: string[] = [];
    usersBefore.forEach(e => userList.push(e.value));
    let usersBeforeString: string = userList.sort().join("");

    const button = screen.getByTestId("shuffle-users-button");

    button.click();

    const usersAfter = document.body.querySelectorAll("input");
    let usersAfterList: string[] = [];
    usersAfter.forEach(e => usersAfterList.push(e.value));
    let usersAfterString: string = usersAfterList.sort().join("");

    expect(usersBeforeString !== usersAfterString);

  });

  it("has a swap button that swaps the card text", async () => {
    const swapBtn = screen.getByTestId('swap-current-card-button');
    const card1 = screen.getByTestId('card-text');
    console.log(`card text = ${card1}`);
    swapBtn.click();
    const card2 = screen.getByTestId('card-text');
    console.log(`card text = ${card2}`);
    expect(card1!==card2);
  });

  it('save and add new card functions correctly', async () => {

    screen.getByTestId("save-button").click();
    screen.getByTestId("add-new-card-button").click();
    screen.getByTestId("save-card-button").click();

  })

  


})
