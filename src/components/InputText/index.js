import { Label, Input } from "reactstrap";

const InputText = ({ name, value, id, type, rows, onChange }) => {
    return (
        <>
            <Label className="d-flex">
                {name}
            </Label>
            <Input
                className="form-control-alternative"
                id={id}
                value={value}
                type={type}
                rows={rows ? rows : null}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    )
};

export default InputText;