import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  role: string;
  image: string;
  bioText: string;
  detailedBioTitle: string;
  description: string;
}

const BioModal = ({
  isOpen,
  onClose,
  title,
  role,
  image,
  bioText,
  detailedBioTitle,
  description,
}: BioModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg mx-auto"
          >
            <Card className="border ring-0 border-white shadow-2xl rounded-3xl overflow-hidden relative w-full h-auto bg-white">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-gray-400 hover:bg-gray-100 rounded-full z-10"
                onClick={onClose}
              >
                <X size={20} />
              </Button>

              <CardContent className="p-6 sm:p-10 flex flex-col items-center text-center">
                {/* Bio Header */}
                <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-orange-50 shadow-md mb-6">
                  <AvatarImage src={image} alt={title} className="object-cover" />
                  <AvatarFallback>{title.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>

                <h3 className="text-2xl sm:text-3xl font-medium text-black mb-1">
                  {title}
                </h3>
                <p className="text-[#F97316] font-medium text-lg sm:text-xl mb-6">
                  {role}
                </p>

                <div className="w-full h-px bg-gray-100 mb-6" />

                {/* Bio Description */}
                <div className="text-black leading-relaxed text-base sm:text-lg text-left">
                  <span className="font-bold underline text-[#1E73BE] block mb-2">{detailedBioTitle}</span>
                  <p className="mb-4">{bioText}</p>
                  <p>{description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BioModal;
