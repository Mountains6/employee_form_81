import type { ButtonProps } from "./types.tsx";
import { MyButton } from "./styles.ts";

function Button({ name, type = "button", onButtonClick}: ButtonProps) {
  return (
    <MyButton type={type} onClick={onButtonClick}>
      {name}
    </MyButton>
  );
}

export default Button;
