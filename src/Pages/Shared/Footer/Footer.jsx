const Footer = () => {
  return (
    <footer className=" footer mt-10 md:mt-24 p-10 bg-base-200 text-base-content">
      <nav className="md:mx-auto">
        <header className="footer-title">Services</header>
        <a className="link link-hover">Marriage Event</a>
        <a className="link link-hover">Birthday Party</a>
        <a className="link link-hover">Ceremony</a>
        <a className="link link-hover">Event Organizer</a>
      </nav>
      <nav className="md:mx-auto">
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Events</a>
        <a className="link link-hover">Upcoming Events</a>
      </nav>
      <nav className="md:mx-auto">
        <header className="footer-title">Legal</header>
        <a className="link link-hover text-center">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form className="mx-auto">
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
