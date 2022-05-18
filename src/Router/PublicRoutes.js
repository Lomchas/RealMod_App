import { Navigate } from 'react-router-dom'

const PublicRoutes = ({ children, auth }) => {
    return (
        auth ?
            <Navigate to='/*'/>
            : children
    )
}

export default PublicRoutes