import { Label, Row } from "reactstrap";
import { Image, StyledButton, StyledInput } from "./styles";

const SIZE_DEFAULT = {
    "height": "100px",
    "width": "100px",
};

const InputPhoto = ({ title, className, titleImage, buttonName, value, onClick, size = SIZE_DEFAULT, disabled = false }) => {

    return (
        <>
            <Label className="d-flex">
                {titleImage}
            </Label>
            <Row className="justify-content-center">
                <Image
                    className={className}
                    size={size}
                    src={value}
                    title={title}
                />
            </Row>
            <Row className="justify-content-center">
                    <StyledInput
                        id="profilePhoto"
                        className={`mt-2 ${disabled ? "d-none" : ""}`}
                        type="file"
                        onChange={(event) => onClick(event)}
                    />
                    <StyledButton
                        color="danger"
                        size="sm"
                        type="button"
                        htmlFor="profilePhoto"
                        className="d-flex mt-2"
                        disabled={disabled}
                    >
                        {buttonName}
                    </StyledButton>
            </Row>
        </>
    );
}

export default InputPhoto;