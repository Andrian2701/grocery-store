import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

type InputMaskProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  mask: string;
};

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  function InputMask(props, ref) {
    const { onChange, mask, ...other } = props;

    return (
      <IMaskInput
        inputRef={ref}
        mask={mask}
        definitions={{
          "#": /[1-9]/,
        }}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        {...other}
      />
    );
  }
);
