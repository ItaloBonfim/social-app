import { TextField } from "@mui/material"


export const TextField = function (props) {

    const body = {
        autoComplete: props.autoComplete,
        autoFocos: props.autoFocos,
        color: props.color,
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        error: props.error,
        FormHelperTextProps: props.FormHelperTextProps,
        fullWidth: props.fullWidth,
        helperText: props.helperText,
        id: props.id,
        margin: props.margin,
        maxRows: props.maxRows,
        minRows: props.minRows,
        multiline: props.multiline,
        placeholder: props.placeholder,
        required: props.required,
        rows: props.rows,
        select: props.select,
        size: props.size,
        sx: props.sx,
        variant:  props.variant
    }

    return (
        <TextField 
        {...body}
        />
    )
}