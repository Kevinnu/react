import { Col, Button, Card, ButtonGroup } from 'react-bootstrap';
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function UserPage() {
    const { handleLogout, userInfo } = useContext(AuthContext)
    return (
        <>
            <Col xs={10} className="mt-3 pt-3">
                <Card className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Informacion del usuario</Card.Title>
                        <Card.Text>
                            {userInfo.name} {userInfo.lastname}<br />
                            {userInfo.email}
                        </Card.Text>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="primary" onClick={handleLogout}>Logout</Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )

}

export default UserPage