import React from "react";
import "./Timeline.css";


const TimelinePage = () => {
  return (
    <>
    <section style={{backgroundColor: "#F0F2F5"}}>
  <div className="container py-5">
    <div className="main-timeline-2">
      <div className="timeline-2 left-2">
        <div className="card">
          <img src="/images/Stage1.jpg" className="card-img-top"
            alt="Responsive image"/>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-4">Stage 1</h4>
            <p className="text-muted mb-4"><i className="far fa-clock" aria-hidden="true"></i> 2017</p>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
      <div className="timeline-2 right-2">
        <div className="card">
          <img src="https://images.pexels.com/photos/6439163/pexels-photo-6439163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top"
            alt="Responsive image"/>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-4">Stage 2</h4>
            <p className="text-muted mb-4"><i className="far fa-clock" aria-hidden="true"></i> 2016</p>
            <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt.</p>
          </div>
        </div>
      </div>
      <div className="timeline-2 left-2">
        <div className="card">
          <img src="https://images.pexels.com/photos/3562689/pexels-photo-3562689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top"
            alt="Responsive image"/>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-4">Stage 3</h4>
            <p className="text-muted mb-4"><i className="far fa-clock" aria-hidden="true"></i> 2015</p>
            <p className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur?</p>
          </div>
        </div>
      </div>
      <div className="timeline-2 right-2">
        <div className="card">
          <img src="https://images.pexels.com/photos/38293/workers-construction-site-hardhats-38293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top"
            alt="Responsive image"/>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-4"> Stage 4</h4>
            <p className="text-muted mb-4"><i className="far fa-clock" aria-hidden="true"></i> 2014</p>
            <p className="mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
              id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
          </div>
        </div>
      </div>
      <div className="timeline-2 left-2">
        <div className="card">
          <img src="https://cdn.resize.sparkplatform.com/pvr/2048x1600/true/20210427181925458693000000-o.jpg" className="card-img-top"
            alt="Responsive image"/>
          <div className="card-body p-4">
            <h4 className="fw-bold mb-4">Finally: Your house is ready</h4>
            <p className="text-muted mb-4"><i className="far fa-clock" aria-hidden="true"></i> 2013</p>
            <p className="mb-0">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum
              hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
};

export default TimelinePage;