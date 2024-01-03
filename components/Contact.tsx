import ContactForm from './forms/ContactForm/ContactForm';
import H2 from './H2/H2';

const Contact = () => (
  <div className="flex flex-col md:flex-row  gap-8 p-8" id="contact">
    <section className="flex flex-col gap-y-8 flex-[0_0_50%]">
      <H2>Holla.</H2>
      <p className="text-black text-lg m-0">
        Great idea for the next big thing? Let us help you bring it to life.
        Send us a quick message and we&apos;ll get back to you as soon as we
        can. The more detail the better, but if you&apos;re still not 100% sure
        on all the specifics, thats fine too. Alternatively you can shoot us an
        email at{' '}
        <a href="mailto:ezeikel@1188.agency" className="text-primary">
          ezeikel@1188.agency
        </a>
        .
      </p>
    </section>
    <ContactForm className="flex-[0_0_50%]" />
  </div>
);

export default Contact;
