import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

function AlertMsg({ variant, text, duration, path }) {
    const navigate = useNavigate();
    if (duration !== 0 && path) {
        setTimeout(() => { navigate(path) }, duration)
    }
    return (
        <Alert variant={variant}>{text}</Alert>
    )
}

export default AlertMsg