export default function ContactPage() {
  return (
    <>
      <h1>Get in touch!</h1>
      <div>
        <p>
          Let's get the conversation going. If you are interested in becoming a
          collector or want to join the community to make the world more
          colorful, please share with us and we will get back to you as soon as
          possible.
        </p>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">First Name</span>
        </label>
        <label className="input-group">
          {/* <span>First Name</span> */}
          <input
            // type="text"
            placeholder="first name"
            className="input input-bordered"
          />
        </label>
        <label className="label">
          <span className="label-text">Last Name</span>
        </label>
        <label className="input-group">
          {/* <span>Last Name</span> */}
          <input
            // type="text"
            placeholder="Last Name"
            className="input input-bordered"
          />
        </label>

        <label className="label">
          <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
          {/* <span>Email</span> */}
          <input
            // type="text"
            placeholder="info@yuyehlin.com"
            className="input input-bordered"
          />
        </label>

        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <label className="input-group">
          {/* <span>Message</span> */}
          <input
            // type="text"
            placeholder=" "
            className="input input-bordered"
          />
        </label>
      </div>
    </>
  );
}
