import { useState, useRef, useEffect } from 'react';
import { reqresApi } from '../api/reqres';
import { ReqResList, User } from '../interfaces/reqres';

const useUsers = () => {
	const [users, setUsers] = useState<User[]>([])
	const pageRef = useRef(1)

	useEffect(() => {
		loadUsers()
	}, [])

	const loadUsers = async () => {
		const res = await reqresApi.get<ReqResList>('/users', {
			params: {
				page: pageRef.current
			}
		})

		if (res.data.data.length > 0) {
			setUsers(res.data.data)
		} else {
			alert("That's all buddy ")
		}
	}

	const handleNextClick = () => {
    // Increment the page before making the next API call
    pageRef.current++;
    loadUsers();
  };

	const handlePrevClick = () => {
    // Decrement the page before making the previous API call
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUsers();
    }
  };

	return {
		users,
		handleNextClick,
		handlePrevClick
	}
}
 
export default useUsers;