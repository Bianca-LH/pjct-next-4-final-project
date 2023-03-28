export default function AboutPage() {
  return (
    <>
      <div className="hero min-h-screen bg-base-000">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/yuyehlin.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">About the Artist</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Contact</button>
          </div>
        </div>
      </div>
      {/* {/* <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="/images/yuyehlin.jpg" alt="profile picture of the artist" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">About the Artist</h2>
          <p>
            loijsjbhvihlajsdj kjsbouahoglajfjdbs ajshjnfkjsnlkjlk
            oahsjelfkjbsjehoshlkjl
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
          <br />
        </div>
        <br />
      </div> */}
    </>
  );
}
