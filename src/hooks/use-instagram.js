// import { graphql, useStaticQuery } from 'gatsby'

// const useInstagram = () => {
// 	const data = useStaticQuery(graphql`
// 		query {
// 			allInstagramContent(
// 				filter: {
// 					id: {
// 						in: [
// 							"e8371280-c3f8-55c5-a827-edb7a4d3d492"
// 							"97305b11-b472-5a33-a61c-f36a0eefaa17"
// 							"ec187cee-265b-519f-b0cb-e7eab1420ebc"
// 							"da3d9a30-8a1e-540f-87c3-4323446b8ff7"
// 						]
// 					}
// 				}
// 			) {
// 				nodes {
// 					id
// 					link
// 					localImage {
// 						childImageSharp {
// 							fluid(maxWidth: 240, maxHeight: 240) {
// 								...GatsbyImageSharpFluid_withWebp
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	return data.allInstagramContent.nodes.map(node => ({
// 		...node.localImage.childImageSharp,
// 		id: node.id,
// 		link: node.link,
// 	}))
// }

// export default useInstagram
