import React from "react";

import { storiesOf } from "@storybook/react";

import Component from "../components/test_component";

storiesOf("Test", module).add("with text", () => <Component />);
