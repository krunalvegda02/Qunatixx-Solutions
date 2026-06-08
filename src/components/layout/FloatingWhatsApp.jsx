import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/1234567890?text=Hi%20Quantixx%20Solutions,%20I%20would%20like%20to%20discuss%20a%20project!";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact us on WhatsApp"
    >
      <span className="absolute right-16 bg-bg-elevated text-text-primary text-xs font-semibold py-1.5 px-3 rounded-sm border border-border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl font-sans">
        Chat with Us
      </span>
      {/* Pulse rings */}
      <span className="absolute inset-0 w-full h-full rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
      <svg
        className="w-7 h-7 relative z-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.116-2.879-6.98-1.858-1.865-4.332-2.89-6.97-2.891-5.439 0-9.867 4.42-9.87 9.868-.001 1.77.465 3.498 1.352 5.02L1.874 21.8l4.773-1.252a9.79 9.79 0 0 0 4.825 1.451zM18.423 15.11c-.347-.173-2.054-1.013-2.37-1.128-.317-.116-.549-.173-.781.173-.231.347-.896 1.128-1.098 1.359-.202.231-.404.26-.75.087-.347-.173-1.464-.54-2.79-1.722-1.03-.919-1.725-2.054-1.927-2.4-.202-.347-.022-.535.151-.707.156-.155.347-.404.52-.606.173-.202.231-.347.347-.577.116-.231.058-.433-.029-.606-.087-.173-.781-1.875-1.07-2.57-.28-.674-.56-.583-.781-.594-.202-.01-.433-.012-.664-.012-.231 0-.606.087-.924.433-.317.347-1.213 1.185-1.213 2.89 0 1.705 1.242 3.35 1.416 3.58.173.231 2.446 3.735 5.926 5.24.828.358 1.474.57 1.978.73.832.264 1.588.227 2.188.138.667-.099 2.054-.838 2.343-1.649.29-.81.29-1.502.202-1.649-.088-.147-.318-.231-.664-.404z"/>
      </svg>
    </motion.a>
  );
}
