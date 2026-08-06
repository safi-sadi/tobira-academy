import {
MapPin,
Phone,
Mail,
Clock3,
} from "lucide-react";

import { footerData } from "@/data/footer";

export default function FooterContact() {
  return (
    <div>

      <h3 className="mb-8 text-xl font-semibold">
        Contact
      </h3>

      <div className="space-y-6 text-slate-400">

        <div className="flex gap-4">
          <MapPin className="text-red-500" />
          <p>{footerData.contact.address}</p>
        </div>

        <div className="flex gap-4">
          <Phone className="text-red-500" />
          <p>{footerData.contact.phone}</p>
        </div>

        <div className="flex gap-4">
          <Mail className="text-red-500" />
          <p>{footerData.contact.email}</p>
        </div>

        <div className="flex gap-4">
          <Clock3 className="text-red-500" />
          <p>{footerData.contact.officeHours}</p>
        </div>

      </div>

    </div>
  );
}