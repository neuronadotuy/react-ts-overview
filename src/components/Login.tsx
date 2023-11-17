import { useReducer, useEffect } from 'react'

interface AuthState {
	validating: boolean
	token: string | null
	username: string
	name: string
}

const initialState: AuthState = {
	validating: true,
	token: null,
	username: '',
	name: '',
}

type LoginPayload = {
	username: string
	name: string
}

type AuthAction = 
	{ type: 'logout' } | 
	{ type: 'login', payload: LoginPayload}

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
 switch (action.type) {
	case 'logout':
		return { validating: false, token: null, username: '', name: '' }
	
	case 'login':
		const { username, name } = action.payload 
		return { validating: false, token: '12qwasZX', username: username, name: name}
 
	default:
		return state
 }
}

const Login = () => {

	// const [state, dispatch] = useReducer(reducer, initialState, init)
	const [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState)

	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: 'logout' })
		}, 1500)
	}, [])

	const login = () => {
		dispatch({
			type: 'login',
			payload: {
				username: 'Strider',
				name: 'Fernando'
			}
		})
	}

	const logout = () => {
		dispatch({
			type: 'logout',
		})
	}

	return ( 
		<>
			<h3>Login</h3>
			{
				validating ? (						
					<div className="alert alert-info">
						Thinking...
					</div>
				) : (
					token ? (
						<div className="alert alert-success">Welcome {name}</div>
					) : (
						<div className="alert alert-danger">Can't access</div>
					)
				)
			}
			{
				token ? (
					<button 
						className="btn btn-danger"
						onClick={ logout }
					>
						Logout
					</button>
				) : (
					<button 
						className="btn btn-primary"
						onClick={ login }
					>
						Login
					</button>
				)
			}
		</>
	 );
}
 
export default Login;