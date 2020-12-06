import React from "react";

const ProjectDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            dolores corrupti rem recusandae nostrum in deleniti animi expedita
            consequatur cumque nihil autem ipsa aliquam ratione, ut non et
            veritatis quibusdam!
          </p>
        </div>
        <div className="card-action frey lighten-4 grey-text">
          <div>Posted by Kurt Guardia</div>
          <div>9th December, 7am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
