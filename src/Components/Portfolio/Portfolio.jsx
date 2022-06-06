import React from 'react'
import "./portfolio.css"
import image1 from "../../Assets/keeperapp.PNG"
import image2 from "../../Assets/todolist.PNG"
import image3 from "../../Assets/formstate.PNG"

const dataitem = [
  {
    id: 1,
    image: image1,
    title: "Keeper App",
    github: "https://github.com/obeespace/keep_app.git",
    livedemo: "https://obeespace.github.io/keep_app/",
  },

  {
    id: 2,
    image: image2,
    title: "To-do List",
    github: "https://github.com/obeespace/to-do_app.git",
    livedemo: "https://obeespace.github.io/to-do_app/",
  },

  {
    id: 3,
    image: image3,
    title: "Form State",
    github: "https://github.com/obeespace/changing_form_state_usestate.git",
    livedemo: "https://obeespace.github.io/changing_form_state_usestate/",
  }
]

const Portfolio = () => {

  var items = dataitem.map(function (item){
    return (
      <article className='portfolio_item'>
        <div className='portfolio_item-image'><img src={item.image}/></div>
        <h3>{item.title}</h3>
        <a href={item.github} className='btn portfolio_cta' target="_blank">GitHub</a>
        <a href={item.livedemo} className='btn btn-primary portfolio_cta' target="_blank">Demo</a>
      </article>
    )
  })
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {items}
      </div>
    </section>
  )
}

export default Portfolio