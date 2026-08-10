import { FaWhatsapp } from 'react-icons/fa';
import { FloatingButton } from './WhatsAppButton.styles';

function WhatsAppButton() {
  return (
    <FloatingButton
      href="https://wa.me/5541999999999"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp />
    </FloatingButton>
  );
}

export default WhatsAppButton;