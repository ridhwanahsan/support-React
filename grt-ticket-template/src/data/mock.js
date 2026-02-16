
export const users = [
  { id: 1, name: "Admin User", role: "admin", email: "admin@grt.com", avatar: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Agent Smith", role: "agent", email: "smith@grt.com", avatar: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Jane Doe", role: "customer", email: "jane@client.com", avatar: "https://i.pravatar.cc/150?u=3" },
];

export const tickets = [
  {
    id: "#1001",
    subject: "Login issue on mobile",
    requester: users[2],
    agent: users[1],
    priority: "High",
    status: "Open",
    created: "2024-02-14",
    category: "Technical",
    messages: [
      { id: 1, sender: users[2], text: "I can't login on my iPhone.", time: "10:00 AM" },
      { id: 2, sender: users[1], text: "Can you send a screenshot?", time: "10:05 AM" },
    ]
  },
  {
    id: "#1002",
    subject: "Feature request: Dark mode",
    requester: users[2],
    agent: null,
    priority: "Low",
    status: "New",
    created: "2024-02-15",
    category: "Feature Request",
    messages: []
  },
  {
    id: "#1003",
    subject: "Billing inquiry",
    requester: users[2],
    agent: users[1],
    priority: "Medium",
    status: "Closed",
    created: "2024-02-10",
    category: "Billing",
    messages: []
  }
];

export const stats = {
  total: 124,
  open: 15,
  newToday: 3,
  avgResolution: "4h 30m",
  entities: {
    agents: 8,
    customers: 450,
    departments: 5,
    projects: 12
  },
  rating: 4.8,
  breakdown: [
    { name: "Open", value: 15, color: "#0073aa" },
    { name: "Pending", value: 8, color: "#ffb900" },
    { name: "Closed", value: 101, color: "#46b450" },
  ],
  priority: [
    { name: "High", value: 10 },
    { name: "Medium", value: 45 },
    { name: "Low", value: 69 },
  ],
  products: [
    { name: "Plugin A", value: 40 },
    { name: "Theme B", value: 35 },
    { name: "Addon C", value: 25 },
    { name: "Service D", value: 24 }
  ]
};
