import '../../styles/contact.css';

const Contact = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='contact'>
      <h1>Contact Us</h1>
      <div>
        <i>Feel free to get in touch with us. We're here to assist you.</i>

        <h3>Phone</h3>

        <p>
          If you have any questions or need assistance, don't hesitate to call
          us at:
        </p>

        <p>
          <a className='phone-no' href='tel:123-456-7890'>
            123-456-7890
          </a>
        </p>

        <h3>Book a Car Using Our Mobile App</h3>

        <p>
          Booking a luxury car with Luxedrive has never been easier. Download
          our mobile app to access our exclusive fleet and make reservations on
          the go:
        </p>

        <p>
          <a
            href='#footer'
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('footer');
            }}
            className='download'
          >
            Download the Luxedrive Mobile App
          </a>
        </p>

        <h2>Visit Our Locations</h2>

        <div class='contact-location' id='location1'>
          <h3>New York City</h3>
          <p>Address: 123 Main Street, New York City, ZIP</p>
          <p>
            Phone:{' '}
            <a className='phone-no' href='tel:123-456-7890'>
              123-456-7890
            </a>
          </p>
        </div>

        <div class='contact-location' id='location2'>
          <h3>Albany</h3>
          <p>Address: 456 Oak Avenue, Albany, ZIP</p>
          <p>
            Phone:{' '}
            <a className='phone-no' href='tel:518-555-1234'>
              518-555-1234
            </a>
          </p>
        </div>

        <div class='contact-location' id='location3'>
          <h3>Syracuse</h3>
          <p>Address: 789 Maple Street, Syracuse, ZIP</p>
          <p>
            Phone:{' '}
            <a className='phone-no' href='tel:315-555-5678'>
              315-555-5678
            </a>
          </p>
        </div>

        <div class='contact-location' id='location4'>
          <h3>Rochester</h3>
          <p>Address: 101 Pine Road, Rochester, ZIP</p>
          <p>
            Phone:{' '}
            <a className='phone-no' href='tel:585-555-9876'>
              585-555-9876
            </a>
          </p>
        </div>

        <p>
          We look forward to serving you at any of our convenient locations.
        </p>
      </div>
    </div>
  );
};

export default Contact;
