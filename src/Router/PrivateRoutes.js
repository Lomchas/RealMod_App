import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children, auth }) => {
    return (
        auth ?
            children
            : <Navigate to='/'/>
    )
}

export default PrivateRoutes