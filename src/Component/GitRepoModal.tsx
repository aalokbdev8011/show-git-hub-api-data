import React, { FunctionComponent } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { Repos } from '../type';

interface propsType {
    handleClose: () => void;
    repoData?: Repos[];
}

const GitRepoModal: FunctionComponent<propsType> = (props) => {
    const { handleClose, repoData } = props;
    return (
        <>
            <Button onClick={handleClose} className="px-4 mb-3">back</Button>
            <Container>
                <Row>
                    {repoData?.map((data: Repos) => (
                        <Col xs={12} md={6} lg={4} className="mb-4 h-auto">
                            <Card className='p-4 h-100'>
                                <Card.Title>{data?.name}</Card.Title>
                                <Card.Body>{data?.description}</Card.Body>
                                <Card.Link href={data?.html_url} target="_blank">Open Repo</Card.Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>

    )
}

export default GitRepoModal