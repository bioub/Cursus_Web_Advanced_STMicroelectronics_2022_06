import { PropsWithChildren } from "react";

type Props = {

};

function Button(props: PropsWithChildren<Props>) {
  return (
    <button className="Button">
      {props.children}
    </button>
  );
}

export default Button;
