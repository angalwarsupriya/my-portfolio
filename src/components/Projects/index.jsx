import './index.css'
import {projectsData} from '../../utilities/data'
import ProjectCard from '../ProjectCard'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



//import Carousel from './Carousel';
console.log(projectsData)

const projectsDataNew = projectsData

function Projects() {
  return (
     <section id='my-projects' className='projects-section-con'>
        <h2 className='projects-hea'>Projects</h2>
        <div className='displaying-projects-con'>
            {projectsDataNew.map((proDetail)=>(
               <ProjectCard proDetail={proDetail}/>
            ))}
        </div>         
     </section>


  )
}

export default Projects


/*
<div className='displaying-projects-con'>
          <div className='normal-projects-con'>
           <div className="statis-projects-con">
              {projectsData.staticWebsites.map((proDetail)=>(
               <ProjectCard proDetail={proDetail}/>
              ))}
           </div>
           <div className="dynamic-projects-con">
             {projectsData.dynamicProjectsAndResponsiveProjects.map((proDetail)=>(
               <ProjectCard proDetail={proDetail}/>
              ))}
           </div>
         </div>
           
         <div className="published-projects-con">
            {projectsData.PublishedProjects.map((proDetail)=>(
               <ProjectCard proDetail={proDetail}/>
            ))}
         </div>
        </div>
////////////////////////////
         <div className="statis-projects-con">
              {projectsData.staticWebsites.map((proDetail)=>(
               <ProjectCard proDetail={proDetail}/>
              ))}
           </div>
           <div className="dynamic-projects-con">
             {projectsData.dynamicProjectsAndResponsiveProjects.map((proDetail)=>(
               <ProjectCard proDetail={proDetail}/>
              ))}
           </div>
         </div>
           
         <div className="published-projects-con">
            {projectsData.PublishedProjects.map((proDetail)=>(
               <ProjectCard proDetail={proDetail}/>
            ))}
         </div>
        */
