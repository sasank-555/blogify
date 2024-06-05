export interface Blog {
  content: string;
  title: string;
  id: string;
  autherName: string;
}

// export const useBlogs = () => {
//   const [loading, setLoading] = useState(true);
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const a = "Bearer " + localStorage.getItem("token");
//   useEffect(() => {
//     async function fetchBlogsData() {
//       setLoading(true);
//       const response = await axios.get(
//         "http://127.0.0.1:8787/api/v1/blog/bulk",
//         {
//           headers: {
//             Authorization: a,
//           },
//         }
//       );
//       setBlogs(response.data.blogs);
//       setLoading(false);
//     }
//     fetchBlogsData();
//   }, []);

//   return {
//     loading,
//     blogs,
//   };
// };

// export const useBlog = ({ id }: { id: string }) => {
//   const [loading, setLoading] = useState(true);
//   const [blog, setBlog] = useState<Blog>();

//   useEffect(() => {
//     axios
//       .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
//         headers: {
//           Authorization: localStorage.getItem("token"),
//         },
//       })
//       .then((response) => {
//         setBlog(response.data.blog);
//         setLoading(false);
//       });
//   }, [id]);

//   return {
//     loading,
//     blog,
//   };
// };
