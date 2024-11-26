import './index.css'
import SkillCard from '../SkillCard'
import { skillsData } from '../../utilities/data'
import { useState } from 'react'

function Skills() {
    const [activeSkillObject, changeActiveSkillObject] = useState(skillsData[0])
    console.log(activeSkillObject)
    const changeActiveSkillFun = (skillDe)=> {
        changeActiveSkillObject(skillDe)
    }
  return (
    <section id='skills-section' className='skills-section-con'>
       <h2 className='tech-pro-hea'>Technical Proficiency</h2>
       <div className='skills-showcase-con'>
         <div className='skills-details-box-con'>
            <ul className='boxes-container'>
                {skillsData.map((skillDetail)=>(
                    <SkillCard key={skillDetail.title} skillDetail={skillDetail} changeActiveSkillFun={changeActiveSkillFun}/>
                ))}
            </ul> 
         </div>
         <div className='skills-details-percent-con'>
            <h3 className='activeSkillHea'>{activeSkillObject.title}</h3>
            <hr/>
            <div className='progress-cells-con-container'>
               {activeSkillObject.skillsOb.map((eachSkill)=>(
                    <div className='progress-cell'>
                        <div className='progress-title-percent-row'>
                          <p className='skill-name'>{eachSkill.skill}</p>
                          <p className='skill-percentage'>{eachSkill.percentage}</p>
                        </div>

                        <div className='progress-bar-bg'>
                           <div className='progress-bar' style={{width:eachSkill.percentage}}></div>
                        </div>
                    </div>
))}
            </div>
         </div>
        </div>
      
    </section>
  )
}

export default Skills
/*
<div className='skills-title-con'>
                    <div className='skill-logo-con'>
                        <img className='skill-type-logo' alt='frontend' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732544989/responsive_ew1vu9.png'/>
                    </div>
                </div>
                <div className='skills-title-con'>
                    <div className='skill-logo-con'>
                      <img className='skill-type-logo' alt='backend' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732544989/responsive_ew1vu9.png'/>
                    </div>
                </div>
                <div className='skills-title-con'>
                    <div className='skill-logo-con'>
                      <img className='skill-type-logo' alt='tools' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732544140/work_16768526_onar2x.png'/>   
                    </div>
                </div>
                <div className='skills-title-con'>
                    <div className='skill-logo-con'>
                       <img className='skill-type-logo' alt='soft skills' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732544136/emerging-industries_15568329_uwrfgj.png'/>
                    </div>
                    
                </div>
            </div>*
        */

            /*
             <h2 className='tech-pro-hea'>Technical Proficiency</h2>
       <div className='skills-showcase-con'>
         <div className='skills-details-box-con'>
            <ul className='boxes-container'>
                {skillsData.map((skillDetail)=>(
                    <SkillCard key={skillDetail.title} skillDetail={skillDetail} changeActiveSkillFun={changeActiveSkillFun}/>
                ))}
            </ul> 
         </div>
         <div className='skills-details-percent-con'>
            <h3 className='activeSkillHea'>{activeSkillObject.title}</h3>
            <hr/>
            <div className='progress-cells-con-container'>
               {activeSkillObject.skillsOb.map((eachSkill)=>(
                    <div className='progress-cell'>
                        <div className='progress-title-percent-row'>
                          <p className='skill-name'>{eachSkill.skill}</p>
                          <p className='skill-percentage'>{eachSkill.percentage}</p>
                        </div>

                        <div className='progress-bar-bg'>
                           <div className='progress-bar' style={{width:eachSkill.percentage}}></div>
                        </div>
                    </div>
))}
            </div>
         </div>
        </div>*/