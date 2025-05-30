
export const scrollToContact = () => {
  const contactSection = document.querySelector('#contact-form');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
