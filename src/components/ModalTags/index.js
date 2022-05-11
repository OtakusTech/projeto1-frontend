import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  Button,
  Modal,
  Row,
  Badge
} from "reactstrap";
import api from "../../services/api/api";
import InputText from "../InputText";

const Modaltags = ({ isOpen, submit, close }) => {

    const [tag, setTag] = useState('');
    const [tags, setTags] = useState({});

    useEffect(() => {
        setTag('');
        setTags({});
    }, [isOpen])

    const handleTags = async () => {
        try{
            const result = await api.post('/tags', { tag });
            const { data } = result;
            if (!tags[data.tagId]) {
                setTags({ ...tags, [data.tagId]: data});
                setTag('');
            }
        } catch (error) {
            toast.error("Não foi possível cadastrar a TAG: Tag já cadastrada");
        }
    }

    return (
        <Modal
            className="modal-dialog-centered"
            isOpen={isOpen}
            toggle={close}
        >
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    ADICIONAR TAGS
                </h5>
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => close()}
                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>
            <div className="modal-body">
                <Row className="flex-lg-nowrap">
                    <InputText
                        id="tag"
                        value={tag}
                        type="texto"
                        onChange={(value) => setTag(value)}
                    />
                    <Button style={{ backgroundColor: '#34004a', color: 'white'}} onClick={() => handleTags()}>
                        +
                    </Button>
                </Row>
                <Row className="mt-3">
                    {
                        Object.keys(tags).map(tagId => {
                            return (
                            <Badge key={tagId} color="light" pill className="mr-2 pr-3 pl-3">
                                {tags[tagId].name}
                            </Badge>
                            )
                        })
                    }
                </Row>
            </div>
            <div className="modal-footer">
                <Button style={{ backgroundColor: '#34004a', color: 'white'}} type="button" onClick={() => submit(tags)}>
                    SALVAR TAGS
                </Button>
            </div>
        </Modal>
    );
  }

export default Modaltags;