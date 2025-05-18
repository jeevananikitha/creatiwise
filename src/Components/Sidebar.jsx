import { useState } from 'react';
import {
  FileTextIcon,
  PlusIcon,
  KeyIcon,
  HomeIcon,
  BarChartIcon,
  TrophyIcon,
  DownloadIcon,
  PenToolIcon,
  LinkIcon,
  BookOpenIcon,
  WrenchIcon,
  BotIcon,
  PackageIcon,
  DollarSignIcon,
  HelpCircleIcon,
  MegaphoneIcon,
  MessageCircleIcon,
  SettingsIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from 'lucide-react';

const menuItems = [
  {
    name: 'Articles',
    icon: FileTextIcon,
    isActive: true,
    isDropdown: true,
    dropdownItems: [
      { name: 'Generated Articles', isActive: true },
      { name: 'Published Articles', isActive: false },
      { name: 'Scheduled Articles', isActive: false },
      { name: 'Archived Articles', isActive: false },
    ],
  },
  { name: 'Create Article', icon: PlusIcon },
  { name: 'Generated Articles', icon: KeyIcon },
  { name: 'Keyword Projects', icon: HomeIcon },
  { name: 'AI Keyword to Article', icon: BarChartIcon },
  { name: 'Steal Competitor Keyword', icon: TrophyIcon },
  { name: 'Import Keyword from GSC', icon: DownloadIcon },
  { name: 'Manual Keyword to Article', icon: PenToolIcon },
  { name: 'Bulk Keyword to Article', icon: LinkIcon },
  { name: 'Longtail Keyword to Article', icon: BookOpenIcon },
  { name: 'Article Settings', icon: WrenchIcon },
  { name: 'Auto Blog', icon: BotIcon },
  { name: 'Internal Links', icon: LinkIcon },
  { name: 'Free Backlinks', icon: LinkIcon },
  { name: 'Integrations', icon: LinkIcon },
  { name: 'Subscription', icon: PackageIcon },
  { name: 'Affiliate Program', icon: DollarSignIcon },
  { name: 'Help Center', icon: HelpCircleIcon },
  { name: 'Updates', icon: MegaphoneIcon },
  { name: 'Live Chat Support', icon: MessageCircleIcon },
  { name: 'Profile', icon: SettingsIcon },
];

export default function Sidebar() {
  const [isArticlesOpen, setIsArticlesOpen] = useState(true); // Open by default to match the image

  return (
    <div className="w-64 bg-white shadow-md flex flex-col p-4 h-auto">
      <div className="flex items-center mb-6">
        <h1 className="text-4xl ml-16 font-bold text-gray-800">abun</h1>
      </div>
      <div className="mb-4">
        <select className="w-full p-2 border rounded-4xl text-sm text-gray-600 bg-white">
          <option>amazon.com</option>
        </select>
      </div>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item.isDropdown ? (
                <>
                  <button
                    onClick={() => setIsArticlesOpen(!isArticlesOpen)}
                    className={`flex items-center p-2 rounded text-sm w-full text-left ${
                      item.isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-2" />
                    {item.name}
                    {isArticlesOpen ? (
                      <ChevronUpIcon className="w-4 h-4 ml-auto" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                  {isArticlesOpen && (
                    <ul className="pl-8">
                      {item.dropdownItems.map((dropdownItem, subIndex) => (
                        <li key={subIndex} className="mb-1">
                          <a
                            href="#"
                            className={`flex items-center p-2 rounded text-sm ${
                              dropdownItem.isActive
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {dropdownItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href="#"
                  className={`flex items-center p-2 rounded text-sm ${
                    item.isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}