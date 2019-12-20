import { render } from "@testing-library/react";
import Contact from "../Contact";
import "jest-styled-components";

test("renders", () => {
  const { debug } = render(<Contact />);
  debug();
});

test("renders", () => {
  const { container } = render(<Contact />);
  expect(container).toMatchInlineSnapshot(`
    .c3 {
      display: grid;
      grid-row-gap: var(--spacing-medium);
    }

    .c8 {
      display: grid;
      grid-row-gap: var(--spacing-medium);
    }

    .c5 {
      display: grid;
      grid-row-gap: var(--spacing-medium);
    }

    .c6 {
      display: grid;
      grid-template-rows: auto 1fr;
      grid-row-gap: var(--spacing-medium);
    }

    .c6 .error {
      font-size: var(--font-size-tiny);
      background-color: var(--color-red);
      color: var(--color-white);
      padding: var(--spacing-small);
    }

    .c6 button {
      background-color: var(--color-tertiary);
    }

    .c7 {
      color: var(--color-black);
      text-transform: capitalize;
    }

    .c1 {
      font-size: 3.2rem;
      margin: 0;
      position: relative;
      color: var(--color-black);
    }

    .c1:after {
      position: relative;
      content: "";
      display: block;
      position: absolute;
      background-color: var(--color-primary);
      height: 6px;
      width: 10rem;
      bottom: -6px;
      left: 0;
    }

    .c0 {
      display: grid;
      grid-row-gap: var(--spacing-large);
      padding: var(--spacing-large);
    }

    .c2 p {
      color: var(--color-black);
      font-size: 1.8rem;
      line-height: 3.2rem;
      margin: 0;
    }

    .c2 p a {
      color: var(--color-primary);
    }

    @media (min-width:768px) {
      .c5 {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: var(--spacing-medium);
      }
    }

    @media (min-width:768px) {
      .c1 {
        font-size: 4rem;
      }
    }

    @media (min-width:768px) {
      .c0 {
        grid-template-columns: repeat(4,1fr);
        grid-column-gap: var(--spacing-huge);
        padding: var(--spacing-huge);
      }
    }

    @media (min-width:768px) {
      .c2 {
        grid-column: 1 / 3;
      }
    }

    @media (min-width:768px) {
      .c4 {
        grid-column: 3 / -1;
      }
    }

    <div>
      <div
        class="c0"
        id="contact"
      >
        <h2
          class="c1"
        >
          Holla.
        </h2>
        <div
          class="c2"
        >
          <p>
            Great idea for the next big thing? Let us help you bring it to life. Send us a quick message and we'll get back to you as soon as we can. The more detail the better, but if you're still not 100% sure on all the specifics, thats fine too. Alternatively you can shoot us an email at 
            <a
              href="mailto:info@1188.agency"
            >
              info@1188.agency
            </a>
            .
          </p>
        </div>
        <form
          class="c3 c4"
        >
          <section
            class="c5"
          >
            <div
              class="c6"
            >
              <label
                class="c7"
                for="firstName"
              >
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                value=""
              />
            </div>
            <div
              class="c6"
            >
              <label
                class="c7"
                for="lastName"
              >
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                value=""
              />
            </div>
          </section>
          <section
            class="c8"
          >
            <div
              class="c6"
            >
              <label
                class="c7"
                for="email"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                value=""
              />
            </div>
            <div
              class="c6"
            >
              <label
                class="c7"
                for="phoneNumber"
              >
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="tel"
                value=""
              />
            </div>
            <div
              class="c6"
            >
              <label
                class="c7"
                for="message"
              >
                Message
              </label>
              <textarea
                name="message"
              />
            </div>
            <div
              class="c6"
            >
              <button
                disabled=""
                type="submit"
              >
                Send
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  `);
});
