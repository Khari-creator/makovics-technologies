import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-extrabold text-white mb-4">
            Makovics<span className="text-blue-500">Tech</span>
          </h3>
          <p className="text-sm leading-relaxed">
            We design and build scalable software solutions, modern websites,
            and mobile applications for growing businesses.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services">Software Development</Link></li>
            <li><Link href="/services">Web Development</Link></li>
            <li><Link href="/services">Mobile App Development</Link></li>
            <li><Link href="/services">API Integration</Link></li>
            <li><Link href="/services">Website Maintenance</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/solutions/pos">Point of Sale</Link></li>
            <li><Link href="/solutions/school">School Management</Link></li>
            <li><Link href="/solutions/hospital">Hospital Management</Link></li>
            <li><Link href="/solutions/hr">HR Management</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: info@makovicstechnologies.com</li>
            <li>Phone: +254 708500398</li>
            <li>+254 719648585</li>
            <li>
              <Link
                href="/contact"
                className="inline-block mt-3 rounded-lg bg-blue-600 px-4 py-2 text-white text-sm font-semibold hover:bg-blue-700 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Makovics Technologies. All rights reserved.
      </div>
    </footer>
  );
}
