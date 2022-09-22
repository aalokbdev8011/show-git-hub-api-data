import axios from 'axios';
import { FunctionComponent, useContext } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ContextData } from '../@contextAPI';
import { ContextType, GitData } from '../type';

interface propsType {
    data: GitData | undefined
}

const UserDetailsPage: FunctionComponent<propsType> = (props) => {
    const { data } = props;
    const navigate = useNavigate()
    const { setRepoData } = useContext(ContextData) as ContextType;

    const handleFetchRepo = async (url?: string) => {
        if (url)
            try {
                const { data } = await axios.get(url)
                setRepoData(data)
                navigate(`/repos/${url.split("https://api.github.com/users/")[1]}`)
            }
            catch (err) {
                console.log(err)
            }

    }

    return (
        <>
            <div className='container'>
                <div className='row mx-0 my-4'>

                    {data &&
                        <div className='col-md-12 col-lg-10 col-xl-8 mb-4 mx-auto'>
                            <div className='card text-center shadow p-4'>
                                <div>
                                    <Card.Title className=''>User Information Details</Card.Title>
                                    <div className='title-text'></div>
                                    <Card.Img variant="top" src={data?.avatar_url} className="rounded-circle mb-3 w-25 h-25" />
                                    <Card.Body>
                                        <div className='d-flex justify-content-center'>
                                            <strong>Name:- </strong>
                                            <Card.Title className='ms-3'>{data?.login}</Card.Title>
                                        </div>
                                        <div className='d-block d-sm-flex justify-content-center pb-3'>
                                            <strong>Description:-</strong>
                                            <Card.Text>
                                                {data?.bio}
                                            </Card.Text>
                                        </div>

                                        <div className='d-flex justify-content-center pb-3'>
                                            <div className='d-flex'>
                                                <strong>Followers:- </strong>
                                                <Card.Text className='ms-3'>
                                                    {data?.followers}
                                                </Card.Text>
                                            </div>
                                            <div className='d-flex ms-4'>
                                                <strong>Following:- </strong>
                                                <Card.Text className='ms-3'>
                                                    {data?.following}
                                                </Card.Text>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-center pb-3'>
                                            <div className='d-flex'>
                                                <strong>Public Repo:- </strong>
                                                <Card.Text className='ms-3'>
                                                    {data?.public_repos}
                                                </Card.Text>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-center pb-3'>
                                            <div className='d-flex'>
                                                <strong>Created At:- </strong>
                                                <Card.Text className='ms-3'>
                                                    {data?.created_at}
                                                </Card.Text>
                                            </div>
                                            <div className='d-flex ms-4'>
                                                <strong>Updated At:- </strong>
                                                <Card.Text className='ms-3'>
                                                    {data?.updated_at
                                                    }
                                                </Card.Text>
                                            </div>
                                        </div>
                                        <Button variant="secondary" className='mt-2' onClick={() => handleFetchRepo(data?.repos_url)}>Show Repository</Button>
                                    </Card.Body>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>

        </>
    )
}
export default UserDetailsPage;


