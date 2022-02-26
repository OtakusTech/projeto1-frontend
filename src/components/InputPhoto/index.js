import { Label, Row } from "reactstrap";
import { Image, StyledButton, StyledInput } from "./styles";

const InputPhoto = ({ title, buttonName, value, onClick }) => {

    return (
        <>
            <Label className="d-flex">
                {title}
            </Label>
            <Row className="justify-content-center">
                <Image
                    className="rounded-circle"
                    src={value}

                />
            </Row>
            <Row className="justify-content-center">
                    <StyledInput
                        id="profilePhoto"
                        className="mt-2"
                        type="file"
                        onChange={(event) => onClick(event)}
                    />
                    <StyledButton
                        color="danger"
                        size="sm"
                        type="button"
                        htmlFor="profilePhoto"
                        className="d-flex mt-2"
                    >
                        {buttonName}
                    </StyledButton>
            </Row>
        </>
    );
}

export default InputPhoto;