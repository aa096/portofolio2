import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton({ url, label, icon }) {
  return (
    <button
      className="flex items-center gap-2 hover:text-primary hover:scale-105 transform transition-all duration-200"
      onClick={() => window.open(url, "_blank", "noopener noreferrer")}
      aria-label={`Open ${label}`}
    >
      <FontAwesomeIcon icon={icon} className="text-[32px] hover:scale-110 transform transition-all duration-200" />
    </button>
  );
}

export default IconButton;
