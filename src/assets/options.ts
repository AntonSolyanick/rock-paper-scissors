import { ReactElement } from "react";

import {
  iconLizard,
  iconPaper,
  iconRock,
  iconScissors,
  iconSpock,
} from "./icons/icons";

export type option = {
  name: string;
  beats: string[];
  icon: ReactElement;
  color: string;
};

export const pickOtions: option[] = [
  { name: "rock", beats: ["scissors", "lizard"], icon: iconRock, color: "red" },
  { name: "paper", beats: ["spock", "rock"], icon: iconPaper, color: "gray" },
  {
    name: "scissors",
    beats: ["paper", "lizard"],
    icon: iconScissors,
    color: "yellow",
  },
  {
    name: "lizard",
    beats: ["spock", "paper"],
    icon: iconLizard,
    color: "green",
  },
  {
    name: "spock",
    beats: ["scissors", "rock"],
    icon: iconSpock,
    color: "purple",
  },
];
