function TechSwitchProjects () {

const tsprojects = [
    { 
        Name: "Bookish",
        Technologies: "ASP.NET MVC, C#, PostgreSQL, Entity Framework Core, Bootstrap",
    },
    { 
        Name: "BusBoard",
        Technologies: "JavaScript, node modules, APIs",
    },
]
    return (
        <>
        <h1>TechSwitch Projects</h1>
        {tsprojects.map((project) => {
            return(
            <div className="card">
                <img src="..." className="card-img-top" alt={project.Name}/>
                <div className="card-body">
                    <h5 className="card-title">{project.Name}</h5>
                    <p className="card-text">Technologies used: {project.Technologies}</p>
                </div>
            </div>)
        })}
        </>
    )
    
}

export default TechSwitchProjects