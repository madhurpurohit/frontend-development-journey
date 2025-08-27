import {
  availableInLinks,
  companyLinks,
  contactLinks,
  legalLinks,
  lifeAtSwiggyLinks,
  socialLinks,
} from "../../data/footerData";

export default function Footer() {
  const LinkList = ({ title, links }) => (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold text-black">{title}</h3>
      <ul className="space-y-3 font-medium text-[#02060c99]">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-orange-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[#f0f0f5] py-16">
      <div className="container mx-auto max-w-[76%]">
        <div className="mb-12 grid grid-cols-1 gap-8 text-gray-600 md:grid-cols-5">
          <div className="md:col-span-1">
            <div className="mb-2 flex items-center gap-2">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
                alt="Swiggy Logo"
                className="h-12 w-40"
              />
            </div>
            <p className="text-sm text-gray-500">© 2025 Swiggy Limited</p>
          </div>

          <div>
            <LinkList title="Company" links={companyLinks} />
          </div>

          <div>
            <LinkList title="Contact us" links={contactLinks} />
            <LinkList title="Legal" links={legalLinks} />
          </div>

          <div>
            <LinkList title="Available in:" links={availableInLinks} />
            <button className="flex items-center gap-2 rounded-md border border-gray-400 px-3 py-1 text-gray-600 transition-colors hover:border-orange-500">
              <span>685 cities</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          <div>
            <LinkList title="Life at Swiggy" links={lifeAtSwiggyLinks} />
            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-800">
                Social Links
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={link.icon} alt={link.name} className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300" />

        <div className="flex flex-col items-center justify-between pt-8 md:flex-row">
          <p className="mb-4 text-lg font-semibold text-gray-800 md:mb-0">
            For better experience, download the Swiggy app now
          </p>
          <div className="flex space-x-4">
            <a
              href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
