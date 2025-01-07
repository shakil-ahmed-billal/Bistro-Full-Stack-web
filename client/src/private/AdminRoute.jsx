import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useAdmin from "../hooks/useAdmin"
import PropTypes from 'prop-types'

const AdminRoute = ({children}) => {

    const {user , loading} = useAuth()
    const [isAdmin , isPending] = useAdmin()


    if(loading || isPending){
        return <p>Loading..</p>
    }
    if(user && isAdmin){
        return children
    }
  return <Navigate to={`/`} replace></Navigate>
}
AdminRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminRoute

