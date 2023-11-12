import { factory, primaryKey } from "@mswjs/data";

const db = factory({
  user: {
    id: primaryKey(() => "123"),
    email: () => "admin@admin.com",
    password: () => "admin",
  },
  favColors: () => [
    "rgba(225, 57, 143, 1)",
    "rgba(67, 168, 24, 1)",
    "rgba(216, 27, 32, 1)",
    "rgba(28, 224, 185, 1)",
    "rgba(224, 28, 222, 1)",
    "rgba(43, 223, 210, 1)",
  ],
});

export default db;
