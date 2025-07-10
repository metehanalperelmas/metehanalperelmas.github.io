// import BlogsImg from "./BlogsImg";

// <Fade bottom duration={1000} distance="40px">
//   <div className="blog-heading-div">
//     <div className="blog-heading-text-div">
//       <h1 className="blog-heading-text" style={{ color: theme.text }}>
//         {blogSection["title"]}
//       </h1>
//       <p
//         className="blog-header-detail-text subTitle"
//         style={{ color: theme.secondaryText }}
//       >
//         {blogSection["subtitle"]}
//       </p>
//       <div className="blogsite-btn-div">
//         <Button
//           text="Visit My Blogsite"
//           newTab={true}
//           href={blogSection.link}
//           theme={theme}
//         />
//       </div>
//     </div>
//     <div className="blog-heading-img-div">
//       {/* <img
// 											src={require(`../../assets/images/${blogSection["avatar_image_path"]}`)}
// 											alt=""
// 										/> */}
//       <BlogsImg theme={theme} />
//     </div>
//   </div>
// </Fade>

// <Fade bottom duration={1000} distance="40px">
//             <div className="address-heading-div">
//               <div className="contact-heading-img-div">
//                 {/* <img
// 											src={require(`../../assets/images/${addressSection["avatar_image_path"]}`)}
// 											alt=""
// 										/> */}
//                 <AddressImg theme={theme} />
//               </div>
//               <div className="address-heading-text-div">
//                 <h1
//                   className="address-heading-text"
//                   style={{ color: theme.text }}
//                 >
//                   {addressSection["title"]}
//                 </h1>
//                 <p
//                   className="contact-header-detail-text subTitle"
//                   style={{ color: theme.secondaryText }}
//                 >
//                   {addressSection["subtitle"]}
//                 </p>
//                 <h1
//                   className="address-heading-text"
//                   style={{ color: theme.text }}
//                 >
//                   {phoneSection["title"]}
//                 </h1>
//                 <p
//                   className="contact-header-detail-text subTitle"
//                   style={{ color: theme.secondaryText }}
//                 >
//                   {phoneSection["subtitle"]}
//                 </p>
//                 <div className="address-btn-div">
//                   <Button
//                     text="Visit on Google Maps"
//                     newTab={true}
//                     href={addressSection.location_map_link}
//                     theme={theme}
//                   />
//                 </div>
//               </div>
//             </div>
//           </Fade>

//           <Footer theme={this.props.theme} onToggle={this.props.onToggle} />

//           <Fade bottom duration={2000} distance="40px">
//             <div className="projects-heading-div">
//               <div className="projects-heading-img-div">
//                 {/* <img
// 											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
// 											alt=""
// 										/> */}
//                 <ProjectsImg theme={theme} />
//               </div>
//               <div className="projects-heading-text-div">
//                 <h1
//                   className="projects-heading-text"
//                   style={{ color: theme.text }}
//                 >
//                   {projectsHeader.title}
//                 </h1>
//                 <p
//                   className="projects-header-detail-text subTitle"
//                   style={{ color: theme.secondaryText }}
//                 >
//                   {projectsHeader["description"]}
//                 </p>
//               </div>
//             </div>
//           </Fade>

// <div className="repo-cards-div-main">
//           {ProjectsData.data.map((repo) => {
//             return <GithubRepoCard repo={repo} theme={theme} />;
//           })}
//         </div>
//         <Button
//           text={"More Projects"}
//           className="project-button"
//           href={greeting.githubProfile}
//           newTab={true}
//           theme={theme}
//         />
