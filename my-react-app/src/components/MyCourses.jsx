import React from 'react';

const MyCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      thumbnail: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Course 2",
      thumbnail: "https://via.placeholder.com/150"
    },
    // Add more courses as needed
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src={course.thumbnail} 
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{course.title}</h3>
              <div className="flex justify-between items-center">
                <button className="text-blue-600 hover:text-blue-800">
                  Edit Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
