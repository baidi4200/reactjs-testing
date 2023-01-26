import React from "react";
import renderer from "react-test-renderer";
import Users from "./users";

it("Renders when there are no users registered", () => {
  const user = renderer.create(<Users />).toJSON();
  expect(user).toMatchSnapshot();
});

it("Renders when there is one specific user registered", () => {
  const user = renderer.create(<Users items={["obaid"]} />).toJSON();
  expect(user).toMatchSnapshot();
});
it("Renders when all user are registered", () => {
  const user = renderer
    .create(<Users items={["obaid", "Arslan", "zubair", "ammad"]} />)
    .toJSON();
  expect(user).toMatchSnapshot();
});
