// ContactMe.jsx
import React, { useRef, useState } from "react";
import { Input, Textarea, Typography, Spinner } from "@material-tailwind/react";
import { FiSend } from "react-icons/fi";
import ContactCard from "./ContactCard";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

const ContactMe = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setOpen(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setLoading(false);
          console.error("Email send error:", error.text);
        }
      );
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const SlideTransition = (props) => <Slide {...props} direction="left" />;

  return (
    <section id={id} className="pt-6 overflow-hidden">
      <div className="px-8 py-8 lg:py-16 flex justify-center">
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionComponent={SlideTransition}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            We got your message. Thank You!
          </Alert>
        </Snackbar>

        <div className="container text-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 md:text-xl text-neutralGrey lg:text-2xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-3xl text-black lg:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Contact Us
          </Typography>

          <div className="mt-20 gap-y-6 md:flex justify-center lg:gap-24 md:gap-12">
            {/* Contact cards */}
            <div className="flex justify-center mb-8">
              <div className="space-y-3 flex flex-col">
                {/* Email */}
                <div
                  className="contact-card"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <p className="text-lg font-semibold text-neutralDGrey mb-3">
                    Talk to us
                  </p>
                  <ContactCard
                    appName="Email"
                    contactThrough="info@orbivault.com"
                    icon={<MdOutlineEmail />}
                    toLink="mailto:info@orbivault.com"
                  />
                </div>

                {/* WhatsApp */}
                <div
                  className="contact-card"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <ContactCard
                    appName="WhatsApp"
                    contactThrough="+971 56 772 6639"
                    icon={<FaWhatsapp />}
                    toLink="https://wa.me/+971567726639"
                  />
                </div>
              </div>
            </div>

            {/* Contact form */}
            <form
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="flex justify-center"
              ref={form}
              onSubmit={sendEmail}
            >
              {/* Hidden field so EmailJS knows who to send to */}
              <input
                type="hidden"
                name="to_email"
                value="info@orbivault.com"
              />

              <div>
                <p className="mb-3 text-center max-w-96 min-w-80 text-lg font-semibold text-neutralDGrey">
                  Write a message
                </p>
                <div className="flex flex-col gap-4 w-full">
                  <Input
                    color="gray"
                    size="lg"
                    required
                    label="Name"
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="focus:border-t-gray-900 border-1 tracking-wider"
                    containerProps={{ className: "!min-w-full" }}
                  />

                  <Input
                    color="gray"
                    size="lg"
                    required
                    label="Your Email"
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:border-t-gray-900 tracking-wider"
                    containerProps={{ className: "!min-w-full" }}
                  />

                  <Textarea
                    rows={6}
                    required
                    color="gray"
                    label="Your Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="focus:border-t-gray-900 tracking-wider"
                    containerProps={{ className: "!min-w-full" }}
                  />

                  <button
                    type="submit"
                    className="px-3 flex w-full justify-center items-center py-3 text-sm bg-greenPrimary hover:bg-green-400 border transition duration-150 text-white rounded-lg"
                  >
                    {loading ? "Sending" : "Send Message"}
                    {loading ? (
                      <Spinner className="h-4 w-4 ml-4" color="white" />
                    ) : (
                      <FiSend className="ml-4" />
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
