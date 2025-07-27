import { Form } from "react-router";

export const getContactFormData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);

    console.log(data);

    return null;
  } catch (error) {
    console.log(error);
  }
};

export const Contact = () => {
  return (
    <>
      <section className="container section-contact">
        <div className="container">
          <h2 className="section-common--heading">Contact Us</h2>
          <p className="section-common--subheading">
            Contact Get in touch with us. We are always here to help you.
          </p>
        </div>

        <div className="grid grid-two--cols">
          <div className="contact-content">
            <Form method="POST" action="/contact">
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="username"
                  placeholder="Enter your full name"
                  required
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter your message"
                  required
                  autoComplete="off"
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};
