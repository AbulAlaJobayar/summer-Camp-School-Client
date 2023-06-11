import Container from "../Container";

const Footer = () => {
  return (
    <div className="bg-neutral-100 ">
      <Container>
        <footer className="footer py-10 px-6  text-base-content">
          <div>
            <h1 className="text-2xl font-bold text-[#2572ff]">Powerlearn</h1>
            <p>
            Powerlearn Institution.
              <br />
              Providing quality of teaching since 2021
            </p>
          </div>
          <div>
            <span className="footer-title">SERVICES</span>
            <a className="link link-hover">spins language</a>
            <a className="link link-hover">arabic language</a>
            <a className="link link-hover">urdu language</a>
            <a className="link link-hover">english language</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
