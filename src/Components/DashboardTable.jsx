import { useState, useEffect } from 'react';
import { Button } from '../Components/ui/button';
import Sidebar from './Sidebar'; // Assuming the Sidebar component is in a separate file

const dummyData = [
  {
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
  },
  {
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    createdOn: "21 hours ago",
  },
  {
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    createdOn: "a day ago",
  },
  {
    title: "Top Virtual Executive Assistant Services in 2024",
    keyword: "virtual executive assistant [2900]",
    words: 2878,
    createdOn: "1 Oct 24",
  },
  {
    title: "Unlimited Graphic Design Services",
    keyword: "unlimited graphic design services [3900]",
    words: 1882,
    createdOn: "--",
  },
  {
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    createdOn: "--",
  },
  {
    title: "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [8100]",
    words: 2261,
    createdOn: "--",
  },
  {
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [890]",
    words: 1543,
    createdOn: "--",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [3900]",
    words: 1974,
    createdOn: "--",
  },
];

export default function DashboardTable() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Articles</h2>
            <div className="flex gap-2">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">Generated Articles</Button>
              <Button className="text-gray-600 hover:bg-gray-100">Published Articles</Button>
              <Button className="text-gray-600 hover:bg-gray-100">Scheduled Articles</Button>
              <Button className="text-gray-600 hover:bg-gray-100">Archived Articles</Button>
            </div>
          </div>

          <input
            type="text"
            placeholder="Search for Title & Keywords..."
            className="mb-4 p-2 border rounded w-full text-sm text-gray-600 placeholder-gray-400"
          />

          <table className="w-full table-auto border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 uppercase">
                <th className="p-3 font-medium">
                  <input type="checkbox" className="mr-2" />
                  Article Title
                </th>
                <th className="p-3 font-medium">Keyword [Traffic]</th>
                <th className="p-3 font-medium">Words</th>
                <th className="p-3 font-medium">Created On</th>
                <th className="p-3 font-medium">Action</th>
                <th className="p-3 font-medium">Publish</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-600">
                    Loading articles...
                  </td>
                </tr>
              ) : (
                dummyData.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <input type="checkbox" className="mr-2" />
                      {row.title}
                    </td>
                    <td className="p-3">{row.keyword}</td>
                    <td className="p-3">{row.words}</td>
                    <td className="p-3">{row.createdOn}</td>
                    <td className="p-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border border-gray-300 text-gray-600 hover:bg-gray-100"
                      >
                        View
                      </Button>
                    </td>
                    <td className="p-3">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174881.png"
                        alt="WordPress"
                        className="w-5 h-5"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <p>Total 9 Article Titles | Show 10 entries per page</p>
            <div className="flex gap-2">
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">
                1
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">
                / 1
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}