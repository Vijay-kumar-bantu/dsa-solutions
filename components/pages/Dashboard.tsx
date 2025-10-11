import React from "react";

// Dummy data for illustration. Replace with real data fetching.
const user = {
  name: "Vijay Kumar",
  email: "vijay@example.com",
  avatar: "https://ui-avatars.com/api/?name=Vijay+Kumar",
  completed: 42,
  total: 100,
  history: [
    { title: "Two Sum", date: "2025-09-25" },
    { title: "Reverse Linked List", date: "2025-09-24" },
    { title: "Valid Parentheses", date: "2025-09-23" },
  ],
};

function getCompletionPercentage(completed: number, total: number) {
  return total === 0 ? 0 : Math.round((completed / total) * 100);
}

const Dashboard: React.FC = () => {
  const percentage = getCompletionPercentage(user.completed, user.total);

  return (
    <div className="max-w-3xl mx-auto p-6 dark:text-white">
      {/* User Info */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full border-2 border-primary"
        />
        <div>
          <h2 className="text-xl font-semibold text-primary">{user.name}</h2>
          <p className="text-sm text-muted">{user.email}</p>
        </div>
      </div>

      {/* Completion Status */}
      <div className="flex items-center gap-8 mb-8">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-300 dark:text-gray-700"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
            />
            <circle
              className="text-primary-600 dark:text-primary-400"
              strokeWidth="10"
              strokeDasharray="282.6"
              strokeDashoffset={282.6 - (282.6 * percentage) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              style={{ transition: "stroke-dashoffset 0.5s" }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-primary">
            {percentage}%
          </span>
        </div>
        <div>
          <div className="text-lg font-medium text-primary">
            {user.completed} / {user.total} Problems Completed
          </div>
          <div className="text-sm text-muted">Keep going! 🚀</div>
        </div>
      </div>

      {/* History */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-primary">
          Recent History
        </h3>
        <ul className="divide-y divide-border rounded-lg bg-card dark:bg-card-dark">
          {user.history.map((item, idx) => (
            <li
              key={idx}
              className="py-3 px-4 flex justify-between items-center"
            >
              <span className="text-base">{item.title}</span>
              <span className="text-xs text-muted">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
