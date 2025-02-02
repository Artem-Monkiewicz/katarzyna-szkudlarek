# Physiotherapist Website - Katarzyna Szkudlarek

**Physiotherapist** is a personal website for a physiotherapist providing information about the specialist and offering an easy way for users to contact her via a form on the "Contact" page. The site includes simple and intuitive navigation, is mobile-responsive, and has essential features like a mobile menu and form submission.

## Project Description

The website is designed to help users easily get in touch with the physiotherapist and learn more about her services. The site includes sections about the specialist, a contact form, and a link to reviews on **ZnanyLekarz**.

## Project Structure

1. **Home Page (index.html)** - basic information about the physiotherapist.
2. **About the Specialist (o-mnie.html)** - information about qualifications and experience.
3. **Reviews (ZnanyLekarz)** - a link to the specialist's profile on **ZnanyLekarz**.
4. **Contact (kontakt.html)** - a form for users to send messages to the specialist.

## Technologies

- **HTML5** - page structure and markup.
- **CSS3** - styling to ensure a modern, responsive look.
- **JavaScript** - mobile menu and basic interactive features.
- **Formspree** - to send form submissions to email.

## Installation

1. Clone the repository to your local computer:
   ```bash
   git clone https://github.com/Artem-Monkiewicz/katarzyna-szkudlarek
   ```
2. Open the project in your favorite text editor or IDE.
3. Run the project on a local server, for example, using Live Server in Visual Studio Code.

## How the Form Works
- The contact form on the **kontakt.html** page is submitted via the **Formspree** service, which allows for form submissions to be sent to your email without the need for server-side processing.
- After submission, the user is redirected to the same page with an empty form.

## Site Features

- **Mobile Menu:** An interactive menu that appears when the hamburger icon is clicked.
- **Contact Form:** A form to send a message to the specialist.
- **Review Link:** A link to the specialist's profile on **ZnanyLekarz**.

## Notes
- For the form to work properly, make sure the **Formspree** link in the form's action attribute is correct.
- Ensure the form **action** URL is active.

