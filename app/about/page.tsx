import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-6 border-b pb-4">About Dr. Md. Jahangir Alam</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Profile Overview */}
              <div>
                <h2 className="text-xl font-semibold text-blue-800 mb-4">Professional Profile</h2>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start">
                    <span className="font-medium w-32 flex-shrink-0">Name:</span>
                    <span>Dr. Md. Jahangir Alam (মোঃ জাহাঙ্গীর আলম)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32 flex-shrink-0">Designation:</span>
                    <span>Assistant Surgeon / Medical Officer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32 flex-shrink-0">Current Role:</span>
                    <span>OSD (Additional), Study Deputation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32 flex-shrink-0">Organization:</span>
                    <span>Directorate General of Health Services, Mohakhali, Banani, Dhaka</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32 flex-shrink-0">Joining Date:</span>
                    <span>01-06-2023</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32 flex-shrink-0">District:</span>
                    <span>Khagrachari</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32 flex-shrink-0">BCS Batch:</span>
                    <span>39</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32 flex-shrink-0">HRIS ID:</span>
                    <span>166027</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32 flex-shrink-0">Code:</span>
                    <span>138648</span>
                  </li>
                </ul>
              </div>

              {/* Education & Training */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-blue-800 mb-4">Education</h2>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-slate-900">MBBS (2015)</h3>
                        <p className="text-slate-600">Sylhet MAG Osmani Medical College</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-blue-800 mb-4">Postgraduate / Training</h2>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-slate-900">MS in Orthopedic Surgery (Study Deputation)</h3>
                          <p className="text-slate-600">Chattogram Medical College (2023 - 2026)</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-slate-900">MS in Orthopedic Surgery (Study Deputation)</h3>
                          <p className="text-slate-600">Chattogram Medical College (2020 - 2022)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
