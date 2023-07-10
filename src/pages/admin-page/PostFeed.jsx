// import { Avatar, Button, ButtonGroup, Card, CardContent, Grid, Typography, TextField, Modal, Box } from "@mui/material"
// import { useContext, useState } from "react"
// import TimeAgo from "timeago-react"
// import { PostContext } from "../context/post-context"

// export const PostFeed = ({ post, handleDeleteModal }) => {
//   const [editStatus, setEditStatus] = useState(false)
//   const { updatePosts } = useContext(PostContext);
//   const [formData, setFormData] = useState({
//     name: post.name,
//     namaLayanan: post.namaLayanan,
//     alamat: post.alamat,
//     description: post.description,
//     harga: post.harga,
//     image: post.image
//   });

//   const handleEditChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   }

//   const handleSubmitUpdate = async () => {
//     await updatePosts(post.id, {
//       ...post,
//       name: formData.name,
//       namaLayanan: formData.namaLayanan,
//       alamat: formData.alamat,
//       description: formData.description,
//       harga: formData.harga,
//       image: formData.image
//     });
//     setEditStatus(false);
//   }

//   return (
//     <Card key={`post-${post.id}`} style={{ marginBottom: 20 }}>
//       <CardContent style={{ textAlign: "left" }}>
//         <Grid container>
//           <Grid xl={1}>
//             <Avatar alt={post.name} src={post.image} />
//           </Grid>
//           <Grid xl={7}>
//             <Typography>{post.name}</Typography>
//           </Grid>
//           <Grid xl={4} style={{ textAlign: "right" }}>
//             <Typography>
//               <TimeAgo datetime={post.created} locale='id_ID' />
//             </Typography>
//           </Grid>
//         </Grid>
//         {!editStatus && (
//           <>
//             <Typography>Name: {post.name}</Typography>
//             <Typography>Nama Layanan: {post.namaLayanan}</Typography>
//             <Typography>Alamat: {post.alamat}</Typography>
//             <Typography>Description: {post.description}</Typography>
//             <Typography>Harga: {post.harga}</Typography>
//             <Typography>Image: {post.image}</Typography>
//           </>
//         )}
//         {editStatus && (
//           <>
//             <TextField name="name" value={formData.name} onChange={handleEditChange} />
//             <TextField name="namaLayanan" value={formData.namaLayanan} onChange={handleEditChange} />
//             <TextField name="alamat" value={formData.alamat} onChange={handleEditChange} />
//             <TextField name="description" value={formData.description} onChange={handleEditChange} />
//             <TextField name="harga" value={formData.harga} onChange={handleEditChange} />
//             <TextField name="image" value={formData.image} onChange={handleEditChange} />
//             <Button onClick={handleSubmitUpdate}>Submit</Button>
//           </>
//         )}
//       </CardContent>
//       <div style={{ textAlign: "right", padding: 20 }}>
//         <ButtonGroup>
//           <Button onClick={() => setEditStatus(!editStatus)}>Edit</Button>
//           <Button color="error" onClick={() => handleDeleteModal(post.id)}>Delete</Button>
//         </ButtonGroup>
//       </div>
//     </Card>
//   );
// }
