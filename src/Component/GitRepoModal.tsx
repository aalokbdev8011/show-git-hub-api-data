import axios from 'axios';
import { FunctionComponent, useContext, useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { ContextData } from '../@contextAPI';
import { ContextType, Repos } from '../type';

const GitRepoModal: FunctionComponent = () => {
    const navgiation = useNavigate()
    const params = useParams()
    const { repoData, setRepoData } = useContext(ContextData) as ContextType;
    const handleBack = () => {
        navgiation("/")
    }
    const getAPi = async () => {
        try {
            const { data } = await axios.get(`/users/${params?.url}/repos`)
            setRepoData(data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (repoData?.length === 0) {
            getAPi()
        }
    }, [repoData])

    return (
        <>
            <Button onClick={handleBack} className="btn btn-secondary backBtn mt-3 px-4 mb-3">Go Back</Button>
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