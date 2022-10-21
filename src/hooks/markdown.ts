import { Remarkable } from "remarkable";

interface Props {
  input: string;
}

export const markdown = (input: Props["input"]) => {
  const md = new Remarkable("full");
  md.set({
    html: true,
    breaks: true,
  });
  return {
    __html: md.render(input),
  };
};