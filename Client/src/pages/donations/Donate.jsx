import React from 'react';

const Donate = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">التبرعات</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-4">تبرع بطعام</h2>
          <p>ساهم في توفير وجبات طعام للأسر المحتاجة.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-4">تبرع بملابس</h2>
          <p>تبرع بملابس جديدة أو مستعملة بحالة جيدة.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-4">تبرع بكتب</h2>
          <p>ساهم في توفير الكتب للطلاب المحتاجين.</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;