import { Interface } from "readline";

type ButtonProps = {
  piyo: string;
  hoge: string;
};

export default function MyButton(apple:ButtonProps) {
  console.log(apple);
  return(
    <button>I'm a { apple.piyo } button</button>
  )
}