// import { createContext, useEffect, useState } from 'react'
// import { usePostService } from '../rest-client/admin'

// export const AdminContext = createContext()

// export const AdminContextProvider = ({ children }) => {
//   const { getData } = usePostService()
//   const [posts, setPosts] = useState([])

//   const fetchPosts = async () => {
//     const _posts = await getData()
//     setPosts(_posts)
//   }

//   useEffect(() => {
//     fetchPosts()
//   }, [])

//   return (
//     <AdminContext.Provider value={{ posts, fetchPosts }}>
//       {children}
//     </AdminContext.Provider>
//   )
// }
