import { useEffect, useRef, useState } from 'react';
import { reqresApi } from '../api/reqres';
import { ReqResList, User } from '../interfaces/reqres';
import useUsers from '../hooks/useUsers';
const Users = () => {

	const {users, handleNextClick, handlePrevClick} = useUsers()

	const renderItem = ( user: User ) => {
		return (
			<tr key={user.id.toString()}>
				<td>
					<img 
						src={user.avatar}
						alt={user.first_name} 
						style={{
							width: 50,
							borderRadius: 100,
						}}	
					/>
				</td>
				<td>{user.first_name} {user.last_name}</td>
				<td>{user.email}</td>
			</tr>
		)
	}

	return ( 
		<>
			<h3>Users:</h3>
			<table className="table">
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map( user => renderItem(user))}
				</tbody>
			</table>
			<button 
				className='btn btn-primary'
				onClick={handlePrevClick}	
			>
				Prev
			</button>
			<button 
				className='btn btn-primary'
				onClick={handleNextClick}
			>
				Next
			</button>
		</>
	 );
}
 
export default Users;